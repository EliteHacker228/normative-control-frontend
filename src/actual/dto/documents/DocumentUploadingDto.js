export default class DocumentUploadingDto {
    #documentName;
    #document;

    constructor(documentName, document) {
        this.#documentName = documentName;
        this.#document = document;
    }

    get documentName() {
        return this.#documentName;
    }

    get document() {
        return this.#document;
    }
}