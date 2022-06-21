import { reportTheStatusOfTheGameStage } from './api/gameLogic';
import { getUniqueID, userConnection } from './api/userConnection';
import { userDiconnection } from './api/userDiconnection';

import http from 'http';
import express from 'express';
import WebSocketInstance from 'ws';

const app = express();

export const server = http.createServer(app);

const wss = new WebSocketInstance.Server({ server });

wss.on('connection', (ws) => {
	const userID = getUniqueID();

	userConnection(userID);

	ws.onmessage = (message) => {
		const dataParsed: string | string[] = JSON.parse(message.data.toString());
		const dataAboutStatusOfTheGameForUsers = reportTheStatusOfTheGameStage(dataParsed, userID);
		if (dataAboutStatusOfTheGameForUsers !== undefined) {
			wss.clients.forEach(function(client) {
				client.send(JSON.stringify(dataAboutStatusOfTheGameForUsers));
			});
		}
	};

	ws.onclose = function() {
		userDiconnection(userID);
	};
});
