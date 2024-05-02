import css from './StudentProfileDocuments.module.css';
import {useEffect, useRef, useState} from "react";
import User from "../../../../domain/users/User.js";
import AccountsService from "../../../../services/AccountsService.js";
import AuthService from "../../../../services/AuthService.js";
import Header from "../../../../commonComponents/header/Header.jsx";
import DocumentsService from "../../../../services/DocumentsService.js";
import {NavLink} from "react-router-dom";
import FileUploadButton from "../../../../commonComponents/buttons/fileUploadButton/FileUploadButton.jsx";
import downloadIco from '../static/download_ico.svg';
import Verdicts from "../../../../domain/documents/Verdicts.js";
import documentAcceptedIco from '../static/document_accepted_ico.svg';
import documentRejectedIco from '../static/document_rejected.svg';
import documentNotCheckedIco from '../static/document_reported.svg';
import Footer from "../../../../commonComponents/footer/Footer.jsx";


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

    const getDocumentVerdictIco = (document) => {
        switch (document.documentVerdict) {
            case Verdicts.ACCEPTED:
                return documentAcceptedIco;
            case Verdicts.REJECTED:
                return documentRejectedIco;
            case Verdicts.NOT_CHECKED:
                return documentNotCheckedIco;
        }
    };

    const getDocumentVerdictTitle = (document) => {
        switch (document.documentVerdict) {
            case Verdicts.ACCEPTED:
                return 'Принята';
            case Verdicts.REJECTED:
                return 'Отклонена';
            case Verdicts.NOT_CHECKED:
                return 'Не проверена';
        }
    };

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
                    {documents.map((document, index) => {
                        return (
                            <NavLink to={`/result?documentId=${document.id}`} key={index} id={document.id}
                                     className={css.documentNode} title={'Просмотреть результат проверки работы'}>
                                <div to={`/result?documentId=${document.id}`}
                                     className={css.documentNode__description}>{document.fileName}</div>

                                <div className={css.documentNode__buttons}>
                                    <div className={css.documentNode__status} title={getDocumentVerdictTitle(document)}>
                                        <img src={getDocumentVerdictIco(document)} alt={'Статус работы'}/>
                                    </div>
                                    <div className={css.documentNode__button} onClick={onDownloadClick} title={'Скачать работу'}>
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
                        {isUploadingFailed && <p className={css.uploadingErrors__description}>Не удалось загрузить файл</p>}
                    </div>
                    <a ref={resultDownloadRef}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}