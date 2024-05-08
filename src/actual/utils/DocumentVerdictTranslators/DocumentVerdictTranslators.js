import Verdicts from "../../domain/documents/Verdicts.js";
import documentAcceptedIco from "../../pages/student/profile/documents/static/document_accepted_ico.svg";
import documentRejectedIco from "../../pages/student/profile/documents/static/document_rejected.svg";
import documentNotCheckedIco from "../../pages/student/profile/documents/static/document_reported.svg";

export default class DocumentVerdictTranslators {
    static getDocumentVerdictIco(documentVerdict) {
        switch (documentVerdict) {
            case Verdicts.ACCEPTED:
                return documentAcceptedIco;
            case Verdicts.REJECTED:
                return documentRejectedIco;
            case Verdicts.NOT_CHECKED:
                return documentNotCheckedIco;
        }
    }

    static getDocumentVerdictTitle(documentVerdict) {
        switch (documentVerdict) {
            case Verdicts.ACCEPTED:
                return 'Работа принята';
            case Verdicts.REJECTED:
                return 'Работа отклонена';
            case Verdicts.NOT_CHECKED:
                return 'Работа не проверена';
        }
    }

    static getDocumentVerdictForUser(documentVerdict) {
        switch (documentVerdict) {
            case Verdicts.NOT_CHECKED:
                return {verdict: Verdicts.NOT_CHECKED, reportsAvailable: true};
            case Verdicts.ACCEPTED:
                return {verdict: Verdicts.ACCEPTED, reportsAvailable: false};
            case Verdicts.REJECTED:
                return {verdict: Verdicts.REJECTED, reportsAvailable: false};
        }

    }

    static getDocumentVerdictForUserAlt(document, mistakesLength, reportedMistakesLength) {
        if (mistakesLength === 0) {
            return {verdict: Verdicts.ACCEPTED, reportsAvailable: false};
        } else {
            if (document.documentVerdict === Verdicts.NOT_CHECKED) {
                if (reportedMistakesLength === 0) {
                    return {verdict: Verdicts.REJECTED, reportsAvailable: true};
                } else {
                    return {verdict: Verdicts.NOT_CHECKED, reportsAvailable: true};
                }
            } else if (document.documentVerdict === Verdicts.ACCEPTED) {
                return {verdict: Verdicts.ACCEPTED, reportsAvailable: false};
            } else if (document.documentVerdict === Verdicts.REJECTED) {
                return {verdict: Verdicts.REJECTED, reportsAvailable: false};
            }
        }
    }
}