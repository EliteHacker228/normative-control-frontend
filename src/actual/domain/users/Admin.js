import User from "./User.js";

export default class Admin extends User {

    constructor(id, email, fullName, role, verified) {
        super(id, email, fullName, role, verified);
    }

    static fromPlainObject(plainObject) {
        return new Admin(
            plainObject.id,
            plainObject.email,
            plainObject.fullName,
            plainObject.role,
            plainObject.verified
        );
    }
}