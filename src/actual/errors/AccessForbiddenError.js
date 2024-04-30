export default class AccessForbiddenError extends Error {
    constructor(message) {
        super(message);
    }
}