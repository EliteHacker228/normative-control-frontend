export default class FileIsTooBigError extends Error {

    constructor(message) {
        super(message);
    }
}