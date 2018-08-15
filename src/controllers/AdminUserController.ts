import { Request, Response, NextFunction } from 'express';
import Controller from './Controller';
import * as HttpStatus from "http-status-codes";
import AdminUserService from '../services/AdminUserService';

class AdminUserController extends Controller {

    public findAll(req: Request, res: Response, next: NextFunction): void {
        AdminUserService
            .findAll()
            .then((users) => res.send(users))
            .catch((error) => next(error));
    };

    public insert(req: Request, res: Response, next: NextFunction): void {
        AdminUserService
            .insert(req.body)
            .then((user) => res.status(HttpStatus.CREATED).send(user))
            .catch((error) => next(error));
    };

    public update(req: Request, res: Response, next: NextFunction): void {
        AdminUserService
            .update(req.params.id, req.body)
            .then((user) => res.status(HttpStatus.OK).send(user))
            .catch((error) => next(error));
    };

    public delete(req: Request, res: Response, next: NextFunction): void {
        AdminUserService
            .delete(req.params.id)
            .then((user) => res.sendStatus(HttpStatus.OK))
            .catch((error) => next(error));
    };
}

export default new AdminUserController();