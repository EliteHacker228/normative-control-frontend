import AuthService from "../services/AuthService.js";
import ENV from "../../config/ENV.js";
import AccessForbiddenError from "../errors/AccessForbiddenError.js";
import NotFoundError from "../errors/NotFoundError.js";
import InternalServerError from "../errors/InternalServerError.js";
import UnprocessableEntityError from "../errors/UnprocessableEntityError.js";

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

    static async patchAccount(accountId, {fullName, academicGroupId}){
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);
        headers.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "fullName": fullName,
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

    static async patchAccountPassword(accountId, oldPassword, newPassword){
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const raw = JSON.stringify({
            "oldPassword": oldPassword,
            "newPassword": newPassword
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

    static async getNormocontrollers(){
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const requestOptions = {
            method: "GET",
            headers: headers
        };

        let normocontrollersResponse = await fetch(`${ENV.API_URL}/accounts/normocontrollers`, requestOptions);
        await this._handleResponseStatus(normocontrollersResponse);
        return await normocontrollersResponse.json();
    }

    static async getAccounts(){
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const requestOptions = {
            method: "GET",
            headers: headers
        };

        let accountsResponse = await fetch(`${ENV.API_URL}/accounts`, requestOptions);
        await this._handleResponseStatus(accountsResponse);
        return await accountsResponse.json();
    }

    static async _handleResponseStatus(getDocumentResponse) {
        if (!getDocumentResponse.ok) {
            switch (getDocumentResponse.status) {
                case 403:
                    throw new AccessForbiddenError(`У вас нет доступа к данному методу`);
                case 404:
                    throw new NotFoundError(`Пользователь не найден`);
                case 422:
                    throw new UnprocessableEntityError('Старый пароль указан неверно');
                case 500:
                    throw new InternalServerError(`Что-то пошло не так на стороне сервера. Попробуйте снова`);
                default:
                    throw new Error(`Выполнить операцию не удалось`)
            }
        }
    }
}