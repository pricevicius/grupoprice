export default abstract class AbstractErrorException extends Error {

    constructor(message: string) {
        super(message);
    }

    abstract getStatusCode(): number;
    abstract getErrorMessage(): Object;
}