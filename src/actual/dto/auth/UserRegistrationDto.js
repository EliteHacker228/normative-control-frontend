export default class UserRegistrationDto {
    #email;
    #firstName;
    #lastName;
    #middleName;
    #academicGroupId;
    #password;

    constructor(email, firstName, lastName, middleName, academicGroupId, password) {
        this.#email = email;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#middleName = middleName;
        this.#academicGroupId = academicGroupId;
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

    get academicGroupId() {
        return this.#academicGroupId;
    }

    get password() {
        return this.#password;
    }
}