const http = require('http');
const express = require('express');
const WebSocketInstance = require('ws');

const app = express();

const server = http.createServer(app);

const wss = new WebSocketInstance.Server({ server });

wss.on('connection', (ws:any) => {
	userConnection(ws.id);

	ws.onmessage = ( data:string ) => {
		const dataParsed:string|string[] = JSON.parse(data);
		const dataAboutStatusOfTheGameForUsers = reportTheStatusOfTheGameStage(dataParsed, ws.id);
		if (dataAboutStatusOfTheGameForUsers !== undefined) {
			wss.clients.forEach(function(client:any) {
				client.send(JSON.stringify(dataAboutStatusOfTheGameForUsers));
			});
		}
	};

	ws.onclose = function() {
		userDiconnection(ws.id);
	};
});

module.exports = server;
