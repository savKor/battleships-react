const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8082 });

wss.getUniqueID = function() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	return s4() + s4() + '-' + s4();
};

let gameStage = 'preparing';

const dataObject = {
	userId: null,
	ships: [],
	arrayOfShotCells: [],
	arratOfShotShips: [],
	turn: false
};

const getDataObject = () => ({
	userId: null,
	ships: [],
	arrayOfShotCells: [],
	arratOfShotShips: [],
	turn: false
});

const playersData = [];
let countPlayersThatReady = 0;

// playersData.find

wss.on('connection', (ws) => {
	ws.id = wss.getUniqueID();
	let newUser = getDataObject();
	newUser.userId = ws.id;
	newUser.turn = playersData.length === 0;
	playersData.push(newUser);
	console.log(`New client connected with id: ${ws.id}`);
	console.log(playersData);

	ws.onmessage = ({ data }) => {
		const dataOfTheOtherPlayer = playersData.find((x) => x.userId !== ws.id);
		const dataOfThePlayer = playersData.find((x) => x.userId === ws.id);
		if (gameStage === 'preparing') {
			const newData = JSON.parse(data);
			countPlayersThatReady += 1;
			console.log(`Client ${ws.id}: ${newData}`);
			if (countPlayersThatReady === 2) {
				gameStage = 'battle';
				wss.clients.forEach(function each(client) {
					if (client !== ws && client.readyState === WebSocket.OPEN) {
						console.log(ws.id);
					}
				});
			}
		} else {
		}
	};

	ws.onclose = function() {
		console.log(`Client ${ws.id} has disconnected!`);
		playersData.splice(playersData.findIndex(({ userId }) => userId == 'Bob'), 1);
	};
});
