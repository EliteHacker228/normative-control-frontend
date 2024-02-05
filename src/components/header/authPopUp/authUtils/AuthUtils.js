export default class AuthUtils {
    static isEmailCorrect(email) {
        const emailRegExp =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        return email.match(emailRegExp) && (email.endsWith('@urfu.me') || email.endsWith('@at.urfu.ru'));
    }

    static isPasswordCorrect(password) {
        return password.trim().length > 0;
    }
}