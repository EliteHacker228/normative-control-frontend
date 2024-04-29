import User from "./User.js";

export default class Admin extends User {

    constructor(id, email, firstName, middleName, lastName, role, verified) {
        super(id, email, firstName, middleName, lastName, role, verified);
    }

    static fromPlainObject(plainObject) {
        return new Admin(
            plainObject.id,
            plainObject.email,
            plainObject.firstName,
            plainObject.middleName,
            plainObject.lastName,
            plainObject.role,
            plainObject.verified
        );
    }
}