import * as HttpStatus from "http-status-codes";
import AbstractErrorException from "./AbstractErrorException";

export default class EntityNotFoundException extends AbstractErrorException {

    constructor() {
        super('Cadastro não encontrado.');
    }

    public getStatusCode(): number {
        return HttpStatus.NOT_FOUND;
    }

    public getErrorMessage(): Object {
        return { errorMessage: 'Cadastro não encontrado.' };
    }
}