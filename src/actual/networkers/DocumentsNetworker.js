import ENV from "../../config/ENV.js";
import AuthService from "../services/AuthService.js";
import AccessForbiddenError from "../errors/AccessForbiddenError.js";
import InternalServerError from "../errors/InternalServerError.js";

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

        let verificationStatusResponse = await fetch(`${ENV.API_URL}/documents/${documentId}/status`, requestOptions);
        if (!verificationStatusResponse.ok) {
            switch (verificationStatusResponse.status){
                case 403:
                    throw new AccessForbiddenError(`You don't have access to the document ${documentId}`);
                case 500:
                    throw new InternalServerError(`Something went wrong. Maybe, server made an error or you provided wrong data`);
                default:
                    throw new Error(`Receiving of document's verification status has failed with status: ${verificationStatusResponse.status} and message: ${await verificationStatusResponse.text()}`);
            }
        }
        return await verificationStatusResponse.json();
    }
}