import ENV from "../../config/ENV.js";

export default class AuthNetworker {
    static async login(email, password){
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
        if(!loginResponse.ok)
            throw new Error(`Login failed due to: ${loginResponse.statusText}`)
        return await loginResponse.json();
    }

    static async register({email, password, firstName, middleName, lastName, academicGroupId}) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const body = JSON.stringify({
            email: email,
            password: password,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            academicGroupId: academicGroupId
        });

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: body
        };

        let registrationResponse = await fetch(`${ENV.API_URL}/auth/register/student`, requestOptions);
        if(!registrationResponse.ok)
            throw new Error(`Registration failed due to: ${registrationResponse.statusText}`)
        return await registrationResponse.json();
    }


}