import ENV from "../../config/ENV.js";
import AcademicalGroupDto from "../dto/auth/AcademicalGroupDto.js";

export default class AcademicalGroupsService {
    static async getAcademicalGroups(){
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        let academicalGroupsResponse = await fetch(`${ENV.API_URL}/academical/groups`, requestOptions);
        if(!academicalGroupsResponse.ok)
            return [];
        let academicalGroupsResponseBody = await academicalGroupsResponse.json();
        let academicalGroupsResult = academicalGroupsResponseBody.map(academicalGroup => new AcademicalGroupDto(academicalGroup.id, academicalGroup.name));
        return academicalGroupsResult;
    }
}