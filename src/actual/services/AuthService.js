import ENV from "../../config/ENV.js";
import * as jose from "jose";
import UserAuthenticationDto from "../dto/auth/UserAuthenticationDto.js";

export default class AuthService {
    static _userIdLocator = "id";
    static _userRoleLocator = "role";
    static _accessTokenLocator = "accessToken";
    static _refreshTokenLocator = "refreshToken";

    static async authenticateUserByEmailAndPassword(email, password){
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "email": email,
            "password": password
        });

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: body,
        };

        let loginResponse = await fetch(`${ENV.API_URL}/auth/login`, requestOptions);
        if(!loginResponse.ok)
            throw new Error(`Login failed due to: ${loginResponse.statusText}`)
        let loginResponseBody = await loginResponse.json();
        this._locallyAuthenticateUserByTokensPair(loginResponseBody);
    }

    static async registerUserByUserRegistrationDto(userRegistrationDto){
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const body = JSON.stringify({
            email: userRegistrationDto.email,
            password: userRegistrationDto.password,
            firstName: userRegistrationDto.firstname,
            middleName: userRegistrationDto.middleName,
            lastName: userRegistrationDto.lastName,
            academicGroupId: userRegistrationDto.academicGroupId
        });

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: body
        };

        let registrationResponse = await fetch(`${ENV.API_URL}/auth/register/student`, requestOptions);
        if(!registrationResponse.ok)
            throw new Error(`Registration failed due to: ${registrationResponse.statusText}`)
        let registrationResponseBody = await registrationResponse.json();
        this._locallyAuthenticateUserByTokensPair(registrationResponseBody);
    }

    static _locallyAuthenticateUserByTokensPair(tokensPair){
        let accessToken = tokensPair.accessToken;
        let refreshToken = tokensPair.refreshToken;
        let jwtFields = jose.decodeJwt(accessToken);
        let userAuthenticationDto = new UserAuthenticationDto(
            jwtFields.id,
            jwtFields.role,
            accessToken,
            refreshToken
        );
        this._locallyAuthenticateUser(userAuthenticationDto);
    }


    static _locallyAuthenticateUser(userAuthenticationDto){
        localStorage.setItem(this._userIdLocator, userAuthenticationDto.id);
        localStorage.setItem(this._userRoleLocator, userAuthenticationDto.role);
        localStorage.setItem(this._accessTokenLocator, userAuthenticationDto.accessToken);
        localStorage.setItem(this._refreshTokenLocator, userAuthenticationDto.refreshToken);
    }

    static logoutUser(){
        localStorage.removeItem(this._userIdLocator);
        localStorage.removeItem(this._userRoleLocator);
        localStorage.removeItem(this._accessTokenLocator);
        localStorage.removeItem(this._refreshTokenLocator);
    }

    static isUserLocallyAuthenticated() {
        let isUserIdPresents = localStorage.getItem(this._userIdLocator);
        let isUserRolePresents = localStorage.getItem(this._userRoleLocator);
        let isAccessTokenPresents = localStorage.getItem(this._accessTokenLocator);
        let isRefreshTokenPresents = localStorage.getItem(this._refreshTokenLocator);
        return isUserIdPresents && isUserRolePresents && isAccessTokenPresents && isRefreshTokenPresents;
    }

    static getUserData() {
        return new UserAuthenticationDto(
            localStorage.getItem(this._userIdLocator),
            localStorage.getItem(this._userRoleLocator),
            localStorage.getItem(this._accessTokenLocator),
            localStorage.getItem(this._refreshTokenLocator)
        );
    }
}