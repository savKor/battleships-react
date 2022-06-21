"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stagesOfTheGame = void 0;
const dataForUsers_1 = require("./dataForUsers");
const gameData_1 = require("./gameData");
const StateMachine = require('javascript-state-machine');
exports.stagesOfTheGame = new StateMachine({
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
        onLogin: function () {
            console.log('Все игроки зарегистрированн');
            gameData_1.gameData.counter = 0;
            const playersRegistrationStatus = 'Вcе игроки зашли';
            return playersRegistrationStatus;
        },
        onGetInfo: function () {
            console.log('Ты передал все данные для игры');
            gameData_1.gameData.turn = gameData_1.gameData.playersData[0].username;
            gameData_1.gameData.winner = "null";
            gameData_1.gameData.counter = 0;
            const dataAboutStatusOfTheGameForUsers = (0, dataForUsers_1.getGameInformationForUsers)();
            return dataAboutStatusOfTheGameForUsers;
        },
        onPlayer2Turn: function (info, dataOfThePlayer, cell) {
            const index = 1;
            changePlayerTurn(dataOfThePlayer, cell, index);
            console.log('Второй игрок теперь ходит');
            const dataAboutStatusOfTheGameForUsers = (0, dataForUsers_1.getGameInformationForUsers)();
            return dataAboutStatusOfTheGameForUsers;
        },
        onPlayer1Turn: function (info, dataOfThePlayer, cell) {
            const index = 0;
            changePlayerTurn(dataOfThePlayer, cell, index);
            console.log('Первый игрок теперь ходит');
            const dataAboutStatusOfTheGameForUsers = (0, dataForUsers_1.getGameInformationForUsers)();
            return dataAboutStatusOfTheGameForUsers;
        },
        onFindShips: function () {
            console.log('Игра закончена');
        }
    }
});
function changePlayerTurn(dataOfThePlayer, cell, index) {
    console.log(dataOfThePlayer);
    dataOfThePlayer.arrayOfMissedShot.push(cell);
    gameData_1.gameData.turn = gameData_1.gameData.playersData[index].username;
}
//# sourceMappingURL=stateMachine.js.map