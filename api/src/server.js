const http = require('http');
const express = require('express');
const WebSocket = require('ws');
const gameData = require('./storage/gameData');
const getUserData = require('./storage/userData');
const workWithStagesOfTheGame = require('./api/gameLogic');

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.getUniqueID = function() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	return s4() + s4() + '-' + s4();
};

wss.on('connection', (ws) => {
	if (gameData.playersData.length < 2) {
		ws.id = wss.getUniqueID();
		console.log(`New client connected with id: ${ws.id}`);
		const newUser = getUserData(ws.id);
		gameData.playersData.push(newUser);
	} else {
		console.log('Страница уже занята двумя игроками');
	}

	ws.onmessage = ({ data }) => {
		const dataParsed = JSON.parse(data);
		const dataToSendUsers = workWithStagesOfTheGame(dataParsed, ws.id);
		if (dataToSendUsers !== undefined) {
			wss.clients.forEach(function(client) {
				client.send(JSON.stringify(dataToSendUsers));
			});
		}
	};

	ws.onclose = function() {
		console.log(`Client ${ws.id} has disconnected!`);
		const newData = gameData.playersData.filter((data) => data.userId != ws.id);
		gameData.playersData = newData;
	};
});

module.exports = server;
