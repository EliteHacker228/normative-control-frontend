import WrongCredentialsError from "../../assets/WrongCredentialsError.js";
import CredentialsAlreadyInUse from "../../assets/CredentialsAlreadyInUse.js";

export default class AuthService {
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

        let response = await fetch("http://localhost:8080/account/login", requestOptions);
        if (response.status === 200) {
            let responseJson = await response.json();
            localStorage.setItem('accessToken', responseJson.accessToken);
            localStorage.setItem('refreshToken', responseJson.refreshToken.refreshToken);
        } else if (response.status === 401) {
            let responseText = await response.text();
            throw new WrongCredentialsError(`Error ${response.status}: ${responseText}`);
        } else {
            throw new Error(`Unknown error`);
        }
    }

    static async registerWithCredentials(email, password) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "email": email,
            "password": password
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let response = await fetch("http://localhost:8080/account/register", requestOptions);
        if (response.status === 200) {
            let responseJson = await response.json();
            localStorage.setItem('accessToken', responseJson.accessToken);
            localStorage.setItem('refreshToken', responseJson.refreshToken.refreshToken);
        } else if (response.status === 409) {
            let responseText = await response.text();
            throw new CredentialsAlreadyInUse(`Error ${response.status}: ${responseText}`);
        } else {
            throw new Error(`Unknown error`);
        }
    }
}