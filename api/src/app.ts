import * as express from 'express';
require('express-group-routes');
import * as bodyParserd from 'body-parser';

import AbstractErrorException from './exceptions/AbstractErrorException';
import verifyToken from './auth/verifyToken';
import securityRoutes from './routes/securityRoutes';
import publicRoutes from './routes/publicRoutes';


class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.routesConfig();
        this.errorHandlers();
    }

    private routesConfig(): void {
        //Converte o body para object Javascript
        this.express.use(bodyParserd.json());
        
        //Rotas públicas da aplicação
        const publicRouter = express.Router();

        //Rotas privadas da aplicação
        const securityRouter = express.Router();
        //securityRouter.use(verifyToken);
        
        publicRoutes(publicRouter);
        securityRoutes(securityRouter);
    
        this.express.use(publicRouter);
        this.express.use(securityRouter);
    }

    private errorHandlers(): void {
        this.express.use(this.errorHandler);
    }

    private errorHandler(error: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction): void {
        if (error.name === 'SequelizeValidationError') {
            res.status(422);

            res.json({ errorMessages: error['errors'].map(e => e.message) });    
        } else {
            if (error instanceof AbstractErrorException) {
                res.status(error.getStatusCode()).send(error.getErrorMessage());
            }
            
            next(error);
        }
    }
}

export default new App().express;