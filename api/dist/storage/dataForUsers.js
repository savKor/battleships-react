"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameInformationForUsers = void 0;
const gameData_1 = require("./gameData");
;
function getGameInformationForUsers() {
    let gameInfo = {
        player1: gameData_1.gameData.playersData[0].username,
        player2: gameData_1.gameData.playersData[1].username,
        arrayOfMissedShotPlayer1: gameData_1.gameData.playersData[0].arrayOfMissedShot,
        arrayOfMissedShotPlayer2: gameData_1.gameData.playersData[1].arrayOfMissedShot,
        arrayOfShotShipsPlayer1: gameData_1.gameData.playersData[0].arrayOfShotShips,
        arrayOfShotShipsPlayer2: gameData_1.gameData.playersData[1].arrayOfShotShips,
        turn: gameData_1.gameData.turn,
        winner: gameData_1.gameData.winner
    };
    return gameInfo;
}
exports.getGameInformationForUsers = getGameInformationForUsers;
//# sourceMappingURL=dataForUsers.js.map