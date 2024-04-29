import Student from "../domain/users/Student.js";
import Normocontroller from "../domain/users/Normocontroller.js";
import Admin from "../domain/users/Admin.js";
import AccountsNetworker from "../networkers/AccountsNetworker.js";


export default class AccountsService {
    static async getAccountDataById(accountId) {
        let getAccountByIdResult = await AccountsNetworker.getAccount(accountId);
        switch (getAccountByIdResult.role) {
            case 'STUDENT':
                return Student.fromPlainObject(getAccountByIdResult);
            case 'NORMOCONTROLLER':
                return Normocontroller.fromPlainObject(getAccountByIdResult);
            case 'ADMIN':
                return Admin.fromPlainObject(getAccountByIdResult);
        }

        throw new Error('Unknown user role');
    }
}