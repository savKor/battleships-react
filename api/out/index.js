"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const server_1 = require("./server");
// Boot Server
const port = process.env.PORT || config_1.config.port;
server_1.server.listen(port, () => {
    console.log('Server running on', port);
});
//# sourceMappingURL=index.js.map