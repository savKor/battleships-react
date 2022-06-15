const StateMachine = require('javascript-state-machine');
const reuseData = require('./storage');

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
			reuseData.counter = 0;
		},
		onGetInfo: function() {
			console.log('Ты передал все данные для игры');
			reuseData.turn = reuseData.playersData[0].username;
			reuseData.winner = null;
			reuseData.counter = 0;
		},
		onPlayer2Turn: function(lifecycle, dataOfThePlayer, cell) {
			const index = 1;
			changePlayerTurn(dataOfThePlayer, cell, index);
			console.log('Второй игрок теперь ходит');
		},
		onPlayer1Turn: function(lifecycle, dataOfThePlayer, cell) {
			const index = 0;
			changePlayerTurn(dataOfThePlayer, cell, index);
			console.log('Первый игрок теперь ходит');
		},
		onFindShips: function() {
			console.log('Игра закончена');
		}
	}
});

const getDataObjectForClient = () => ({
	player1: reuseData.playersData[0].username,
	player2: reuseData.playersData[1].username,
	arrayOfMissedShotPlayer1: reuseData.playersData[0].arrayOfMissedShot,
	arrayOfMissedShotPlayer2: reuseData.playersData[1].arrayOfMissedShot,
	arrayOfShotShipsPlayer1: reuseData.playersData[0].arrayOfShotShips,
	arrayOfShotShipsPlayer2: reuseData.playersData[1].arrayOfShotShips,
	turn: reuseData.turn,
	winner: reuseData.winner
});

function workWithData(data, id) {
	if (id === undefined) {
		console.log('ты не можешь зайти');
	} else {
		const dataOfTheOtherPlayer = reuseData.playersData.find((x) => x.userId !== id);
		const dataOfThePlayer = reuseData.playersData.find((x) => x.userId === id);
		if (stagesOfTheGame.state === 'registration') {
			reuseData.counter += 1;
			dataOfThePlayer.username = data;
			if (reuseData.counter === 2) {
				stagesOfTheGame.login();
				const statusOfPlayers = 'Вcе игроки зашли';
				return statusOfPlayers;
			}
		} else if (stagesOfTheGame.state === 'putShips') {
			reuseData.counter += 1;
			dataOfThePlayer.ships = data;
			if (reuseData.counter === 2) {
				stagesOfTheGame.getInfo();
				const objectForUsers = getDataObjectForClient();
				return objectForUsers;
			}
		} else {
			const cell = data;
			const hitInShip = dataOfTheOtherPlayer.ships.find((x) => x === cell);
			if (hitInShip) {
				pushCellInTheArrayAndCheckIfYouWinOrNot(dataOfThePlayer, cell);
				const objectForUsers = getDataObjectForClient();
				return objectForUsers;
			} else {
				if (stagesOfTheGame.state === 'player1') {
					stagesOfTheGame.player2Turn(dataOfThePlayer, cell);
					const objectForUsers = getDataObjectForClient();
					return objectForUsers;
				} else {
					stagesOfTheGame.player1Turn(dataOfThePlayer, cell);
					const objectForUsers = getDataObjectForClient();
					return objectForUsers;
				}
			}
		}
	}
}

function changePlayerTurn(dataOfThePlayer, cell, index) {
	dataOfThePlayer.arrayOfMissedShot.push(cell);
	reuseData.turn = reuseData.playersData[index].username;
}

function pushCellInTheArrayAndCheckIfYouWinOrNot(dataOfThePlayer, cell) {
	dataOfThePlayer.arrayOfShotShips.push(cell);
	if (dataOfThePlayer.arrayOfShotShips.length === 20) {
		reuseData.winner = dataOfThePlayer.username;
		stagesOfTheGame.findShips();
		const objectForUsers = getDataObjectForClient();
		return objectForUsers;
	} else {
		const objectForUsers = getDataObjectForClient();
		return objectForUsers;
	}
}

module.exports = workWithData;
