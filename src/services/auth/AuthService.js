import WrongCredentialsError from "../../assets/WrongCredentialsError.js";
import CredentialsAlreadyInUse from "../../assets/CredentialsAlreadyInUse.js";
import {v4 as getUUID} from "uuid";
import ENV from "../../utils/apiUri/ENV.js";
import * as jose from 'jose'

export default class AuthService {
    static isUserLocallyAuthenticated() {
        return localStorage.getItem('accessToken') && localStorage.getItem('refreshToken');
    }

    static #userSetFingerprint(fingerprint){
        return localStorage.setItem('fingerprint', fingerprint);
    }

    static getFingerprint(){
        return localStorage.getItem('fingerprint');
    }

    static userHasFingerprint(){
        return Boolean(this.getFingerprint);
    }

    static generateAndSetFingerprintIfUserIfAbsent(){
        if(!this.userHasFingerprint()){
            let uuid = getUUID();
            this.#userSetFingerprint(uuid)
        }
    }

    static getUserRole() {
        return localStorage.getItem('role');
    }

    static getAccessToken() {
        return localStorage.getItem('accessToken');
    }

    static getRefreshToken() {
        return localStorage.getItem('refreshToken');
    }

    static async updateAccessAndRefreshTokens(responseJson) {
        localStorage.setItem('accessToken', responseJson.accessToken);
        localStorage.setItem('refreshToken', responseJson.refreshToken.refreshToken);
    }

    static logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('role');
    }

    static async loginWithCredentials(email, password) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": email,
            "password": password
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let response = await fetch(`${ENV.API_URL}/auth/login`, requestOptions);
        if (response.status === 200) {
            let responseJson = await response.json();
            localStorage.setItem('accessToken', responseJson.accessToken);
            localStorage.setItem('refreshToken', responseJson.refreshToken);
            localStorage.setItem('role', this.getRoleFromAccessToken(responseJson.accessToken));
        } else if (response.status === 401) {
            let responseText = await response.text();
            throw new WrongCredentialsError(`Error ${response.status}: ${responseText}`);
        } else {
            throw new Error(`Unknown error`);
        }
    }

    static getRoleFromAccessToken(accessToken){
        let jwtFields = jose.decodeJwt(accessToken);
        console.log(jwtFields);
        console.log(jwtFields.role);
        return jwtFields.role;
    }

    static async registerWithCredentials(email, lastName, firstName, middleName, academicGroupdId, normocontrollerId, password) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "email": email,
            "lastName": lastName,
            "firstName": firstName,
            "middleName": middleName,
            "academicGroupId": academicGroupdId,
            "normocontrollerId": normocontrollerId,
            "password": password
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let response = await fetch(`${ENV.API_URL}/auth/register/student`, requestOptions);
        if (response.status === 200) {
            let responseJson = await response.json();
            localStorage.setItem('accessToken', responseJson.accessToken);
            localStorage.setItem('refreshToken', responseJson.refreshToken);
            localStorage.setItem('role', this.getRoleFromAccessToken(responseJson.accessToken));
        } else if (response.status === 409) {
            let responseText = await response.text();
            throw new CredentialsAlreadyInUse(`Error ${response.status}: ${responseText}`);
        } else {
            throw new Error(`Unknown error`);
        }
    }
}