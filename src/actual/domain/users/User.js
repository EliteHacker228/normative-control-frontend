export default class User {
    #id;
    #email;
    #fullName;
    #role;
    #verified;

    constructor(id, email, fullName, role, verified) {
        this.#id = id;
        this.#email = email;
        this.#fullName = fullName;
        this.#role = role;
        this.#verified = verified;
    }

    static fromPlainObject(plainObject){
        return new User(
            plainObject.id,
            plainObject.email,
            plainObject.fullName,
            plainObject.role,
            plainObject.verified
        );
    }

    get id() {
        return this.#id;
    }

    get email() {
        return this.#email;
    }

    get fullName() {
        return this.#fullName;
    }

    get role() {
        return this.#role;
    }

    get verified() {
        return this.#verified;
    }
}