export default class WrongCredentialsError extends Error {
    constructor(message) {
        super(message);
    }
}