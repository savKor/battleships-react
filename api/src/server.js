const http = require('http');
const express = require('express');
const WebSocket = require('ws');
const userConnection = require('./api/userConnection');
const userDiconnection = require('./api/userDiconnection');
const reportTheStatusOfTheGameStage = require('./api/gameLogic');

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
	userConnection(ws);

	ws.onmessage = (data) => {
		const dataParsed = JSON.parse(data);
		const dataAboutStatusOfTheGameForUsers = reportTheStatusOfTheGameStage(dataParsed, ws.id);
		if (dataAboutStatusOfTheGameForUsers !== undefined) {
			wss.clients.forEach(function(client) {
				client.send(JSON.stringify(dataAboutStatusOfTheGameForUsers));
			});
		}
	};

	ws.onclose = function() {
		userDiconnection(ws.id);
	};
});

module.exports = server;
