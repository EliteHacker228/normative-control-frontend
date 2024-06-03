import AuthService from "../../services/AuthService.js";
import Roles from "../../domain/users/Roles.js";
import UnauthorizedError from "../../errors/UnauthorizedError.js";

export default class AfterAuthNavigator {
    static getAfterAuthRoute(){
        let role = AuthService.getLocalUserData().role;
        switch (role) {
            case Roles.STUDENT:
            case Roles.NORMOCONTROLLER:
                return `/profile/${role.toLowerCase()}/documents`;
            case Roles.ADMIN:
                return `/profile/${role.toLowerCase()}/groups`;
            default:
                throw new UnauthorizedError(`Role ${role} is unknown`);
        }
    }
}