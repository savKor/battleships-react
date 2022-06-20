"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDiconnection = void 0;
const gameData_1 = require("../storage/gameData");
function userDiconnection(userId) {
    console.log(`Client ${userId} has disconnected!`);
    const newData = gameData_1.gameData.playersData.filter((data) => data.userId != userId);
    gameData_1.gameData.playersData = newData;
}
exports.userDiconnection = userDiconnection;
//# sourceMappingURL=userDiconnection.js.map