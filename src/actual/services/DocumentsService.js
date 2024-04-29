import DocumentsNetworker from "../networkers/DocumentsNetworker.js";
import Result from "../domain/documents/Result.js";
import FileIsTooBigError from "../errors/FileIsTooBigError.js";
import WrongFileExtensionError from "../errors/WrongFileExtensionError.js";

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
}