const http = require('http');
const express = require('express');
const WebSocket = require('ws');
const workWithData = require('./work-with-data-onmessage');
const reuseData = require('./storage');

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

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

wss.on('connection', (ws) => {
	if (reuseData.playersData.length < 2) {
		ws.id = wss.getUniqueID();
		console.log(`New client connected with id: ${ws.id}`);
		const newUser = getDataObject(ws.id);
		reuseData.playersData.push(newUser);
	} else {
		console.log('Страница уже занята двумя игроками');
	}

	ws.onmessage = ({ data }) => {
		const dataParsed = JSON.parse(data);
		const dataToSendUsers = workWithData(dataParsed, ws.id);
		if (dataToSendUsers !== undefined) {
			wss.clients.forEach(function(client) {
				client.send(JSON.stringify(dataToSendUsers));
			});
		}
	};

	ws.onclose = function() {
		console.log(`Client ${ws.id} has disconnected!`);
		const newData = reuseData.playersData.filter((data) => data.userId != ws.id);
		reuseData.playersData = newData;
	};
});

server.listen(8082, () => console.log('Server started'));
