import AuthService from "../auth/AuthService.js";
import ENV from "../../utils/apiUri/ENV.js";

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

        let response = await fetch(`${ENV.API_URL}/accounts/${AuthService.getUserId()}/email`, requestOptions);
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

        let response = await fetch(`${ENV.API_URL}/accounts/${AuthService.getUserId()}/password`, requestOptions);
        if (response.status !== 200) {
            let responseText = await response.text();
            throw new Error(`Error ${response.status} : ${responseText}`);
        }
    }

    static async updatePersonalData(lastName, firstName, middleName, academicGroupdId, normocontrollerId){
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${AuthService.getAccessToken()}`);

        let raw = JSON.stringify({
            "lastName": lastName,
            "firstName": firstName,
            "middleName": middleName,
            "academicGroupId": academicGroupdId,
            "normocontrollerId": normocontrollerId
        });

        let requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let response = await fetch(`${ENV.API_URL}/accounts/${AuthService.getUserId()}`, requestOptions);
        if (response.status !== 200) {
            let responseText = await response.text();
            throw new Error(`Error ${response.status} : ${responseText}`);
        }
    }

    static async getAccountData(){
        let userId = AuthService.getUserId();
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${AuthService.getAccessToken()}`);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let response = await fetch(`${ENV.API_URL}/accounts/${userId}`, requestOptions);
        if (response.status !== 200) {
            let responseText = await response.text();
            throw new Error(`Error ${response.status} : ${responseText}`);
        }

        return await response.json();
    }
}