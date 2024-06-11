import Student from "../domain/users/Student.js";
import User from "../domain/users/User.js";
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

    static async updateAccountData(accountId, personalData, doAuth = true) {
        await AccountsNetworker.patchAccount(accountId, personalData);
        let patchEmailResponse = await AccountsNetworker.patchAccountEmail(accountId, personalData.email);
        if (doAuth)
            AuthService.authenticateUserByJwtTokensPair(patchEmailResponse);
    }


    static async patchAccountPassword(accountId, oldPassword, newPassword) {
        await AccountsNetworker.patchAccountPassword(accountId, oldPassword, newPassword);
    }

    static async patchAccountPasswordAsAdmin(accountId, password) {
        await AccountsNetworker.patchAccountPasswordAsAdmin(accountId, password);
    }

    static async getNormocontrollers() {
        let normocontrollersPlainObjectsList = await AccountsNetworker.getNormocontrollers();
        return normocontrollersPlainObjectsList.map(normocontroller => Normocontroller.fromPlainObject(normocontroller));
    }

    static async getAccounts() {
        let accountsPlainObjectsList = await AccountsNetworker.getAccounts();
        // return accountsPlainObjectsList.map(account => User.fromPlainObject(account));
        return accountsPlainObjectsList;
    }
}