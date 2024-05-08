import Verdicts from "../domain/documents/Verdicts.js";
import documentAcceptedIco from "../pages/student/profile/documents/static/document_accepted_ico.svg";
import documentRejectedIco from "../pages/student/profile/documents/static/document_rejected.svg";
import documentNotCheckedIco from "../pages/student/profile/documents/static/document_reported.svg";

export default class DocumentVerdictTranslators {
    static getDocumentVerdictIco(document) {
        switch (document.documentVerdict) {
            case Verdicts.ACCEPTED:
                return documentAcceptedIco;
            case Verdicts.REJECTED:
                return documentRejectedIco;
            case Verdicts.NOT_CHECKED:
                return documentNotCheckedIco;
        }
    }

    static getDocumentVerdictTitle(document) {
        switch (document.documentVerdict) {
            case Verdicts.ACCEPTED:
                return 'Принята';
            case Verdicts.REJECTED:
                return 'Отклонена';
            case Verdicts.NOT_CHECKED:
                return 'Не проверена';
        }
    }
}