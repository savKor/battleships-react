"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userConnection = exports.getUniqueID = void 0;
const gameData_1 = require("../storage/gameData");
const userData_1 = require("../storage/userData");
function getUniqueID() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4();
}
exports.getUniqueID = getUniqueID;
function userConnection(userId) {
    if (gameData_1.gameData.playersData.length < 2) {
        console.log(`New client connected with id: ${userId}`);
        const newUser = (0, userData_1.getUserData)(userId);
        gameData_1.gameData.playersData.push(newUser);
    }
    else {
        console.log('Страница уже занята двумя игроками');
    }
}
exports.userConnection = userConnection;
//# sourceMappingURL=userConnection.js.map