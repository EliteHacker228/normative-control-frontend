import ENV from "../../config/ENV.js";
import AuthService from "../services/AuthService.js";

export default class DocumentsNetworker {
    static async sendDocumentToVerification({documentName, document}){
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${AuthService.getLocalUserData().accessToken}`);

        const formdata = new FormData();
        formdata.append("documentName", documentName);
        formdata.append("document", document);

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: formdata,
            redirect: "follow"
        };

        let documentSendingResponse = await fetch(`${ENV.API_URL}/documents`, requestOptions);
        if(!documentSendingResponse.ok)
            throw new Error('Document sending to verification has failed');
        return await documentSendingResponse.json();
    }
}