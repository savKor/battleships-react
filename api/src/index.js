const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8082 });
const StateMachine = require('javascript-state-machine');

wss.getUniqueID = function() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	return s4() + s4() + '-' + s4();
};

let stagesOfTheGame = new StateMachine({
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
				client.send('true');
			});
		},
		onGetInfo: function() {
			console.log('I froze');
		},
		onFindShips: function() {
			console.log('I vaporized');
		}
	}
});

let turnOfTheGame = new StateMachine({
	init: 'player1',
	transitions: [
		{ name: 'player2Turn', from: 'player1', to: 'player2' },
		{ name: 'player1Turn', from: 'player2', to: 'player1' }
	],
	methods: {
		onPlayer2Turn: function() {
			console.log('Второй игрок теперь ходит');
			wss.clients.forEach(function each(client) {
				counter = 0;
			});
		},
		onPlayer1Turn: function() {
			console.log('Первый игрок теперь ходит');
			wss.clients.forEach(function each(client) {
				counter = 0;
			});
		}
	}
});

let gameStage = 'login';

const getDataObject = () => ({
	userId: null,
	username: null,
	ships: [],
	arratOfShotShips: [],
	arrayOfShotCells: [],
	turn: null
});

const getDataObjectForClient = () => ({
	player1: playersData[0].userId,
	player2: playersData[1].userId,
	arratOfShotShips: [],
	arrayOfCellsThatShotEnemy: [],
	turn: playersData[0].userId
});

const playersData = [];
let counter = 0;

// playersData.find

wss.on('connection', (ws) => {
	ws.id = wss.getUniqueID();
	let newUser = getDataObject();
	newUser.userId = ws.id;
	newUser.turn = playersData.length === 0;
	playersData.push(newUser);
	console.log(`New client connected with id: ${ws.id}`);

	ws.onmessage = ({ data }) => {
		const dataOfTheOtherPlayer = playersData.find((x) => x.userId !== ws.id);
		const dataOfThePlayer = playersData.find((x) => x.userId === ws.id);
		if (stagesOfTheGame.state === 'registration') {
			const newNickname = JSON.parse(data);
			counter += 1;
			dataOfThePlayer.username = newNickname;
			console.log(`Client ${ws.id}: ${dataOfThePlayer.username}`);
			if (counter === 2) {
				stagesOfTheGame.login();
			}
		} else if (stagesOfTheGame.state === 'putShips') {
			const ships = JSON.parse(data);
			counter += 1;
			dataOfThePlayer.ships = ships;
			console.log(`Client ${ws.id}: ${dataOfThePlayer.ships}`);
		}
	};

	ws.onclose = function() {
		console.log(`Client ${ws.id} has disconnected!`);
		playersData.splice(playersData.findIndex(({ userId }) => userId == 'Bob'), 1);
	};
});
