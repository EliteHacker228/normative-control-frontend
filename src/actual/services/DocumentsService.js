import DocumentsNetworker from "../networkers/DocumentsNetworker.js";
import Result from "../domain/documents/Result.js";
import FileIsTooBigError from "../errors/FileIsTooBigError.js";
import WrongFileExtensionError from "../errors/WrongFileExtensionError.js";
import Verification from "../domain/documents/Verification.js";
import UnknownVerificationResultStatus from "../errors/UnknownVerificationResultStatus.js";
import DocumentTypes from "../domain/documents/DocumentTypes.js";
import Document from "../domain/documents/Document.js";
import Verdicts from "../domain/documents/Verdicts.js";

export default class DocumentsService {
    static async sendDocumentToVerification(documentUploadingDto) {
        const _10MB = 10_485_760;

        let fileSize = documentUploadingDto.document.size;
        let fileExtension = documentUploadingDto.documentName.split('.').at(-1);

        if (fileSize > _10MB) {
            throw new FileIsTooBigError(`Максимально допустимый объём файла 10 МБ`);
        }
        if (fileExtension !== 'docx') {
            throw new WrongFileExtensionError(`Допускаются только файлы в формате .docx`);
        }

        let documentUploadingResult = await DocumentsNetworker.sendDocumentToVerification(documentUploadingDto);
        console.log(documentUploadingResult);
        return Document.fromPlainObject(documentUploadingResult);
    }

    static async getDocumentVerificationResult(documentId) {
        let documentVerificationResult = await DocumentsNetworker.getDocumentVerificationResultStatus(documentId);
        if (!Verification.statuses.has(documentVerificationResult.verificationStatus)) {
            throw new UnknownVerificationResultStatus(`Unknown verification result status ${documentVerificationResult.verificationStatus}`);
        }
        return documentVerificationResult;
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

    static async setDocumentVerdict(documentId, verdict, documentComment) {
        let setDocumentVerdictResult = await DocumentsNetworker.setDocumentVerdictById(documentId, verdict, documentComment);
        return Document.fromPlainObject(setDocumentVerdictResult);
    }

    static async getDocumentsListCsv(){
        let documentsListCsv = await DocumentsNetworker.getDocumentsCsv();
        return documentsListCsv;
    }
}