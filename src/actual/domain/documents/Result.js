import Document from "./Document.js";

export default class Result {
    #id;
    #document;
    #verificationStatus;
    #description;
    #mistakeCount;

    constructor(id, document, verificationStatus, description, mistakeCount) {
        this.#id = id;
        this.#document = document;
        this.#verificationStatus = verificationStatus;
        this.#description = description;
        this.#mistakeCount = mistakeCount;
    }

    static fromPlainObject(plainObject) {
        return new Result(
            plainObject.id,
            Document.fromPlainObject(plainObject.document),
            plainObject.verificationStatus,
            plainObject.description,
            plainObject.mistakeCount
        );
    }

    get id() {
        return this.#id;
    }

    get document() {
        return this.#document;
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