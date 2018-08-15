"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("./app");
const server = http.createServer(app_1.default);
const port = process.env.port || 8080;
server.listen(port);
server.on('listening', () => console.log('Listening on port 8080...'));
exports.default = app_1.default;
