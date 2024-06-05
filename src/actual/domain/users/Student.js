import AcademicGroup from "../academicGroups/AcademicGroup.js";
import User from "./User.js";

export default class Student extends User {
    #academicGroup;
    #documentsLimit;

    constructor(id, email, fullName, academicGroup, documentsLimit, role, verified) {
        super(id, email, fullName, role, verified);
        this.#academicGroup = academicGroup;
        this.#documentsLimit = documentsLimit;
    }

    static fromPlainObject(plainObject) {
        let academicGroup = plainObject.academicGroup == null ? {} : AcademicGroup.fromPlainObject(plainObject.academicGroup);
        return new Student(
            plainObject.id,
            plainObject.email,
            plainObject.fullName,
            academicGroup,
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