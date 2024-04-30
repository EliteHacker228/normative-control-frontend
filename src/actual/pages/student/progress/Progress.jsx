import Header from "../../../commonComponents/header/Header.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ProgressBar from "./components/ProgressBar.jsx";
import DocumentsService from "../../../services/DocumentsService.js";
import {useSearchParams} from "react-router-dom";
import Verification from "../../../domain/documents/Verification.js";
import AccessForbiddenError from "../../../errors/AccessForbiddenError.js";
import InternalServerError from "../../../errors/InternalServerError.js";

// TODO: Сделать редирект на страницу с ошибкой при попытке получить доступ к чужому ресурсу
// TODO: Сделать try/catch на ошибке при получении данных в сервисах через нетворкеры
export default function Progress() {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const [documentId, setDocumentId] = useState(searchParams.get('documentId'));
    const [documentVerificationResultStatus, setDocumentVerificationResultStatus] = useState(Verification.pending);

    const checkDocumentVerificationStatus = async () => {
        try {
            let status = await DocumentsService.getDocumentVerificationResultStatus(documentId);
            setDocumentVerificationResultStatus(status);
        } catch (error) {
            switch (error.constructor) {
                case AccessForbiddenError:
                    navigate('/errors/403');
                    break;
                case InternalServerError:
                    navigate('/errors/500');
                    break;
            }
        }
    };

    useEffect(() => {
        let intervalId;
        checkDocumentVerificationStatus();

        (async () => {

                intervalId = setInterval(async () => {
                    checkDocumentVerificationStatus();
                }, 5000);
            }
        )();

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <Header/>
            {documentVerificationResultStatus === Verification.pending && <ProgressBar/>}
            {documentVerificationResultStatus === Verification.ok && <p>Ваша работа проверена</p>}
            {documentVerificationResultStatus === Verification.error &&
                <p>При првоерке вашей работы произошла ошибка</p>}
        </div>
    );
}