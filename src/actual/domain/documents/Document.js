import Student from "../users/Student.js";

export default class    Document {
    #id;
    #student;
    #fileName;
    #documentVerdict;
    #comment;
    #verificationDate;
    #reported;

    constructor(id, student, fileName, documentVerdict, comment, verificationDate, reported) {
        this.#id = id;
        this.#student = student;
        this.#fileName = fileName;
        this.#documentVerdict = documentVerdict;
        this.#comment = comment;
        this.#verificationDate = verificationDate;
        this.#reported = reported;
    }

    static fromPlainObject(plainObject) {
        return new Document(
            plainObject.id,
            Student.fromPlainObject(plainObject.student),
            plainObject.fileName,
            plainObject.documentVerdict,
            plainObject.comment,
            plainObject.verificationDate,
            plainObject.reported
        );
    }

    get id() {
        return this.#id;
    }

    get student() {
        return this.#student;
    }

    get fileName() {
        return this.#fileName;
    }

    get documentVerdict() {
        return this.#documentVerdict;
    }

    get comment() {
        return this.#comment;
    }

    get verificationDate() {
        return this.#verificationDate;
    }

    get reported() {
        return this.#reported;
    }
}