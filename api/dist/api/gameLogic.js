"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportTheStatusOfTheGameStage = void 0;
const dataForUsers_1 = require("../storage/dataForUsers");
const gameData_1 = require("../storage/gameData");
const stateMachine_1 = require("../storage/stateMachine");
function reportTheStatusOfTheGameStage(data, userId) {
    if (userId === undefined) {
        console.log('ты не можешь зайти');
    }
    else {
        let dataOfTheEnemy = gameData_1.gameData.playersData.find((x) => x.userId !== userId);
        let dataOfThePlayer = gameData_1.gameData.playersData.find((x) => x.userId === userId);
        if (typeof dataOfThePlayer !== "undefined") {
            if (stateMachine_1.stagesOfTheGame.state === 'registration' && typeof data === "string") {
                gameData_1.gameData.counter += 1;
                dataOfThePlayer.username = data;
                if (gameData_1.gameData.counter === 2) {
                    const playersRegistrationStatus = stateMachine_1.stagesOfTheGame.login();
                    return playersRegistrationStatus;
                }
            }
            else if (stateMachine_1.stagesOfTheGame.state === 'putShips' && typeof data !== "string") {
                gameData_1.gameData.counter += 1;
                dataOfThePlayer.ships = data;
                if (gameData_1.gameData.counter === 2) {
                    const gameDataForUsers = stateMachine_1.stagesOfTheGame.getInfo();
                    return gameDataForUsers;
                }
            }
        }
        else if (typeof dataOfTheEnemy !== "undefined" &&
            typeof dataOfThePlayer !== "undefined" &&
            typeof data === "string" &&
            stateMachine_1.stagesOfTheGame.state !== 'putShips' &&
            stateMachine_1.stagesOfTheGame.state !== 'registration') {
            const updatedGameDataForUsers = checkIfYouHitShipOrNot(dataOfTheEnemy, dataOfThePlayer, data);
            return updatedGameDataForUsers;
        }
    }
}
exports.reportTheStatusOfTheGameStage = reportTheStatusOfTheGameStage;
function checkIfYouHitShipOrNot(dataOfTheEnemy, dataOfThePlayer, data) {
    let updatedGameDataForUsers;
    const cell = data;
    const hitInShip = dataOfTheEnemy.ships.find((x) => x === cell);
    if (hitInShip) {
        updatedGameDataForUsers = checkIfYouWinOrNot(dataOfThePlayer, cell);
        return updatedGameDataForUsers;
    }
    else {
        if (stateMachine_1.stagesOfTheGame.state === 'player1') {
            updatedGameDataForUsers = stateMachine_1.stagesOfTheGame.player2Turn(dataOfThePlayer, cell);
        }
        else {
            updatedGameDataForUsers = stateMachine_1.stagesOfTheGame.player1Turn(dataOfThePlayer, cell);
        }
        return updatedGameDataForUsers;
    }
}
function checkIfYouWinOrNot(dataOfThePlayer, cell) {
    let statusWhetherUserWonOrNot;
    dataOfThePlayer.arrayOfShotShips.push(cell);
    if (dataOfThePlayer.arrayOfShotShips.length === 20) {
        gameData_1.gameData.winner = dataOfThePlayer.username;
        stateMachine_1.stagesOfTheGame.findShips();
        statusWhetherUserWonOrNot = (0, dataForUsers_1.getGameInformationForUsers)();
    }
    else {
        statusWhetherUserWonOrNot = (0, dataForUsers_1.getGameInformationForUsers)();
    }
    return statusWhetherUserWonOrNot;
}
//# sourceMappingURL=gameLogic.js.map