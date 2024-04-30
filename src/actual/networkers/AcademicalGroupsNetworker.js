import ENV from "../../config/ENV.js";

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
}