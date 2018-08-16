import * as HttpStatus from "http-status-codes";
import AbstractErrorException from "./AbstractErrorException";

export default class UnauthorizedException extends AbstractErrorException {

    constructor() {
        super('Acesso não autorizado.');
    }

    public getStatusCode(): number {
        return HttpStatus.UNAUTHORIZED;
    }

    public getErrorMessage(): Object {
        return { errorMessage: 'Acesso não autorizado.' };
    }
}