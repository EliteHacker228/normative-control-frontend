import Roles from "../../domain/users/Roles.js";

export default class RoleTranslator {
    static getRoleName(documentVerdict) {
        switch (documentVerdict) {
            case Roles.NORMOCONTROLLER:
                return 'Нормоконтролер';
            case Roles.STUDENT:
                return 'Студент';
            case Roles.ADMIN:
                return 'Администратор';
        }
    }
}