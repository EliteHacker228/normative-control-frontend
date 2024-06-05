import ENV from "../../config/ENV.js";
import AuthService from "../services/AuthService.js";

export default class AcademicalGroupsNetworker {
    static async getAcademicalGroups() {
        const requestOptions = {
            method: "GET",
        };

        let academicalGroupsResponse = await fetch(`${ENV.API_URL}/academical/groups`, requestOptions);
        if (!academicalGroupsResponse.ok)
            throw new Error('Receiving of academical groups has failed');
        return await academicalGroupsResponse.json();
    }

    static async deleteAcademicalGroupById(id) {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const requestOptions = {
            method: "DELETE",
            headers: headers,
        };

        let academicalGroupsResponse = await fetch(`${ENV.API_URL}/academical/groups/${id}`, requestOptions);
        if (!academicalGroupsResponse.ok)
            throw new Error('Deletion of academical groups has failed');
        return await academicalGroupsResponse.json();
    }
}