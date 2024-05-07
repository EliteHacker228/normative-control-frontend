import Document from "./Document.js";

export default class Result {
    #id;
    #verificationStatus;
    #description;
    #mistakeCount;

    constructor(id, verificationStatus, description, mistakeCount) {
        this.#id = id;
        this.#verificationStatus = verificationStatus;
        this.#description = description;
        this.#mistakeCount = mistakeCount;
    }

    static fromPlainObject(plainObject) {
        return new Result(
            plainObject.id,
            plainObject.verificationStatus,
            plainObject.description,
            plainObject.mistakeCount
        );
    }

    get id() {
        return this.#id;
    }

    get verificationStatus() {
        return this.#verificationStatus;
    }

    get description() {
        return this.#description;
    }

    get mistakeCount() {
        return this.#mistakeCount;
    }
}