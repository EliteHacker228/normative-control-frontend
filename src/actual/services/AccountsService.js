import ENV from "../../config/ENV.js";
import AuthService from "./AuthService.js";
import Student from "../domain/users/Student.js";
import Normocontroller from "../domain/users/Normocontroller.js";
import Admin from "../domain/users/Admin.js";


export default class AccountsService {
    static async getAccountDataById(accountId) {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const requestOptions = {
            method: "GET",
            headers: headers,
            redirect: "follow"
        };

        let accountDataResponse = await fetch(`${ENV.API_URL}/accounts/${accountId}`, requestOptions);
        if (!accountDataResponse.ok)
            throw new Error(`Receiving account data failed due to: ${accountDataResponse.statusText}`)
        let accountDataResponseBody = await accountDataResponse.json();
        switch (accountDataResponseBody.role) {
            case 'STUDENT':
                return Student.fromPlainObject(accountDataResponseBody);
            case 'NORMOCONTROLLER':
                return Normocontroller.fromPlainObject(accountDataResponseBody);
            case 'ADMIN':
                return Admin.fromPlainObject(accountDataResponseBody);
        }

        throw new Error('Unknown user role');
    }
}