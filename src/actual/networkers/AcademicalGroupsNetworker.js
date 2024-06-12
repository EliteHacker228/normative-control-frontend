import ENV from "../../config/ENV.js";
import AuthService from "../services/AuthService.js";
import ConflictError from "../errors/ConflictError.js";
import AccessForbiddenError from "../errors/AccessForbiddenError.js";
import InternalServerError from "../errors/InternalServerError.js";
import NotFoundError from "../errors/NotFoundError.js";

export default class AcademicalGroupsNetworker {
    static async getAcademicalGroups() {
        const requestOptions = {
            method: "GET",
        };

        let getAcademicalGroupsResponse = await fetch(`${ENV.API_URL}/academical/groups`, requestOptions);
        if (!getAcademicalGroupsResponse.ok)
            this._handleAcademicalGroupResponse(getAcademicalGroupsResponse);
        return await getAcademicalGroupsResponse.json();
    }

    static async getAcademicalGroupById(id) {
        const requestOptions = {
            method: "GET",
        };

        let getAcademicalGroupsResponse = await fetch(`${ENV.API_URL}/academical/groups/${id}`, requestOptions);
        if (!getAcademicalGroupsResponse.ok)
            this._handleAcademicalGroupResponse(getAcademicalGroupsResponse);
        return await getAcademicalGroupsResponse.json();
    }

    static async deleteAcademicalGroupById(id) {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const requestOptions = {
            method: "DELETE",
            headers: headers,
        };

        let deleteAcademicalGroupsResponse = await fetch(`${ENV.API_URL}/academical/groups/${id}`, requestOptions);
        if (!deleteAcademicalGroupsResponse.ok)
            this._handleAcademicalGroupResponse(deleteAcademicalGroupsResponse);
        return await deleteAcademicalGroupsResponse.json();
    }

    static async deleteAccountBy(id) {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const requestOptions = {
            method: "DELETE",
            headers: headers
        };

        let deleteAccountGroupsResponse = await fetch(`${ENV.API_URL}/accounts/${id}`, requestOptions);
        if (!deleteAccountGroupsResponse.ok)
            this._handleAcademicalGroupResponse(deleteAccountGroupsResponse);
        return await deleteAccountGroupsResponse.json();
    }

    static async createAcademicalGroup(academicalGroupName, normocontrollerId) {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);
        headers.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "name": academicalGroupName,
            "normocontrollerId": normocontrollerId
        });

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: body,
        };

        let createAcademicalGroupResponse = await fetch(`${ENV.API_URL}/academical/groups`, requestOptions);
        if (!createAcademicalGroupResponse.ok)
            this._handleAcademicalGroupResponse(createAcademicalGroupResponse);
        return await createAcademicalGroupResponse.json();
    }

    static async editAcademicalGroup(academicalGroupId, academicalGroupName, normocontrollerId) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const body = JSON.stringify({
            "name":academicalGroupName,
            "normocontrollerId": normocontrollerId
        });

        const requestOptions = {
            method: "PATCH",
            headers: headers,
            body: body
        };

        let editAcademicalGroupResponse = await fetch(`${ENV.API_URL}/academical/groups/${academicalGroupId}`, requestOptions);
        if (!editAcademicalGroupResponse.ok)
            this._handleAcademicalGroupResponse(editAcademicalGroupResponse);
        return await editAcademicalGroupResponse.json();
    }

    static _handleAcademicalGroupResponse(academicalGroupOperationResponse) {
        switch (academicalGroupOperationResponse.status) {
            case 400:
                throw new ConflictError('Указаны не валидные данные.');
            case 403:
                throw new AccessForbiddenError('Вы не имеете доступа к данному ресурсу или операции.');
            case 404:
                throw new NotFoundError('Ресурс не найден');
            case 409:
                throw new ConflictError('Академическая группа с таким названием уже существует.');
            case 500:
                throw new InternalServerError('Произошла ошибка на стороне сервера.');
            default:
                throw new Error('Произошла ошибка.');
        }
    }
}