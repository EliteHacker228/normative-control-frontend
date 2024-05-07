import Student from "../users/Student.js";
import Result from "./Result.js";
import plainObject from "postcss";

export default class Document {
    #id;
    #student;
    #fileName;
    #documentVerdict;
    #comment;
    #verificationDate;
    #reported;
    #reportedMistakesIds;
    #result;

    constructor(id, student, fileName, documentVerdict, comment, verificationDate, reported, reportedMistakesIds, result) {
        this.#id = id;
        this.#student = student;
        this.#fileName = fileName;
        this.#documentVerdict = documentVerdict;
        this.#comment = comment;
        this.#verificationDate = verificationDate;
        this.#reported = reported;
        this.#reportedMistakesIds = reportedMistakesIds;
        this.#result = result;
    }

    static fromPlainObject(plainObject) {
        return new Document(
            plainObject.id,
            Student.fromPlainObject(plainObject.student),
            plainObject.fileName,
            plainObject.documentVerdict,
            plainObject.comment,
            plainObject.verificationDate,
            plainObject.reported,
            plainObject.reportedMistakesIds,
            Result.fromPlainObject(plainObject.result)
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


    get reportedMistakesIds() {
        return this.#reportedMistakesIds;
    }

    get result() {
        return this.#result;
    }
}