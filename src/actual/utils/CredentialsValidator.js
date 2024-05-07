import EmailValidator from "./EmailValidator.js";

export default class CredentialsValidator {
    static validateLoginForm({email, password}) {
        if(!EmailValidator.validateEmail(email))
            return false;

        if (password === '')
            return false;

        return true;
    }

    static validateRegistrationForm({
                                        email,
                                        firstName,
                                        middleName,
                                        lastName,
                                        academicGroupId,
                                        password,
                                        passwordRepetition,
                                    }) {

        if(!EmailValidator.validateEmail(email))
            return false;

        if (!this.isNamePartValid(firstName))
            return false;

        if (middleName && !this.isNamePartValid(middleName))
            return false;

        if (!this.isNamePartValid(lastName))
            return false;


        if (!academicGroupId.match(/\d+/))
            return false;

        if (password === '')
            return false;

        if (passwordRepetition === '')
            return false;

        if (password !== passwordRepetition)
            return false;

        return true;
    }

    static validateStudentPersonalDataUpdatingForm({fullName, email, academicGroupId}) {
        if(!EmailValidator.validateEmail(email))
            return false;

        if (!this._isFullNameValid(fullName))
            return false;

        if (academicGroupId === '')
            return false;

        return true;
    }

    // Усовершенствовать алгоритм валидации
    static validateNormocontrollerPersonalDataUpdatingForm({fullName, email}) {
        if(!EmailValidator.validateEmail(email))
            return false;

        if (!this._isFullNameValid(fullName))
            return false;

        return true;
    }

    static _isFullNameValid(fullName) {
        if (!fullName)
            return false;

        let nameTokens = fullName.split(' ');
        let filteredNameTokens = nameTokens.filter(nameToken => {
                return this.isNamePartValid(nameToken);
            }
        );

        if (nameTokens.length !== filteredNameTokens.length)
            return false;

        if (filteredNameTokens.length < 2)
            return false;

        return true;
    }

    static isNamePartValid(name){
        let cyrillicNamePartRegex = /^(?=.{1,40}$)[а-яёА-ЯЁ]+(?:[-' ][а-яёА-ЯЁ]+)*$/;
        return name.match(cyrillicNamePartRegex)
    }

    static validatePasswordUpdatingForm({oldPassword, newPassword}) {
        if (oldPassword === '')
            return false;

        if (newPassword === '')
            return false;

        return true;
    }
}