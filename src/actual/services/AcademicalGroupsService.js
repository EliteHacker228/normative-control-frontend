import AcademicalGroupDto from "../dto/auth/AcademicalGroupDto.js";
import AcademicalGroupsNetworker from "../networkers/AcademicalGroupsNetworker.js";

export default class AcademicalGroupsService {
    static async getAcademicalGroups() {
        let academicalGroupsResult = await AcademicalGroupsNetworker.getAcademicalGroups();
        return academicalGroupsResult.map(academicalGroup => new AcademicalGroupDto(academicalGroup.id, academicalGroup.name));
    }
}