import {v4 as getUUID} from 'uuid';
import AuthService from "../auth/AuthService.js";
import ENV from "../../utils/apiUri/ENV.js";

export default class StudworkService {
    static async uploadForAnonymousVerification(file, fingerprint){
        const formdata = new FormData();
        formdata.append("document", file, "sample.docx");
        formdata.append("fingerprint", fingerprint);

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
        };

        let response = await fetch(`${ENV.API_URL}/documents`, requestOptions);
        let result = await response.json();
        let documentId = result.documentId;
        console.log(result);
        return documentId;
    }

    static async checkIfVerificationCompleted(documentId){
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${AuthService.getAccessToken()}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        let response = await fetch(`${ENV.API_URL}/documents/${documentId}/status`, requestOptions);
        let responseJson = await response.json();
        let message = responseJson.message;
        if(response.ok)
            return true;
        return false;
    }

    static async uploadForAuthedVerification(file){
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${AuthService.getAccessToken()}`);

        const formdata = new FormData();
        formdata.append("document", file, "MyWork.docx");
        formdata.append("documentName", "MyWork.docx");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        let response = await fetch(`${ENV.API_URL}/documents`, requestOptions);
        let result = await response.json();
        let documentId = result.document.id;
        console.log(result);
        return documentId;
    }

    static async getResultOfAnonymousVerification(resultId, fingerprint){
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        try {
            let response = await fetch(`${ENV.API_URL}/documents/${resultId}?type=html`, requestOptions);
            let responseHtml = await response.text();
            return responseHtml;
        } catch (e) {
            console.log(e);
        }
    }

    static async getResultOfAuthedVerification(resultId){
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${AuthService.getAccessToken()}`);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            let response = await fetch(`${ENV.API_URL}/documents/${resultId}?type=html`, requestOptions);
            let responseHtml = await response.text();
            return responseHtml;
        } catch (e) {
            console.log(e);
        }
    }

    static async getResultOfAuthedVerificationByInspector(resultId){
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${AuthService.getAccessToken()}`);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            let response = await fetch(`${ENV.API_URL}/documents/${resultId}?type=html`, requestOptions);
            let responseHtml = await response.text();
            return responseHtml;
        } catch (e) {
            console.log(e);
        }
    }

    static async getListOfAuthedVerifications(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${AuthService.getAccessToken()}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let response = await fetch(`${ENV.API_URL}/documents/verifications`, requestOptions);
        let responseJson = await response.json();
        return responseJson;
    }

    static async getListOfVerificationsByStudentsEmail(email){
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${AuthService.getAccessToken()}`);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let result = await fetch(`${ENV.API_URL}/documents/authed/find?searchQuery=${email}`, requestOptions);
        if(result.ok) {
            let resultJson = await result.json();
            return resultJson;
        }
        return [];
    }
}
