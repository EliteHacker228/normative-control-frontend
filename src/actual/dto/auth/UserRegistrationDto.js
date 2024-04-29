export default class UserRegistrationDto {
    #email;
    #firstname;
    #lastname;
    #middlename;
    #academicGroupId;
    #password;

    constructor(email, firstname, lastname, middlename, academicGroupId, password) {
        this.#email = email;
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#middlename = middlename;
        this.#academicGroupId = academicGroupId;
        this.#password = password;
    }

    get email() {
        return this.#email;
    }

    get firstname() {
        return this.#firstname;
    }

    get lastname() {
        return this.#lastname;
    }

    get middlename() {
        return this.#middlename;
    }

    get academicGroupId() {
        return this.#academicGroupId;
    }

    get password() {
        return this.#password;
    }
}