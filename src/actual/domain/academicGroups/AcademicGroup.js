import Normocontroller from "../users/Normocontroller.js";

export default class AcademicGroup {
    #id;
    #name;
    #normocontroller;

    constructor(id, name, normocontroller) {
        this.#id = id;
        this.#name = name;
        this.#normocontroller = normocontroller;
    }

    static fromPlainObject(plainObject) {
        return new AcademicGroup(
            plainObject.id,
            plainObject.name,
            Normocontroller.fromPlainObject(plainObject.normocontroller)
        );
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get normocontroller() {
        return this.#normocontroller;
    }
}