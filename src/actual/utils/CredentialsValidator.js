export default class CredentialsValidator {
    static validateRegistrationForm({email, firstName, lastName, academicGroupId, password, passwordRepetition}) {
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

        return true;
    }
}