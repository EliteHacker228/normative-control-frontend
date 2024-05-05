export default class CredentialsValidator {
    static validateLoginForm({email, password}) {
        if (email.trim() === '')
            return false;

        if (password.trim() === '')
            return false;

        return true;
    }

    static validateRegistrationForm({
                                        email,
                                        firstName,
                                        lastName,
                                        academicGroupId,
                                        password,
                                        passwordRepetition,
                                        isEulaAccepted
                                    }) {
        if (email.trim() === '')
            return false;

        if (firstName.trim() === '')
            return false;

        if (lastName.trim() === '')
            return false;

        if (academicGroupId.trim() === '')
            return false;

        if (password.trim() === '')
            return false;

        if (passwordRepetition.trim() === '')
            return false;

        if (password.trim() !== passwordRepetition.trim())
            return false;

        // if (!isEulaAccepted)
        //     return false;

        return true;
    }

    static validateStudentPersonalDataUpdatingForm({fullName, email, academicGroupId}) {
        if (email.trim() === '')
            return false;

        if (!this._isFullNameValid(fullName))
            return false;

        if (academicGroupId === '')
            return false;

        return true;
    }

    // Усовершенствовать алгоритм валидации
    static validateNormocontrollerPersonalDataUpdatingForm({fullName, email}) {
        if (email.trim() === '')
            return false;

        if (!this._isFullNameValid(fullName))
            return false;

        return true;
    }

    static _isFullNameValid(fullName) {
        if (!fullName)
            return false;

        let cyrillicNamePartRegex = /^(?=.{1,40}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/;
        let nameTokens = fullName.split(' ');
        let filteredNameTokens = nameTokens.filter(nameToken => {
                return nameToken.match(cyrillicNamePartRegex);
            }
        );

        if (nameTokens.length !== filteredNameTokens.length)
            return false;

        if (filteredNameTokens.length < 2)
            return false;

        return true;
    }

    static validatePasswordUpdatingForm({oldPassword, newPassword}) {
        if (oldPassword.trim() === '')
            return false;

        if (newPassword.trim() === '')
            return false;

        return true;
    }
}