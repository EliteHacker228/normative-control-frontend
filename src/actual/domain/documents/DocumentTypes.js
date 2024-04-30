export default class DocumentTypes {
    static _node = 'node';
    static _docx = 'docx';
    static _html = 'html';

    static _types = new Set([this._node, this._html, this._docx]);

    static get NODE() {
        return this._node;
    }

    static get DOCX() {
        return this._docx;
    }

    static get HTML() {
        return this._html;
    }

    static get TYPES() {
        return this._types;
    }
}