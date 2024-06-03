export default class EmailValidator {
    static validateEmail(email) {
        let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return email.match(emailRegExp) && (email.endsWith('@urfu.me') || email.endsWith('@at.urfu.ru') || email.endsWith('@urfu.ru'));
    }
}