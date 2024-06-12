import css from './StudentDocument.module.css';
import {useEffect, useRef, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import DocumentsService from "../../../../services/DocumentsService.js";
import AccessForbiddenError from "../../../../errors/AccessForbiddenError.js";
import NotFoundError from "../../../../errors/NotFoundError.js";
import InternalServerError from "../../../../errors/InternalServerError.js";
import Header from "../../../../commonComponents/header/Header.jsx";
import Verdicts from "../../../../domain/documents/Verdicts.js";
import Student from "../../../../domain/users/Student.js";
import documentAcceptedIco from "../documents/static/document_accepted_ico.svg";
import documentRejectedIco from "../documents/static/document_rejected.svg";
import documentNotCheckedIco from "../documents/static/document_reported.svg";
import reportIco from './static/reportIco.svg';
import unreportIco from './static/unreportIco.svg';
import searchIco from './static/searchIco.svg';
import showCommentIco from './static/showCommentIco.svg';
import hideCommentIco from './static/hideCommentIco.svg';
import Footer from "../../../../commonComponents/footer/Footer.jsx";
import Document from "../../../../domain/documents/Document.js";
import DocumentVerdictTranslators from "../../../../utils/Translators/DocumentVerdictTranslators.js";
import whiteDownloadIco from "./static/downloadIcoWhite.svg";
import {scrollBy, scrollIntoView, scrollTo} from "seamless-scroll-polyfill";

export default function StudentDocument() {
    const navigate = useNavigate();

    const resultViewRef = useRef();
    const resultViewHeaderRef = useRef();

    const [searchParams, setSearchParams] = useSearchParams();

    const [documentId, setDocumentId] = useState(searchParams.get('documentId'));
    const [documentHtml, setDocumentHtml] = useState('');
    const [documentMistakes, setDocumentMistakes] = useState([]);
    const [reportedMistakesIds, setReportedMistakesIds] = useState(new Set());
    const [documentNode, setDocumentNode] = useState(new Document());

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

    const [isReported, setIsReported] = useState(false);
    const [isReportAvailable, setIsReportAvailable] = useState(false);

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
                await getPageData();
            } catch (error) {
                switch (error.constructor) {
                    case AccessForbiddenError:
                        navigate('/errors/403', {replace: true});
                        break;
                    case NotFoundError:
                        navigate('/errors/404', {replace: true});
                        break;
                    case InternalServerError:
                        navigate('/errors/500', {replace: true});
                        break;
                    default:
                        console.log(error);
                        break;
                }
            }
        })();
    }, []);

    const getPageData = async () => {
        let documentHtmlWithMistakes = await DocumentsService.getDocumentHtmlWithMistakesList(documentId);
        setDocumentHtml(documentHtmlWithMistakes.documentHtml);
        // console.log(documentHtmlWithMistakes.documentHtml);
        setDocumentMistakes(documentHtmlWithMistakes.documentMistakes);
        setMistakeCount(documentHtmlWithMistakes.documentMistakes.length);

        let resultNode = await DocumentsService.getDocumentNode(documentId);
        resultNode = Document.fromPlainObject(resultNode);
        setDocumentNode(resultNode);
        setIsReported(resultNode.reported);
        setIsCommentAvailable(Boolean(resultNode.comment));
        setDocumentComment(resultNode.comment ?? '');

        // TODO: Применить когда в БД будет актуальное значение ошибок
        // let documentVerdictForUser = Translators.getDocumentVerdictForUser(resultNode, documentHtmlWithMistakes.documentMistakes.length, resultNode.reportedMistakesIds.length);

        let documentVerdictForUser = DocumentVerdictTranslators.getDocumentVerdictForUser(resultNode.documentVerdict);
        setDocumentVerdict(documentVerdictForUser.verdict);
        setIsReportAvailable(documentVerdictForUser.reportsAvailable);
        setReportedMistakesIds(new Set(resultNode.reportedMistakesIds));
    };

    const onDownloadClick = async () => {
        let documentBlobResult = await DocumentsService.getDocumentDocx(documentId);
        let objectUrl = window.URL.createObjectURL(documentBlobResult.documentBlob);
        resultDownloadRef.current.href = objectUrl;
        resultDownloadRef.current.download = documentBlobResult.documentName;
        resultDownloadRef.current.click();
        window.URL.revokeObjectURL(objectUrl);
    }

    const scrollAndMarkElementWithId = (mistakeClass) => {
        let elms = resultViewRef.current.contentDocument.querySelectorAll(`.${mistakeClass}`);
        if (elms.length === 0) {
            return;
        }

        let elm;
        if (elms.length === 2 && elms[0].innerText === '') {
            elm = elms[1];
        } else {
            elm = elms[0];
        }

        elm.style.borderRadius = '5px';
        elm.style.backgroundColor = 'rgba(255, 0, 40, 0.5)';
        elm.style.transition = "background-color 1s";
        setTimeout(() => {
            elm.style.transition = "background-color 1s";
            elm.style.border = 'none';
            elm.style.backgroundColor = 'white';
        }, 2000);
        scrollIntoView(elm, {behavior: "smooth"});
        if(resultViewRef.current.getBoundingClientRect().top > 0) {
            scrollIntoView(resultViewRef.current, {behavior: "smooth"}, {duration: Number.POSITIVE_INFINITY});
        }else{
            scrollIntoView(resultViewRef.current, {behavior: "smooth"});
        }
    };

    const reportMistake = async (documentId, mistakeId) => {
        try {
            await DocumentsService.reportDocumentByIdWithMistake(documentId, mistakeId);
            await getPageData();
            addMistakeId(mistakeId);
        } catch (e) {
            removeMistakeId(mistakeId);
        }
    };

    const unreportMistake = async (documentId, mistakeId) => {
        try {
            await DocumentsService.unreportDocumentByIdWithMistake(documentId, mistakeId);
            await getPageData();
            removeMistakeId(mistakeId);
        } catch (e) {
            addMistakeId(mistakeId);
        }
    };

    const getVerdictDescriptionClass = (documentVerdict) => {
        switch (documentVerdict) {
            case Verdicts.NOT_CHECKED:
                return `${css.documentVerdict__description} ${css.documentVerdict__description_notChecked}`;
            case Verdicts.ACCEPTED:
                return `${css.documentVerdict__description} ${css.documentVerdict__description_accepted}`;
            case Verdicts.REJECTED:
                return `${css.documentVerdict__description} ${css.documentVerdict__description_rejected}`;
        }
    };

    const onGoBackClick = () => {
        console.log('click');
        navigate('/profile/student/documents');
    };

    return (
        <div>
            <Header/>
            <div className={css.studentResult}>
                <div className={css.section}>
                    <div className={css.section}>
                        <button className={css.search__goBack} onClick={onGoBackClick}
                                title={'Вернуться к списку работ'}/>
                        <h1 className={css.sectionHeader}>Статус работы</h1>
                        <div className={css.documentVerdict}>
                            <img className={css.documentVerdict__logo}
                                 src={DocumentVerdictTranslators.getDocumentVerdictIco(documentVerdict)}
                                 alt={DocumentVerdictTranslators.getDocumentVerdictTitle(documentVerdict)}/>
                            <div className={css.documentVerdict__controls} onClick={onChangeCommentVisibility}>
                                <p className={getVerdictDescriptionClass(documentVerdict)}>{DocumentVerdictTranslators.getDocumentVerdictTitle(documentVerdict)}</p>
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
                            {documentMistakes.length === 0 &&
                                <p className={css.mistakes__placeholder}>В вашей работе нет ошибок</p>}
                            {
                                documentMistakes.map((mistake, index) => {
                                    return (
                                        <div className={css.mistake} id={mistake.id} key={index}>
                                            <p>{mistake.description}</p>
                                            <div className={css.mistake__buttons}>
                                                <img className={css.mistake__button}
                                                     onClick={() => scrollAndMarkElementWithId(mistake.id)}
                                                     src={searchIco}
                                                     alt={'Перейти к ошибке'} title={'Перейти к ошибке'}/>
                                                {isReportAvailable && hasMistakeId(mistake.id) &&
                                                    <img className={css.mistake__button} src={unreportIco}
                                                         onClick={() => unreportMistake(documentId, mistake.id)}
                                                         alt={'Отменить ошибку'} title={'Отменить пометку ошибки как сомнительную'}/>}
                                                {isReportAvailable && !hasMistakeId(mistake.id) &&
                                                    <img className={css.mistake__button} src={reportIco}
                                                         onClick={() => reportMistake(documentId, mistake.id)}
                                                         alt={'Доложить о ошибке'} title={'Отметить ошибку как сомнительную'}/>}
                                            </div>
                                        </div>);
                                })
                            }
                        </div>
                        <div onClick={onDownloadClick} className={css.downloadButton}>
                            <p>Скачать работу</p>
                            <img src={whiteDownloadIco} alt={'Скачать'}/>
                        </div>
                        <a ref={resultDownloadRef}/>
                    </div>
                </div>
                <div className={css.section}>
                    <h1 className={css.sectionHeader} ref={resultViewHeaderRef}>Просмотр документа</h1>
                    <div className={css.documentViewer}>
                        <iframe className={css.documentViewer__document} ref={resultViewRef} srcDoc={documentHtml}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}