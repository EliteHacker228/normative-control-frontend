import AcademicGroup from "../academicGroups/AcademicGroup.js";
import User from "./User.js";

export default class Student extends User {
    #academicGroup;
    #documentsLimit;

    constructor(id, email, firstName, middleName, lastName, academicGroup, documentsLimit, role, verified) {
        super(id, email, firstName, middleName, lastName, role, verified);
        this.#academicGroup = academicGroup;
        this.#documentsLimit = documentsLimit;
    }

    static fromPlainObject(plainObject) {
        return new Student(
            plainObject.id,
            plainObject.email,
            plainObject.firstName,
            plainObject.middleName,
            plainObject.lastName,
            AcademicGroup.fromPlainObject(plainObject.academicGroup),
            plainObject.documentsLimit,
            plainObject.role,
            plainObject.verified
        );
    }

    get academicGroup() {
        return this.#academicGroup;
    }

    get documentsLimit() {
        return this.#documentsLimit;
    }
}