import AuthService from "../services/AuthService.js";
import ENV from "../../config/ENV.js";

export default class AccountsNetworker {
    static async getAccount(accountId){
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
        return await accountDataResponse.json();
    }
}