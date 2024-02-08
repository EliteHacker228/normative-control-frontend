import AuthService from "../auth/AuthService.js";

export default class AccountService {
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

        let response = await fetch("https://localhost:8080/account/email", requestOptions);
        if (response.status !== 200) {
            let responseText = await response.text();
            throw new Error(`Error ${response.status} : ${responseText}`);
        }
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

        let response = await fetch("http://localhost:8080/account/password", requestOptions);
        if (response.status !== 200) {
            let responseText = await response.text();
            throw new Error(`Error ${response.status} : ${responseText}`);
        }
    }
}