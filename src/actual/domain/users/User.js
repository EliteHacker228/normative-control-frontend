export default class User {
    #id;
    #email;
    #firstName;
    #middleName;
    #lastName;
    #role;
    #verified;

    constructor(id, email, firstName, middleName, lastName, role, verified) {
        this.#id = id;
        this.#email = email;
        this.#firstName = firstName;
        this.#middleName = middleName;
        this.#lastName = lastName;
        this.#role = role;
        this.#verified = verified;
    }

    get id() {
        return this.#id;
    }

    get email() {
        return this.#email;
    }

    get firstName() {
        return this.#firstName;
    }

    get middleName() {
        return this.#middleName;
    }

    get lastName() {
        return this.#lastName;
    }

    get role() {
        return this.#role;
    }

    get verified() {
        return this.#verified;
    }
}