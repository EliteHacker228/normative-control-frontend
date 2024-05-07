import * as jose from "jose";
import UserAuthenticationDto from "../dto/auth/UserAuthenticationDto.js";
import AuthNetworker from "../networkers/AuthNetworker.js";

export default class AuthService {
    static _accessTokenLocator = "accessToken";
    static _refreshTokenLocator = "refreshToken";

    static async authenticateUserByEmailAndPassword(email, password) {
        let loginResult = await AuthNetworker.login(email, password);
        this._locallyAuthenticateUserByTokensPair(loginResult);
    }

    static async registerUserByUserRegistrationDto(userRegistrationDto) {
        let registrationResult = await AuthNetworker.register(userRegistrationDto);
        this._locallyAuthenticateUserByTokensPair(registrationResult);
    }

    static authenticateUserByJwtTokensPair(jwtTokensPair) {
        this._locallyAuthenticateUserByTokensPair(jwtTokensPair);
    }

    static _locallyAuthenticateUserByTokensPair(tokensPair) {
        let accessToken = tokensPair.accessToken;
        let refreshToken = tokensPair.refreshToken;
        this._locallyAuthenticateUser(accessToken, refreshToken);
    }


    static _locallyAuthenticateUser(accessToken, refreshToken) {
        localStorage.setItem(this._accessTokenLocator, accessToken);
        localStorage.setItem(this._refreshTokenLocator, refreshToken);
    }

    static logoutUser() {
        localStorage.removeItem(this._accessTokenLocator);
        localStorage.removeItem(this._refreshTokenLocator);
    }

    static isUserLocallyAuthenticated() {
        let isAccessTokenPresents = localStorage.getItem(this._accessTokenLocator);
        let isRefreshTokenPresents = localStorage.getItem(this._refreshTokenLocator);
        return isAccessTokenPresents && isRefreshTokenPresents;
    }

    static getLocalUserData() {

        let accessToken = localStorage.getItem(this._accessTokenLocator);
        let refreshToken = localStorage.getItem(this._refreshTokenLocator);

        let jwtFields = jose.decodeJwt(accessToken);
        let userId = jwtFields.id;
        let userRole = jwtFields.role;

        return new UserAuthenticationDto(
            userId,
            userRole,
            accessToken,
            refreshToken
        );
    }
}