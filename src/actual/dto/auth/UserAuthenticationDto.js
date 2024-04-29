export default class UserAuthenticationDto {
    #id;
    #role;
    #accessToken;
    #refreshToken;

    constructor(id, role, accessToken, refreshToken) {
        this.#id = id;
        this.#role = role;
        this.#accessToken = accessToken;
        this.#refreshToken = refreshToken;
    }

    get id() {
        return this.#id;
    }

    get role() {
        return this.#role;
    }

    get accessToken() {
        return this.#accessToken;
    }

    get refreshToken() {
        return this.#refreshToken;
    }
}