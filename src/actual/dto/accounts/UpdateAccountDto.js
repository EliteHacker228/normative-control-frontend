export default class UpdateAccountDto {
    #email;
    #fullName;
    #academicGroupId;

    constructor(email, fullName, academicGroupId) {
        this.#email = email;
        this.#fullName = fullName;
        this.#academicGroupId = academicGroupId;
    }

    get email() {
        return this.#email;
    }

    get fullName() {
        return this.#fullName;
    }

    get academicGroupId() {
        return this.#academicGroupId;
    }
}