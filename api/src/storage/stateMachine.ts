import { getGameInformationForUsers } from "./dataForUsers";
import { gameData } from "./gameData";
import { DataObjectDetails } from "./userData";

const StateMachine = require('javascript-state-machine');

export const stagesOfTheGame = new StateMachine({
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
			gameData.winner = "null";
			gameData.counter = 0;
			const dataAboutStatusOfTheGameForUsers = getGameInformationForUsers();
			return dataAboutStatusOfTheGameForUsers;
		},
		onPlayer2Turn: function(lifecycle:any, dataOfThePlayer:DataObjectDetails, cell:string) {
			const index = 1;
			changePlayerTurn(dataOfThePlayer, cell, index);
			console.log('Второй игрок теперь ходит');
			const dataAboutStatusOfTheGameForUsers = getGameInformationForUsers();
			return dataAboutStatusOfTheGameForUsers;
		},
		onPlayer1Turn: function(lifecycle:any, dataOfThePlayer:DataObjectDetails, cell:string) {
			const index = 0;
			changePlayerTurn(dataOfThePlayer, cell, index);
			console.log('Первый игрок теперь ходит');
			const dataAboutStatusOfTheGameForUsers = getGameInformationForUsers();
			return dataAboutStatusOfTheGameForUsers;
		},
		onFindShips: function() {
			console.log('Игра закончена');
		}
	}
});

function changePlayerTurn(dataOfThePlayer:DataObjectDetails, cell:string, index:number) {
	dataOfThePlayer.arrayOfMissedShot.push(cell);
	gameData.turn = gameData.playersData[index].username;
}

