export default class PatchAccountDto {
    #email;
    #firstName;
    #middleName;
    #lastName;
    #academicGroupId;

    constructor(email, firstName, middleName, lastName, academicGroupId) {
        this.#email = email;
        this.#firstName = firstName;
        this.#middleName = middleName;
        this.#lastName = lastName;
        this.#academicGroupId = academicGroupId;
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

    get academicGroupId() {
        return this.#academicGroupId;
    }
}