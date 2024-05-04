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

        if (!isEulaAccepted)
            return false;

        return true;
    }

    static validateStudentPersonalDataUpdatingForm({firstName, lastName, email, academicGroupId}) {
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(academicGroupId);
        if (email.trim() === '')
            return false;

        if (firstName.trim() === '')
            return false;

        if (lastName.trim() === '')
            return false;

        if (academicGroupId === '')
            return false;

        return true;
    }

    static validateNormocontrollerPersonalDataUpdatingForm({firstName, lastName, email}) {
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        if (email.trim() === '')
            return false;

        if (firstName.trim() === '')
            return false;

        if (lastName.trim() === '')
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