export default class CredentialsAlreadyInUse extends Error {
    constructor(message) {
        super(message);
    }
}