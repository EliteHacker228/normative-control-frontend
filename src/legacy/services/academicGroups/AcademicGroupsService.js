import AuthService from "../auth/AuthService.js";
import ENV from "../../utils/apiUri/ENV.js";

export default class AcademicGroupsService {
    static async getAcademicGroups() {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        let response = await fetch(`${ENV.API_URL}/universities/1/groups`, requestOptions);
        if (response.status !== 200) {
            let responseText = await response.text();
            throw new Error(`Error ${response.status} : ${responseText}`);
        }
        let responseJson = await response.json();
        console.log(responseJson);
        return responseJson;
    }

    static async getNormocontrollers() {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        let response = await fetch(`${ENV.API_URL}/universities/1/normocontrollers`, requestOptions);
        if (response.status !== 200) {
            let responseText = await response.text();
            throw new Error(`Error ${response.status} : ${responseText}`);
        }
        let responseJson = await response.json();
        console.log(responseJson);
        return responseJson;
    }
}