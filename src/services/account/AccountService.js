import AuthService from "../auth/AuthService.js";
import ApiUrlResolver from "../../utils/apiUri/ApiUrlResolver.js";

export default class AccountService {
    static #API_URL = ApiUrlResolver.getApiUrl();

    static async updateEmail(newEmail) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${AuthService.getAccessToken()}`);

        let raw = JSON.stringify({
            "email": newEmail
        });

        let requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let response = await fetch(`${this.#API_URL}/account/email`, requestOptions);
        if (response.status !== 200) {
            let responseText = await response.text();
            throw new Error(`Error ${response.status} : ${responseText}`);
        }
        let responseJson = await response.json();
        await AuthService.updateAccessAndRefreshTokens(responseJson);
    }

    static async updatePassword(newPassword) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${AuthService.getAccessToken()}`);

        let raw = JSON.stringify({
            "password": newPassword
        });

        let requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let response = await fetch(`${this.#API_URL}/account/password`, requestOptions);
        if (response.status !== 200) {
            let responseText = await response.text();
            throw new Error(`Error ${response.status} : ${responseText}`);
        }
    }
}