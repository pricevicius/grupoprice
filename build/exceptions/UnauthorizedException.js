"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status-codes");
const AbstractErrorException_1 = require("./AbstractErrorException");
class UnauthorizedException extends AbstractErrorException_1.default {
    constructor() {
        super('Acesso não autorizado.');
    }
    getStatusCode() {
        return HttpStatus.UNAUTHORIZED;
    }
    getErrorMessage() {
        return { errorMessage: 'Acesso não autorizado.' };
    }
}
exports.default = UnauthorizedException;
