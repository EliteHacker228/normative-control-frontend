import AcademicalGroupDto from "../dto/auth/AcademicalGroupDto.js";
import AcademicalGroupsNetworker from "../networkers/AcademicalGroupsNetworker.js";
import AcademicalGroup from "../domain/academicGroups/AcademicalGroup.js";

export default class AcademicalGroupsService {
    static async getAcademicalGroups() {
        let academicalGroupsResult = await AcademicalGroupsNetworker.getAcademicalGroups();
        return academicalGroupsResult.map(academicalGroup => AcademicalGroup.fromPlainObject(academicalGroup));
    }

    static async deleteAcademicalGroupById(id) {
        await AcademicalGroupsNetworker.deleteAcademicalGroupById(id);
    }

    static async createAcademicalGroup(academicalGroupName, normocontrollerId){
        if(normocontrollerId  === '')
            normocontrollerId = null;
        let createAcademicalGroupResult = await AcademicalGroupsNetworker.createAcademicalGroup(academicalGroupName, normocontrollerId);
        return AcademicalGroup.fromPlainObject(createAcademicalGroupResult);
    }
}