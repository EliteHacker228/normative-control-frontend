import AcademicalGroupDto from "../dto/auth/AcademicalGroupDto.js";
import AcademicalGroupsNetworker from "../networkers/AcademicalGroupsNetworker.js";
import AcademicalGroup from "../domain/academicGroups/AcademicalGroup.js";

export default class AcademicalGroupsService {
    static async getAcademicalGroups() {
        let academicalGroupsResult = await AcademicalGroupsNetworker.getAcademicalGroups();
        return academicalGroupsResult.map(academicalGroup => AcademicalGroup.fromPlainObject(academicalGroup));
    }

    static async getAcademicalGroupById(id) {
        let academicalGroupResult = await AcademicalGroupsNetworker.getAcademicalGroupById(id);
        return academicalGroupResult;
    }

    static async deleteAcademicalGroupById(id) {
        await AcademicalGroupsNetworker.deleteAcademicalGroupById(id);
    }

    static async deleteAccountBy(id){
        await AcademicalGroupsNetworker.deleteAccountBy(id);
    }

    static async createAcademicalGroup(academicalGroupName, normocontrollerId) {
        if (normocontrollerId === '')
            normocontrollerId = null;
        let createAcademicalGroupResult = await AcademicalGroupsNetworker.createAcademicalGroup(academicalGroupName, normocontrollerId);
        return AcademicalGroup.fromPlainObject(createAcademicalGroupResult);
    }

    static async editAcademicalGroup(academicalGroupId, academicalGroupName, normocontrollerId) {
        let editAcademicalGroupResult = await AcademicalGroupsNetworker.editAcademicalGroup(academicalGroupId, academicalGroupName, normocontrollerId);
        return AcademicalGroup.fromPlainObject(editAcademicalGroupResult);
    }
}