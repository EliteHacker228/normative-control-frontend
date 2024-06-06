export default class AcademicalGroupValidator {
    static isAcademicalGroupCreationFormValid(academicalGroupName) {
        if (academicalGroupName === '')
            return false;
        return true;
    }
}