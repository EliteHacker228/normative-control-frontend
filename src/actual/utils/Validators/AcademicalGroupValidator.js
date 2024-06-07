export default class AcademicalGroupValidator {
    static isAcademicalGroupCreationFormValid(academicalGroupName) {
        if (academicalGroupName === '')
            return false;
        return true;
    }

    static isAcademicalGroupEditionFormValid(academicalGroupName, normocontrollerId, initialAcademicalGroupName, initialNormocontrollerId) {
        if (academicalGroupName === '')
            return false;
        if (+normocontrollerId === +initialNormocontrollerId && academicalGroupName === initialAcademicalGroupName)
            return false;
        return true;
    }
}