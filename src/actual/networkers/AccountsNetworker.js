import AuthService from "../services/AuthService.js";
import ENV from "../../config/ENV.js";
import AccessForbiddenError from "../errors/AccessForbiddenError.js";
import NotFoundError from "../errors/NotFoundError.js";
import InternalServerError from "../errors/InternalServerError.js";

export default class AccountsNetworker {
    static async getAccount(accountId){
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const requestOptions = {
            method: "GET",
            headers: headers
        };

        let accountDataResponse = await fetch(`${ENV.API_URL}/accounts/${accountId}`, requestOptions);
        if (!accountDataResponse.ok)
            throw new Error(`Receiving account data failed due to: ${accountDataResponse.statusText}`)
        return await accountDataResponse.json();
    }

    static async patchAccount(accountId, {firstName, middleName, lastName, academicGroupId}){
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);
        headers.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "firstName": firstName,
            "middleName": middleName,
            "lastName": lastName,
            "academicGroupId": academicGroupId
        });

        const requestOptions = {
            method: "PATCH",
            headers: headers,
            body: body
        };

        let patchAccountResult = await fetch(`${ENV.API_URL}/accounts/${accountId}`, requestOptions);
        await this._handleResponseStatus(patchAccountResult);
        return await patchAccountResult.json();
    }

    static async patchAccountEmail(accountId, email){
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const body = JSON.stringify({
            "email": email
        });

        const requestOptions = {
            method: "PATCH",
            headers: headers,
            body: body
        };

        let patchAccountEmailResult = await fetch(`${ENV.API_URL}/accounts/${accountId}/email`, requestOptions);
        await this._handleResponseStatus(patchAccountEmailResult);
        return await patchAccountEmailResult.json();
    }

    static async patchAccountPassword(accountId, password){
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const raw = JSON.stringify({
            "password": password
        });

        const requestOptions = {
            method: "PATCH",
            headers: headers,
            body: raw,
        };

        let patchAccountPasswordResult = await fetch(`${ENV.API_URL}/accounts/${accountId}/password`, requestOptions);
        await this._handleResponseStatus(patchAccountPasswordResult);
        return await patchAccountPasswordResult.json();
    }

    static async _handleResponseStatus(getDocumentResponse) {
        if (!getDocumentResponse.ok) {
            switch (getDocumentResponse.status) {
                case 403:
                    throw new AccessForbiddenError(`You don't have access to this method`);
                case 404:
                    throw new NotFoundError(`User not found`);
                case 500:
                    throw new InternalServerError(`Something went wrong. Maybe, server made an error or you provided wrong data`);
                default:
                    throw new Error(`Getting document has failed with status ${getDocumentResponse.status} and message ${await getDocumentResponse.text()}`)
            }
        }
    }
}