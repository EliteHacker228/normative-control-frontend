import Student from "../domain/users/Student.js";
import Normocontroller from "../domain/users/Normocontroller.js";
import Admin from "../domain/users/Admin.js";
import AccountsNetworker from "../networkers/AccountsNetworker.js";
import Roles from "../domain/users/Roles.js";
import AuthService from "./AuthService.js";


export default class AccountsService {
    static async getAccountDataById(accountId) {
        let getAccountByIdResult = await AccountsNetworker.getAccount(accountId);
        switch (getAccountByIdResult.role) {
            case Roles.STUDENT:
                return Student.fromPlainObject(getAccountByIdResult);
            case Roles.NORMOCONTROLLER:
                return Normocontroller.fromPlainObject(getAccountByIdResult);
            case Roles.ADMIN:
                return Admin.fromPlainObject(getAccountByIdResult);
        }

        throw new Error('Unknown user role');
    }

    static async patchStudentAccount(accountId, personalData) {
        await AccountsNetworker.patchAccount(accountId, personalData);
        let patchEmailResponse = await AccountsNetworker.patchAccountEmail(accountId, personalData.email);
        AuthService.authnticateUserByJwtTokensPair(patchEmailResponse);
    }


    static async patchAccountPassword(accountId, password) {
        await AccountsNetworker.patchAccountPassword(accountId, password);
    }
}