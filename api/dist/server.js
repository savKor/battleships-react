"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const gameLogic_1 = require("./api/gameLogic");
const userConnection_1 = require("./api/userConnection");
const userDiconnection_1 = require("./api/userDiconnection");
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const ws_1 = __importDefault(require("ws"));
const app = (0, express_1.default)();
exports.server = http_1.default.createServer(app);
const wss = new ws_1.default.Server({ server: exports.server });
wss.on('connection', (ws) => {
    const userID = (0, userConnection_1.getUniqueID)();
    (0, userConnection_1.userConnection)(userID);
    ws.onmessage = (message) => {
        const dataParsed = JSON.parse(message.data.toString());
        const dataAboutStatusOfTheGameForUsers = (0, gameLogic_1.reportTheStatusOfTheGameStage)(dataParsed, userID);
        if (dataAboutStatusOfTheGameForUsers !== undefined) {
            wss.clients.forEach(function (client) {
                client.send(JSON.stringify(dataAboutStatusOfTheGameForUsers));
            });
        }
    };
    ws.onclose = function () {
        (0, userDiconnection_1.userDiconnection)(userID);
    };
});
//# sourceMappingURL=server.js.map