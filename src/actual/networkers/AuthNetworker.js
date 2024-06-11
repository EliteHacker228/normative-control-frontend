import ENV from "../../config/ENV.js";
import AccessForbiddenError from "../errors/AccessForbiddenError.js";
import NotFoundError from "../errors/NotFoundError.js";
import InternalServerError from "../errors/InternalServerError.js";
import UnauthorizedError from "../errors/UnauthorizedError.js";
import ConflictError from "../errors/ConflictError.js";
import AuthService from "../services/AuthService.js";
import BadRequest from "../errors/BadRequest.js";

export default class AuthNetworker {
    static async login(email, password) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "email": email,
            "password": password
        });

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: body,
        };

        let loginResponse = await fetch(`${ENV.API_URL}/auth/login`, requestOptions);
        if (!loginResponse.ok) {
            switch (loginResponse.status) {
                case 401:
                    throw new UnauthorizedError('Неверный e-mail или пароль');
                case 500:
                    throw new InternalServerError(`Не удалось войти. Что-то пошло не так на стороне сервера. Попробуйте снова`);
                default:
                    throw new Error(`Не удалось войти. Попробуйте снова`)
            }
        }
        return await loginResponse.json();
    }

    static async register({email, password, firstName, middleName, lastName, academicGroupId}) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const body = JSON.stringify({
            email: email,
            password: password,
            fullName: `${lastName} ${firstName} ${middleName}`,
            academicGroupId: academicGroupId
        });

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: body
        };

        let registrationResponse = await fetch(`${ENV.API_URL}/auth/register/student`, requestOptions);
        if (!registrationResponse.ok) {
            switch (registrationResponse.status) {
                case 400:
                    throw new BadRequest('Введены невалидные данные');
                case 409:
                    throw new ConflictError('Пользователь с таким e-mail уже существует');
                case 500:
                    throw new InternalServerError(`Регистрация не удалась. Что-то пошло не так на стороне сервера. Попробуйте снова`);
                default:
                    throw new Error(`Регистрация не удалась. Попробуйте снова`)
            }
        }
        return await registrationResponse.json();
    }

    static async registerNormocontroller({email, password, firstName, middleName, lastName}) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const body = JSON.stringify({
            email: email,
            password: password,
            fullName: `${lastName} ${firstName} ${middleName}`,
        });

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: body
        };

        let registrationResponse = await fetch(`${ENV.API_URL}/auth/register/normocontroller`, requestOptions);
        if (!registrationResponse.ok) {
            switch (registrationResponse.status) {
                case 400:
                    throw new BadRequest('Введены невалидные данные');
                case 403:
                    throw new AccessForbiddenError('Вы не имеете доступа к данному ресурсу или операции');
                case 409:
                    throw new ConflictError('Пользователь с таким e-mail уже существует');
                case 500:
                    throw new InternalServerError(`Регистрация не удалась. Что-то пошло не так на стороне сервера. Попробуйте снова`);
                default:
                    throw new Error(`Регистрация не удалась. Попробуйте снова`)
            }
        }
        return await registrationResponse.json();
    }
}