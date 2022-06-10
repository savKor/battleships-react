const http = require('http');
const express = require('express');
const WebSocket = require('ws');

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

const StateMachine = require('javascript-state-machine');

wss.getUniqueID = function() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	return s4() + s4() + '-' + s4();
};

let turn;
let winner;
let counter = 0;
const playersData = [];

const getDataObject = () => ({
	userId: null,
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

const stagesOfTheGame = new StateMachine({
	init: 'registration',
	transitions: [
		{ name: 'login', from: 'registration', to: 'putShips' },
		{ name: 'getInfo', from: 'putShips', to: 'battle' },
		{ name: 'findShips', from: 'battle', to: 'win' }
	],
	methods: {
		onLogin: function() {
			console.log('Все игроки зарегистрированн');
			wss.clients.forEach(function each(client) {
				counter = 0;
				client.send('Вcе игроки зашли');
			});
		},
		onGetInfo: function() {
			console.log('Ты передал все данные для игры');
			turn = playersData[0].username;
			winner = null;
			const objectForUsers = getDataObjectForClient();
			wss.clients.forEach(function each(client) {
				counter = 0;
				client.send(JSON.stringify(objectForUsers));
			});
		},
		onFindShips: function() {
			console.log('I vaporized');
		}
	}
});

const turnOfTheGame = new StateMachine({
	init: 'player1',
	transitions: [
		{ name: 'player2Turn', from: 'player1', to: 'player2' },
		{ name: 'player1Turn', from: 'player2', to: 'player1' }
	],
	methods: {
		onPlayer2Turn: function(lifecycle, arg1, arg2) {
			console.log('Второй игрок теперь ходит');
			const dataOfThePlayer = arg1;
			dataOfThePlayer.arrayOfMissedShot.push(arg2);
			turn = playersData[1].username;
			const objectForUsers = getDataObjectForClient();
			wss.clients.forEach(function each(client) {
				client.send(JSON.stringify(objectForUsers));
			});
		},
		onPlayer1Turn: function(lifecycle, arg1, arg2) {
			console.log('Первый игрок теперь ходит');
			const dataOfThePlayer = arg1;
			dataOfThePlayer.arrayOfMissedShot.push(arg2);
			turn = playersData[0].username;
			const objectForUsers = getDataObjectForClient();
			wss.clients.forEach(function each(client) {
				client.send(JSON.stringify(objectForUsers));
			});
		}
	}
});

wss.on('connection', (ws) => {
	ws.id = wss.getUniqueID();
	console.log(`New client connected with id: ${ws.id}`);

	ws.onmessage = ({ data }) => {
		const dataOfTheOtherPlayer = playersData.find((x) => x.userId !== ws.id);
		const dataOfThePlayer = playersData.find((x) => x.userId === ws.id);
		if (stagesOfTheGame.state === 'registration') {
			counter += 1;
			const newUser = getDataObject();
			const newNickname = JSON.parse(data);
			newUser.username = newNickname;
			newUser.userId = ws.id;
			playersData.push(newUser);
			console.log(`Client ${ws.id}: ${newUser.username}`);
			if (counter === 2) {
				stagesOfTheGame.login();
			}
		} else if (stagesOfTheGame.state === 'putShips') {
			const ships = JSON.parse(data);
			counter += 1;
			console.log(ships);
			dataOfThePlayer.ships = ships;
			console.log(`Client ${ws.id}: ${dataOfThePlayer.ships}`);

			if (counter === 2) {
				stagesOfTheGame.getInfo();
			}
		} else if (stagesOfTheGame.state === 'battle') {
			const cell = JSON.parse(data);
			if (dataOfTheOtherPlayer.ships.find((x) => x === cell)) {
				dataOfThePlayer.arrayOfShotShips.push(cell);
				const objectForUsers = getDataObjectForClient();
				wss.clients.forEach(function each(client) {
					client.send(JSON.stringify(objectForUsers));
				});
			} else {
				if (turnOfTheGame.state === 'player1') {
					turnOfTheGame.player2Turn(dataOfThePlayer, cell);
				} else {
					turnOfTheGame.player1Turn(dataOfThePlayer, cell);
				}
			}
		} else {
		}
	};

	ws.onclose = function() {
		console.log(`Client ${ws.id} has disconnected!`);
		playersData.splice(playersData.findIndex(({ userId }) => userId == 'Bob'), 1);
	};
});

server.listen(8082, () => console.log('Server started'));
