import { counter, playersData, turn, winner } from './storage';

const http = require('http');
const express = require('express');
const WebSocket = require('ws');

const app = express();

const server = http.createServer(app);

export const wss = new WebSocket.Server({ server });

const StateMachine = require('javascript-state-machine');

wss.getUniqueID = function() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	return s4() + s4() + '-' + s4();
};

const getDataObject = (id) => ({
	userId: id,
	username: null,
	ships: [],
	arrayOfShotShips: [],
	arrayOfMissedShot: []
});

const getDataObjectForClient = () => ({
	player1: playersData[0].username,
	player2: playersData[1].username,
	arrayOfMissedShotPlayer1: playersData[0].arrayOfMissedShot,
	arrayOfMissedShotPlayer2: playersData[1].arrayOfMissedShot,
	arrayOfShotShipsPlayer1: playersData[0].arrayOfShotShips,
	arrayOfShotShipsPlayer2: playersData[1].arrayOfShotShips,
	turn: turn,
	winner: winner
});

let turn;
let winner;
let counter = 0;
let playersData = [];

function workWithData(data) {
	if (ws.id === undefined) {
		console.log('ты не можешь зайти');
	} else {
		const dataOfTheOtherPlayer = playersData.find((x) => x.userId !== ws.id);
		const dataOfThePlayer = playersData.find((x) => x.userId === ws.id);
		if (stagesOfTheGame.state === 'registration') {
			counter += 1;
			dataOfThePlayer.username = data;
			if (counter === 2) {
				stagesOfTheGame.login();
			}
		} else if (stagesOfTheGame.state === 'putShips') {
			counter += 1;
			dataOfThePlayer.ships = data;
			if (counter === 2) {
				stagesOfTheGame.getInfo();
			}
		} else {
			const cell = data;
			const hitInShip = dataOfTheOtherPlayer.ships.find((x) => x === cell);
			if (hitInShip) {
				pushCellInTheArrayAndCheckIfYouWinOrNot(dataOfThePlayer, cell);
			} else {
				if (stagesOfTheGame.state === 'player1') {
					stagesOfTheGame.player2Turn(dataOfThePlayer, cell);
				} else {
					stagesOfTheGame.player1Turn(dataOfThePlayer, cell);
				}
			}
		}
	}
}

function sendDataToPlayers(dataOfThePlayer, cell, index) {
	dataOfThePlayer.arrayOfMissedShot.push(cell);
	turn = playersData[index].username;
	const objectForUsers = getDataObjectForClient();
	wss.clients.forEach(function(client) {
		client.send(JSON.stringify(objectForUsers));
	});
}

function pushCellInTheArrayAndCheckIfYouWinOrNot(dataOfThePlayer, cell) {
	dataOfThePlayer.arrayOfShotShips.push(cell);
	if (dataOfThePlayer.arrayOfShotShips.length === 20) {
		winner = dataOfThePlayer.username;
		stagesOfTheGame.findShips();
	} else {
		const objectForUsers = getDataObjectForClient();
		wss.clients.forEach(function(client) {
			client.send(JSON.stringify(objectForUsers));
		});
	}
}

const stagesOfTheGame = new StateMachine({
	init: 'registration',
	transitions: [
		{ name: 'login', from: 'registration', to: 'putShips' },
		{ name: 'getInfo', from: 'putShips', to: 'player1' },
		{ name: 'player2Turn', from: 'player1', to: 'player2' },
		{ name: 'player1Turn', from: 'player2', to: 'player1' },
		{ name: 'findShips', from: 'player1', to: 'win' },
		{ name: 'findShips', from: 'player2', to: 'win' }
	],
	methods: {
		onLogin: function() {
			console.log('Все игроки зарегистрированн');
			wss.clients.forEach(function(client) {
				counter = 0;
				client.send('Вcе игроки зашли');
			});
		},
		onGetInfo: function() {
			console.log('Ты передал все данные для игры');
			turn = playersData[0].username;
			winner = null;
			const objectForUsers = getDataObjectForClient();
			wss.clients.forEach(function(client) {
				counter = 0;
				client.send(JSON.stringify(objectForUsers));
			});
		},
		onPlayer2Turn: function(lifecycle, dataOfThePlayer, cell) {
			const index = 1;
			sendDataToPlayers(dataOfThePlayer, cell, index);
			console.log('Второй игрок теперь ходит');
		},
		onPlayer1Turn: function(lifecycle, dataOfThePlayer, cell) {
			const index = 0;
			sendDataToPlayers(dataOfThePlayer, cell, index);
			console.log('Первый игрок теперь ходит');
		},
		onFindShips: function() {
			console.log('Игра закончена');
			const objectForUsers = getDataObjectForClient();
			wss.clients.forEach(function(client) {
				client.send(JSON.stringify(objectForUsers));
			});
		}
	}
});

wss.on('connection', (ws) => {
	ws.send();

	if (playersData.length < 2) {
		ws.id = wss.getUniqueID();
		console.log(`New client connected with id: ${ws.id}`);
		const newUser = getDataObject(ws.id);
		playersData.push(newUser);
	} else {
		console.log('Страница уже занята двумя игроками');
	}

	ws.onmessage = ({ data }) => {
		const data = JSON.parse(data);
		workWithData(data);
	};

	ws.onclose = function() {
		console.log(`Client ${ws.id} has disconnected!`);
		const data = playersData.filter((data) => data.userId != ws.id);
		playersData = data;
	};
});

server.listen(8082, () => console.log('Server started'));
