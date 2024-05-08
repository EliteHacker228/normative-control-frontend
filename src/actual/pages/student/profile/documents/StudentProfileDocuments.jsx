import css from './StudentProfileDocuments.module.css';
import {useEffect, useRef, useState} from "react";
import User from "../../../../domain/users/User.js";
import AccountsService from "../../../../services/AccountsService.js";
import AuthService from "../../../../services/AuthService.js";
import Header from "../../../../commonComponents/header/Header.jsx";
import DocumentsService from "../../../../services/DocumentsService.js";
import {NavLink} from "react-router-dom";
import FileUploadButton from "../../../../commonComponents/buttons/fileUploadButton/FileUploadButton.jsx";
import downloadIco from './static/download_ico.svg';
import Verdicts from "../../../../domain/documents/Verdicts.js";
import documentAcceptedIco from './static/document_accepted_ico.svg';
import documentRejectedIco from './static/document_rejected.svg';
import documentNotCheckedIco from './static/document_reported.svg';
import Footer from "../../../../commonComponents/footer/Footer.jsx";
import DocumentVerdictTranslators from "../../../../utils/DocumentVerdictTranslators/DocumentVerdictTranslators.js";


export default function StudentProfileDocuments() {
    const resultDownloadRef = useRef();

    const [documents, setDocuments] = useState([]);

    const [isUploadingFailed, setIsUploadigFailed] = useState(false);
    const [uploadingFailureReason, setUploadingFailureReason] = useState('');

    useEffect(() => {
        (async () => {
                let documents = await DocumentsService.getDocuments();
                setDocuments(documents);
            }
        )();
    }, []);

    const onDownloadClick = async (e) => {
        e.preventDefault();
        let documentId = e.target.parentElement.parentElement.parentElement.id;
        let documentBlobResult = await DocumentsService.getDocumentDocx(documentId);
        let objectUrl = window.URL.createObjectURL(documentBlobResult.documentBlob);
        resultDownloadRef.current.href = objectUrl;
        resultDownloadRef.current.download = documentBlobResult.documentName;
        resultDownloadRef.current.click();
        window.URL.revokeObjectURL(objectUrl);
    };

    return (
        <div>
            <Header/>
            <div className={css.studentDocuments}>
                <h1 className={css.studentDocuments__header}>Загруженные работы</h1>
                <div className={css.documentsList}>
                    {documents.length === 0 &&
                        <p className={css.documentsList__placeholder}>Вы пока не загрузжали работы на проверку</p>}
                    {documents.sort((a, b) => new Date(b.verificationDate).getTime() - new Date(a.verificationDate).getTime())
                        .map((document, index) => {
                            return (
                                <NavLink to={`/profile/student/document?documentId=${document.id}`} key={index} id={document.id}
                                         className={css.documentNode} title={'Просмотреть результат проверки работы'}>

                                    <div className={css.documentNode__header}>
                                        <div to={`/profile/student/document?documentId=${document.id}`}
                                             className={css.documentNode__description}>{document.fileName}</div>
                                        <div
                                            className={css.documentNode__description}>{new Date(document.verificationDate).toLocaleString("ru-RU", {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}</div>
                                    </div>

                                    <div className={css.documentNode__buttons}>
                                        <div className={css.documentNode__status}
                                             title={DocumentVerdictTranslators.getDocumentVerdictTitle(document.documentVerdict)}>
                                            <img src={DocumentVerdictTranslators.getDocumentVerdictIco(document.documentVerdict)} alt={'Статус работы'}/>
                                        </div>
                                        <div className={css.documentNode__button} onClick={onDownloadClick}
                                             title={'Скачать работу'}>
                                            <img src={downloadIco} alt={'Скачать работу'}/>
                                        </div>
                                    </div>
                                </NavLink>
                            );
                        })}
                </div>
                <div className={css.uploading}>
                    <FileUploadButton setIsUploadigFailed={setIsUploadigFailed}
                                      setUploadingFailureReason={setUploadingFailureReason}/>
                    <div className={css.uploadingErrors}>
                        {isUploadingFailed &&
                            <p className={css.uploadingErrors__description}>{uploadingFailureReason}</p>}
                    </div>
                    <a ref={resultDownloadRef}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}