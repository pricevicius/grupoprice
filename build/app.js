"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
require('express-group-routes');
//import AbstractErrorException from './exceptions/AbstractErrorException';
class App {
    constructor() {
        this.express = express();
        this.routesConfig();
        //this.errorHandlers();
    }
    routesConfig() {
        // //Converte o body para object Javascript
        // this.express.use(bodyParserd.json());
        // //Rotas públicas da aplicação
        // const publicRouter = express.Router();
        // //Rotas privadas da aplicação
        // const securityRouter = express.Router();
        // //securityRouter.use(verifyToken);
        // publicRoutes(publicRouter);
        // securityRoutes(securityRouter);
        // this.express.use(publicRouter);
        // this.express.use(securityRouter);
    }
}
exports.default = new App().express;
