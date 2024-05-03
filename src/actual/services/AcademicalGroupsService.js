import AcademicalGroupDto from "../dto/auth/AcademicalGroupDto.js";
import AcademicalGroupsNetworker from "../networkers/AcademicalGroupsNetworker.js";
import AcademicGroup from "../domain/academicGroups/AcademicGroup.js";

export default class AcademicalGroupsService {
    static async getAcademicalGroups() {
        let academicalGroupsResult = await AcademicalGroupsNetworker.getAcademicalGroups();
        return academicalGroupsResult.map(academicalGroup => AcademicGroup.fromPlainObject(academicalGroup));
    }
}