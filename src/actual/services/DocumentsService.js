import DocumentsNetworker from "../networkers/DocumentsNetworker.js";
import Result from "../domain/documents/Result.js";
import FileIsTooBigError from "../errors/FileIsTooBigError.js";
import WrongFileExtensionError from "../errors/WrongFileExtensionError.js";
import Verification from "../domain/documents/Verification.js";
import UnknownVerificationResultStatus from "../errors/UnknownVerificationResultStatus.js";
import DocumentTypes from "../domain/documents/DocumentTypes.js";
import Document from "../domain/documents/Document.js";

export default class DocumentsService {
    static async sendDocumentToVerification(documentUploadingDto) {
        const _200MB = 209_715_200;

        let fileSize = documentUploadingDto.document.size;
        let fileExtension = documentUploadingDto.documentName.split('.').at(-1);

        if (fileSize > _200MB) {
            throw new FileIsTooBigError(`File is too big. Maximal size is 200 MB, and your file's size is ${fileSize}`);
        }
        if (fileExtension !== 'docx') {
            throw new WrongFileExtensionError(`Wrong file extension. Needed .docx, and your file's extension is ${fileExtension}`);
        }

        let documentUploadingResult = await DocumentsNetworker.sendDocumentToVerification(documentUploadingDto);
        return Result.fromPlainObject(documentUploadingResult);
    }

    static async getDocumentVerificationResultStatus(documentId) {
        let documentVerificationResult = await DocumentsNetworker.getDocumentVerificationResultStatus(documentId);
        if (!Verification.statuses.has(documentVerificationResult.status)) {
            throw new UnknownVerificationResultStatus(`Unknown verification result status ${documentVerificationResult.status}`);
        }
        return documentVerificationResult.status;
    }

    static async getDocumentHtmlWithMistakesList(documentId) {
        let getDocumentResult = await DocumentsNetworker.getDocumentByIdOfType(documentId, DocumentTypes.HTML);
        let documentResultHtml = await getDocumentResult.text();
        let mistakes = eval(documentResultHtml.slice(documentResultHtml.indexOf('<script>') + 8, documentResultHtml.indexOf('</script>')) + ';mistakes();')

        console.log(mistakes);

        return {
            "documentHtml": documentResultHtml,
            "documentMistakes": mistakes
        };
    }

    static async getDocumentDocx(documentId) {
        let getDocumentResultNode = await DocumentsNetworker.getDocumentByIdOfType(documentId, DocumentTypes.NODE);
        let getDocumentResultDocx = await DocumentsNetworker.getDocumentByIdOfType(documentId, DocumentTypes.DOCX);

        let getDocumentResultNodeBody = await getDocumentResultNode.json();
        let getDocumentResultDocxBody = await getDocumentResultDocx.blob();

        return {
            "documentName": getDocumentResultNodeBody.fileName,
            "documentBlob": getDocumentResultDocxBody
        };
    }

    static async getDocumentNode(documentId) {
        let getDocumentResult = await DocumentsNetworker.getDocumentByIdOfType(documentId, DocumentTypes.NODE);
        return await getDocumentResult.json();
    }

    static async getDocuments() {
        let getDocumentsResult = await DocumentsNetworker.getDocuments();
        return getDocumentsResult.map(document => Document.fromPlainObject(document));
    }
}