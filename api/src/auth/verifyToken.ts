import * as jwt from 'jsonwebtoken';
import config from '../config/config';
import { Request, Response, NextFunction } from 'express';
import UnauthorizedException from '../exceptions/UnauthorizedException';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers['x-access-token']) throw new UnauthorizedException();

    const token: string = req.headers['x-access-token'].toString();

    jwt.verify(token, config.jwtSecret, function(err, decoded) {

        if (err) throw new UnauthorizedException()

        req['authUser'] = decoded;

        next();
    });
}

export default verifyToken;