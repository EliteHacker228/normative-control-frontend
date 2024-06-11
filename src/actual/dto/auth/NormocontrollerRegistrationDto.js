export default class NormocontrollerRegistrationDto {
    #email;
    #firstName;
    #lastName;
    #middleName;
    #password;

    constructor(email, firstName, lastName, middleName, password) {
        this.#email = email;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#middleName = middleName;
        this.#password = password;
    }

    get email() {
        return this.#email;
    }

    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    get middleName() {
        return this.#middleName;
    }

    get password() {
        return this.#password;
    }
}