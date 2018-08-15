import { Request, Response, NextFunction } from 'express';
import Controller from './Controller';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';
import * as HttpStatus from "http-status-codes";
import AdminUserService from '../services/AdminUserService';

class AdminUserController extends Controller {

    public login(req: Request, res: Response, next: NextFunction): void {
        const { email, password } = req.body;

        AdminUserService
            .isAuthenticated(email, password)
            .then(user => {
                const accessToken = jwt.sign({ user }, config.jwtSecret, { expiresIn: 3600 });

                res.status(HttpStatus.OK).send({ accessToken });
            })
            .catch((error) => next(error));
    }
}

export default new AdminUserController();