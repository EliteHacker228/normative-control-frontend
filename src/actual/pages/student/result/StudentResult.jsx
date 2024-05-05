import css from './StudentResult.module.css';
import {useEffect, useRef, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import DocumentsService from "../../../services/DocumentsService.js";
import AccessForbiddenError from "../../../errors/AccessForbiddenError.js";
import NotFoundError from "../../../errors/NotFoundError.js";
import InternalServerError from "../../../errors/InternalServerError.js";
import Header from "../../../commonComponents/header/Header.jsx";
import Verdicts from "../../../domain/documents/Verdicts.js";
import Student from "../../../domain/users/Student.js";
import documentAcceptedIco from "../profile/documents/static/document_accepted_ico.svg";
import documentRejectedIco from "../profile/documents/static/document_rejected.svg";
import documentNotCheckedIco from "../profile/documents/static/document_reported.svg";
import reportIco from './static/reportIco.svg';
import unreportIco from './static/unreportIco.svg';
import searchIco from './static/searchIco.svg';
import showCommentIco from './static/showCommentIco.svg';
import hideCommentIco from './static/hideCommentIco.svg';
import Footer from "../../../commonComponents/footer/Footer.jsx";

export default function StudentResult() {
    const navigate = useNavigate();

    const resultViewRef = useRef();

    const [searchParams, setSearchParams] = useSearchParams();

    const [documentId, setDocumentId] = useState(searchParams.get('documentId'));
    const [documentHtml, setDocumentHtml] = useState('');
    const [documentMistakes, setDocumentMistakes] = useState([]);
    const [reportedMistakesIds, setReportedMistakesIds] = useState(new Set());

    const addMistakeId = (mistakeId) => {
        setReportedMistakesIds(prev => new Set(prev).add(mistakeId));
    }

    const removeMistakeId = (mistakeId) => {
        setReportedMistakesIds(prev => {
            const next = new Set(prev);
            next.delete(mistakeId);
            return next;
        });
    }

    const hasMistakeId = (mistakeId) => {
        return reportedMistakesIds.has(mistakeId);
    }

    const [documentComment, setDocumentComment] = useState('');
    const [documentVerdict, setDocumentVerdict] = useState(Verdicts.NOT_CHECKED);

    const [mistakeCount, setMistakeCount] = useState(0);


    const [isCommentAvailable, setIsCommentAvailable] = useState(false);
    const [isCommentShowed, setIsCommentShowed] = useState(false);

    const onChangeCommentVisibility = () => {
        if (!isCommentAvailable)
            return;
        setIsCommentShowed(prevState => !prevState);
    };

    const resultDownloadRef = useRef();

    useEffect(() => {
        (async () => {
            try {
                let documentHtmlWithMistakes = await DocumentsService.getDocumentHtmlWithMistakesList(documentId);
                setDocumentHtml(documentHtmlWithMistakes.documentHtml);
                setDocumentMistakes(documentHtmlWithMistakes.documentMistakes);

                let resultNode = await DocumentsService.getDocumentVerificationResult(documentId);
                let documentNode = resultNode.document;
                setDocumentComment(documentNode.comment ?? '');
                setIsCommentAvailable(Boolean(documentNode.comment));
                setDocumentVerdict(documentNode.documentVerdict);
                console.log('documentNode.reportedMistakesIds')
                console.log(documentNode.reportedMistakesIds)
                setReportedMistakesIds(new Set(documentNode.reportedMistakesIds));
                setMistakeCount(documentHtmlWithMistakes.documentMistakes.length);
            } catch (error) {
                switch (error.constructor) {
                    case AccessForbiddenError:
                        navigate('/errors/403');
                        break;
                    case NotFoundError:
                        navigate('/errors/404');
                        break;
                    case InternalServerError:
                        navigate('/errors/500');
                        break;
                }
            }
        })();
    }, []);

    const onDownloadClick = async () => {
        let documentBlobResult = await DocumentsService.getDocumentDocx(documentId);
        let objectUrl = window.URL.createObjectURL(documentBlobResult.documentBlob);
        resultDownloadRef.current.href = objectUrl;
        resultDownloadRef.current.download = documentBlobResult.documentName;
        resultDownloadRef.current.click();
        window.URL.revokeObjectURL(objectUrl);
    }

    const getDocumentVerdictIco = (documentVerdict) => {
        switch (documentVerdict) {
            case Verdicts.ACCEPTED:
                return documentAcceptedIco;
            case Verdicts.REJECTED:
                return documentRejectedIco;
            case Verdicts.NOT_CHECKED:
                return documentNotCheckedIco;
        }
    };

    const getDocumentVerdictTitle = (documentVerdict) => {
        switch (documentVerdict) {
            case Verdicts.ACCEPTED:
                return 'Работа принята';
            case Verdicts.REJECTED:
                return 'Работа отклонена';
            case Verdicts.NOT_CHECKED:
                return 'Работа не проверена';
        }
    };

    const scrollToElementWithId = (mistakeId) => {
        let elms = resultViewRef.current.contentDocument.querySelectorAll(`[id='${mistakeId}']`);
        if (elms.length === 0) {
            return;
        }

        if (elms.length === 2) {
            if (elms[0].innerText === '' && elms[1].innerText === '')
                return elms[0].scrollIntoView();

            if (elms[0].innerText === '')
                return elms[1].scrollIntoView();

            if (elms[1].innerText === '')
                return elms[0].scrollIntoView();
        }

        let elm = elms[0];
        while (elm.nodeName === 'SPAN')
            elm = elm.parentNode

        return elm.scrollIntoView();
    };

    const reportMistake = async (mistakeId) => {
        // await DocumentsService.reportDocumentByIdWithMistakeId(documentId, mistakeId);
        addMistakeId(mistakeId);
    };

    const unreportMistake = async (mistakeId) => {
        // await DocumentsService.unreportDocumentByIdWithMistake(documentId, mistakeId);
        removeMistakeId(mistakeId);
    };

    return (
        <div>
            <Header/>
            <div className={css.studentResult}>
                <div className={css.section}>
                    <div className={css.section}>
                        <h1 className={css.sectionHeader}>Статус работы</h1>
                        <div className={css.documentVerdict}>
                            <img className={css.documentVerdict__logo} src={getDocumentVerdictIco(documentVerdict)}
                                 alt={getDocumentVerdictTitle(documentVerdict)}/>
                            <div className={css.documentVerdict__controls} onClick={onChangeCommentVisibility}>
                                <p className={css.documentVerdict__description}>{getDocumentVerdictTitle(documentVerdict)}</p>
                                {isCommentAvailable && !isCommentShowed &&
                                    <img className={css.documentVerdict__commentDisplay} src={showCommentIco}/>}
                                {isCommentAvailable && isCommentShowed &&
                                    <img className={css.documentVerdict__commentDisplay} src={hideCommentIco}/>}
                            </div>
                            {isCommentShowed &&
                                <div className={css.commentary}>
                                    <h1 className={css.commentary__header}>Комментарий:</h1>
                                    <p className={css.commentary__content}>{documentComment}</p>
                                </div>
                            }
                        </div>
                    </div>

                    <div className={css.section}>
                        <h1 className={css.sectionHeader}>Список ошибок</h1>
                        <div className={css.mistakes}>
                            {
                                documentMistakes.map((mistake, index) => {
                                    return (
                                        <div className={css.mistake} id={mistake.id} key={index}>
                                            <p>{mistake.description}</p>
                                            <div className={css.mistake__buttons}>
                                                <img className={css.mistake__button}
                                                     onClick={() => scrollToElementWithId(mistake.id)} src={searchIco}
                                                     alt={'Перейти к ошибке'}/>
                                                {hasMistakeId(mistake.id) &&
                                                    <img className={css.mistake__button} src={unreportIco}
                                                         onClick={() => unreportMistake(mistake.id)}
                                                         alt={'Отменить ошибку'}/>}
                                                {!hasMistakeId(mistake.id) &&
                                                    <img className={css.mistake__button} src={reportIco}
                                                         onClick={() => reportMistake(mistake.id)}
                                                         alt={'Доложить о ошибке'}/>}
                                            </div>
                                        </div>);
                                })
                            }
                        </div>
                        <button onClick={onDownloadClick} className={css.downloadButton}>Скачать работу</button>
                        <a ref={resultDownloadRef}/>
                    </div>
                </div>
                <div className={css.section}>
                    <h1 className={css.sectionHeader}>Просмотр документа</h1>
                    <div className={css.documentViewer}>
                        <iframe className={css.documentViewer__document} ref={resultViewRef} srcDoc={documentHtml}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}