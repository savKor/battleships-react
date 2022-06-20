"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserData = void 0;
;
function getUserData(id) {
    let userData = {
        userId: id,
        username: "null",
        ships: [],
        arrayOfShotShips: [],
        arrayOfMissedShot: []
    };
    return userData;
}
exports.getUserData = getUserData;
//# sourceMappingURL=userData.js.map