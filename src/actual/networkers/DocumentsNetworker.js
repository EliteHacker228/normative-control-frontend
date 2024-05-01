import ENV from "../../config/ENV.js";
import AuthService from "../services/AuthService.js";
import AccessForbiddenError from "../errors/AccessForbiddenError.js";
import InternalServerError from "../errors/InternalServerError.js";
import NotFoundError from "../errors/NotFoundError.js";

export default class DocumentsNetworker {
    static async sendDocumentToVerification({documentName, document}) {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const formdata = new FormData();
        formdata.append("documentName", documentName);
        formdata.append("document", document);

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: formdata,
        };

        let documentSendingResponse = await fetch(`${ENV.API_URL}/documents`, requestOptions);
        if (!documentSendingResponse.ok)
            throw new Error('Document sending to verification has failed');
        return await documentSendingResponse.json();
    }

    static async getDocumentVerificationResultStatus(documentId) {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const requestOptions = {
            method: "GET",
            headers: headers,
        };

        let getVerificationStatusResponse = await fetch(`${ENV.API_URL}/documents/${documentId}/status`, requestOptions);
        await this._handleResponseStatus(getVerificationStatusResponse);
        return await getVerificationStatusResponse.json();
    }

    static async getDocumentByIdOfType(documentId, documentType) {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const requestOptions = {
            method: "GET",
            headers: headers
        };

        let getDocumentResponse = await fetch(`${ENV.API_URL}/documents/${documentId}?type=${documentType}`, requestOptions);
        await this._handleResponseStatus(getDocumentResponse);
        return getDocumentResponse;
    }

    static async getDocuments() {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const requestOptions = {
            method: "GET",
            headers: headers
        };

        let documentsResponse = await fetch(`${ENV.API_URL}/documents`, requestOptions);
        await this._handleResponseStatus(documentsResponse);
        return await documentsResponse.json();
    }

    static async setDocumentVerdictById(documentId, verdict, documentComment) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const body = JSON.stringify({
            "verdict": verdict,
            "comment": documentComment
        });

        const requestOptions = {
            method: "PATCH",
            headers: headers,
            body: body
        };

        let setDocumentVerdictResponse = await fetch(`${ENV.API_URL}/documents/${documentId}/verdict`, requestOptions);
        await this._handleResponseStatus(setDocumentVerdictResponse);
        return await setDocumentVerdictResponse.json();
    }

    static async _handleResponseStatus(getDocumentResponse) {
        if (!getDocumentResponse.ok) {
            switch (getDocumentResponse.status) {
                case 403:
                    throw new AccessForbiddenError(`You don't have access to the document`);
                case 404:
                    throw new NotFoundError(`Document not found`);
                case 500:
                    throw new InternalServerError(`Something went wrong. Maybe, server made an error or you provided wrong data`);
                default:
                    throw new Error(`Getting document has failed with status ${getDocumentResponse.status} and message ${await getDocumentResponse.text()}`)
            }
        }
    }
}