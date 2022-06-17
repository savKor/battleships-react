const StateMachine = require('javascript-state-machine');
const gameData = require('../storage/gameData');
const getDataForThePlayers = require('../storage/dataToSendToUser');

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
			gameData.counter = 0;
			const playersRegistrationStatus = 'Вcе игроки зашли';
			return playersRegistrationStatus;
		},
		onGetInfo: function() {
			console.log('Ты передал все данные для игры');
			gameData.turn = gameData.playersData[0].username;
			gameData.winner = null;
			gameData.counter = 0;
			const dataToSendToUsers = getDataForThePlayers();
			return dataToSendToUsers;
		},
		onPlayer2Turn: function(lifecycle, dataOfThePlayer, cell) {
			const index = 1;
			changePlayerTurn(dataOfThePlayer, cell, index);
			console.log('Второй игрок теперь ходит');
			const dataToSendToUsers = getDataForThePlayers();
			return dataToSendToUsers;
		},
		onPlayer1Turn: function(lifecycle, dataOfThePlayer, cell) {
			const index = 0;
			changePlayerTurn(dataOfThePlayer, cell, index);
			console.log('Первый игрок теперь ходит');
			const dataToSendToUsers = getDataForThePlayers();
			return dataToSendToUsers;
		},
		onFindShips: function() {
			console.log('Игра закончена');
		}
	}
});

function workWithStagesOfTheGame(data, id) {
	if (id === undefined) {
		console.log('ты не можешь зайти');
	} else {
		const dataOfTheEnemy = gameData.playersData.find((x) => x.userId !== id);
		const dataOfThePlayer = gameData.playersData.find((x) => x.userId === id);
		if (stagesOfTheGame.state === 'registration') {
			gameData.counter += 1;
			dataOfThePlayer.username = data;
			if (gameData.counter === 2) {
				const playersRegistrationStatus = stagesOfTheGame.login();
				return playersRegistrationStatus;
			}
		} else if (stagesOfTheGame.state === 'putShips') {
			gameData.counter += 1;
			dataOfThePlayer.ships = data;
			if (gameData.counter === 2) {
				const dataToSendToUsers = stagesOfTheGame.getInfo();
				return dataToSendToUsers;
			}
		} else {
			const dataToSendToUsers = checkIfYouHitShipOrNot(dataOfTheEnemy, dataOfThePlayer, data);
			return dataToSendToUsers;
		}
	}
}

function checkIfYouHitShipOrNot(dataOfTheEnemy, dataOfThePlayer, data) {
	let dataToSendToUsers;
	const cell = data;
	const hitInShip = dataOfTheEnemy.ships.find((x) => x === cell);
	if (hitInShip) {
		dataToSendToUsers = checkIfYouWinOrNot(dataOfThePlayer, cell);
		return dataToSendToUsers;
	} else {
		if (stagesOfTheGame.state === 'player1') {
			dataToSendToUsers = stagesOfTheGame.player2Turn(dataOfThePlayer, cell);
		} else {
			dataToSendToUsers = stagesOfTheGame.player1Turn(dataOfThePlayer, cell);
		}

		return dataToSendToUsers;
	}
}

function changePlayerTurn(dataOfThePlayer, cell, index) {
	dataOfThePlayer.arrayOfMissedShot.push(cell);
	gameData.turn = gameData.playersData[index].username;
}

function checkIfYouWinOrNot(dataOfThePlayer, cell) {
	dataOfThePlayer.arrayOfShotShips.push(cell);
	if (dataOfThePlayer.arrayOfShotShips.length === 20) {
		gameData.winner = dataOfThePlayer.username;
		stagesOfTheGame.findShips();
		const dataToSendToUsers = getDataForThePlayers();
		return dataToSendToUsers;
	} else {
		const dataToSendToUsers = getDataForThePlayers();
		return dataToSendToUsers;
	}
}

module.exports = workWithStagesOfTheGame;
