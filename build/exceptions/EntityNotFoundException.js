"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status-codes");
const AbstractErrorException_1 = require("./AbstractErrorException");
class EntityNotFoundException extends AbstractErrorException_1.default {
    constructor() {
        super('Cadastro não encontrado.');
    }
    getStatusCode() {
        return HttpStatus.NOT_FOUND;
    }
    getErrorMessage() {
        return { errorMessage: 'Cadastro não encontrado.' };
    }
}
exports.default = EntityNotFoundException;
