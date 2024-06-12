import Header from "../../../../commonComponents/header/Header.jsx";
import css from "./NormocontrollerProfileDocument.module.css";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import DocumentsService from "../../../../services/DocumentsService.js";
import AccessForbiddenError from "../../../../errors/AccessForbiddenError.js";
import NotFoundError from "../../../../errors/NotFoundError.js";
import InternalServerError from "../../../../errors/InternalServerError.js";
import Student from "../../../../domain/users/Student.js";
import Verdicts from "../../../../domain/documents/Verdicts.js";
import DocumentVerdictTranslators from "../../../../utils/Translators/DocumentVerdictTranslators.js";
import searchIco from "../../../student/profile/document/static/searchIco.svg";
import whiteDownloadIco from './static/downloadIcoWhite.svg';
import reportIco from "./static/reportIco.svg";
import Footer from "../../../../commonComponents/footer/Footer.jsx";
import {scrollIntoView} from "seamless-scroll-polyfill";

export default function NormocontrollerProfileDocument() {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const [student, setStudent] = useState(new Student());

    const [documentId, setDocumentId] = useState(searchParams.get('documentId'));
    const [documentHtml, setDocumentHtml] = useState('');
    const [documentMistakes, setDocumentMistakes] = useState([]);

    const [documentComment, setDocumentComment] = useState('');
    const [documentVerdict, setDocumentVerdict] = useState(Verdicts.NOT_CHECKED);

    const [reportedMistakesIds, setReportedMistakesIds] = useState(new Set());

    const resultDownloadRef = useRef();
    const resultViewRef = useRef();
    const resultViewHeaderRef = useRef();


    const hasMistakeId = (mistakeId) => {
        return reportedMistakesIds.has(mistakeId);
    }

    useEffect(() => {
        let intervalId;
        (async () => {
            try {
                await getDocumentData();
                intervalId = setInterval(getDocumentDataNoComments, 2000);
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
                }
            }
        })();

        return () => clearInterval(intervalId);
    }, []);

    const getDocumentData = async () => {
        let documentHtmlWithMistakes = await DocumentsService.getDocumentHtmlWithMistakesList(documentId);
        setDocumentHtml(documentHtmlWithMistakes.documentHtml);

        let documentNode = await DocumentsService.getDocumentNode(documentId);
        let student = Student.fromPlainObject(documentNode.student);
        setStudent(student);
        setDocumentComment(documentNode.comment ?? '');
        setDocumentVerdict(documentNode.documentVerdict);
        let reportedMistakes = new Set(documentNode.reportedMistakesIds);
        setReportedMistakesIds(reportedMistakes);
        setDocumentMistakes(documentHtmlWithMistakes.documentMistakes.sort((a, b) => reportedMistakes.has(b.id) - reportedMistakes.has(a.id)));
    };

    const getDocumentDataNoComments = async () => {
        console.log('Обновляем данные по работе (нормоконтролер)');
        let documentHtmlWithMistakes = await DocumentsService.getDocumentHtmlWithMistakesList(documentId);
        setDocumentHtml(documentHtmlWithMistakes.documentHtml);

        let documentNode = await DocumentsService.getDocumentNode(documentId);
        let student = Student.fromPlainObject(documentNode.student);
        setStudent(student);
        setDocumentVerdict(documentNode.documentVerdict);
        let reportedMistakes = new Set(documentNode.reportedMistakesIds);
        setReportedMistakesIds(reportedMistakes);
        setDocumentMistakes(documentHtmlWithMistakes.documentMistakes.sort((a, b) => reportedMistakes.has(b.id) - reportedMistakes.has(a.id)));
    };

    const onDownloadClick = async () => {
        let documentBlobResult = await DocumentsService.getDocumentDocx(documentId);
        let objectUrl = window.URL.createObjectURL(documentBlobResult.documentBlob);
        resultDownloadRef.current.href = objectUrl;
        resultDownloadRef.current.download = documentBlobResult.documentName;
        resultDownloadRef.current.click();
        window.URL.revokeObjectURL(objectUrl);
    }

    const onDocumentCommentInput = (e) => {
        setDocumentComment(e.target.value);
    };

    const onAcceptDocument = async () => {
        await DocumentsService.setDocumentVerdict(documentId, Verdicts.ACCEPTED, documentComment);
        await getDocumentData();
    };

    const onRejectDocument = async () => {
        await DocumentsService.setDocumentVerdict(documentId, Verdicts.REJECTED, documentComment);
        await getDocumentData();
    };

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

    const getVerdictClass = (documentVerdict) => {
        switch (documentVerdict) {
            case Verdicts.NOT_CHECKED:
                return `${css.documentVerdict__text} ${css.documentVerdict_notChecked}`;
            case Verdicts.ACCEPTED:
                return `${css.documentVerdict__text} ${css.documentVerdict_accepted}`;
            case Verdicts.REJECTED:
                return `${css.documentVerdict__text} ${css.documentVerdict_rejected}`;
        }
    };


    const onGoBackClick = () => {
        console.log('click');
        navigate('/profile/normocontroller/documents');
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
                            <p className={css.documentVerdict__text}>Результат автоматической проверки работы
                                студента</p>
                            <p className={css.documentVerdict__studentName}>{`${student.fullName}`}</p>
                            <div className={css.documentVerdict__status}>
                                <p className={getVerdictClass(documentVerdict)}>{DocumentVerdictTranslators.getDocumentVerdictTitle(documentVerdict)}</p>
                                <img className={css.documentVerdict__logo}
                                     src={DocumentVerdictTranslators.getDocumentVerdictIco(documentVerdict)}
                                     alt={DocumentVerdictTranslators.getDocumentVerdictTitle(documentVerdict)}/>
                            </div>
                            {
                                documentVerdict === Verdicts.NOT_CHECKED &&
                                <p className={css.documentVerdict__text}>Вы можете принять или отклонить данную
                                    работу</p>
                            }
                            <textarea className={css.documentVerdict__comment}
                                      placeholder='Комментарий к работе' value={documentComment}
                                      onInput={onDocumentCommentInput}
                                      disabled={documentVerdict !== Verdicts.NOT_CHECKED}/>
                            {documentVerdict === Verdicts.NOT_CHECKED &&
                                <div className={css.documentVerdict__buttons}>
                                    <button className={css.acceptButton} onClick={onAcceptDocument}>Принять</button>
                                    <button className={css.rejectButton} onClick={onRejectDocument}>Отклонить</button>
                                </div>
                            }
                        </div>
                    </div>

                    <div className={css.section}>
                        <h1 className={css.sectionHeader}>Список ошибок</h1>
                        <div className={css.mistakes}>
                            {documentMistakes.length === 0 &&
                                <p className={css.mistakes__placeholder}>В работе студента нет ошибок</p>}
                            {
                                documentMistakes.map((mistake, index) => {
                                    return (
                                        <div className={css.mistake} id={mistake.id} key={index}>
                                            <p>{mistake.description}</p>
                                            <div className={css.mistake__buttons}>
                                                <img className={css.mistake__button}
                                                     onClick={() => scrollAndMarkElementWithId(mistake.id)}
                                                     src={searchIco}
                                                     alt={'Перейти к ошибке'}
                                                     title={'Перейти к ошибке'}/>
                                                {hasMistakeId(mistake.id) &&
                                                    <img className={css.mistake__button} src={reportIco}
                                                         onClick={() => scrollAndMarkElementWithId(mistake.id)}
                                                         alt={'Ошибка отмечена как сомнительная'}
                                                         title={'Ошибка отмечена как сомнительная'}/>}
                                            </div>
                                        </div>);
                                })
                            }
                        </div>
                        <div onClick={onDownloadClick} className={css.downloadButton}>
                            <p>Скачать работу</p>
                            <img className={css.downloadButton__arrow} src={whiteDownloadIco} alt={'Скачать работу'}/>
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