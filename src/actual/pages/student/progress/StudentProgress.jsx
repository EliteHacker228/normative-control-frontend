import css from './StudentProgress.module.css';
import Header from "../../../commonComponents/header/Header.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ProgressBar from "./components/ProgressBar.jsx";
import DocumentsService from "../../../services/DocumentsService.js";
import {useSearchParams} from "react-router-dom";
import Verification from "../../../domain/documents/Verification.js";
import AccessForbiddenError from "../../../errors/AccessForbiddenError.js";
import InternalServerError from "../../../errors/InternalServerError.js";
import NotFoundError from "../../../errors/NotFoundError.js";
import Footer from "../../../commonComponents/footer/Footer.jsx";
import documentAccepted from './static/document_accepted.svg';
import pandaSleeps from './static/panda_sleeps.svg';
import pandaAwake from './static/panda_awake.svg';

// TODO: Сделать редирект на страницу с ошибкой при попытке получить доступ к чужому ресурсу
// TODO: Сделать try/catch на ошибке при получении данных в сервисах через нетворкеры
export default function StudentProgress() {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const [documentId, setDocumentId] = useState(searchParams.get('documentId'));
    const [documentVerificationResultStatus, setDocumentVerificationResultStatus] = useState(Verification.pending);

    const checkDocumentVerificationStatus = async () => {
        try {
            let result = await DocumentsService.getDocumentVerificationResult(documentId);
            setDocumentVerificationResultStatus(result.verificationStatus);
        } catch (error) {
            switch (error.constructor) {
                case AccessForbiddenError:
                    navigate('/errors/403', { replace: true });
                    break;
                case NotFoundError:
                    navigate('/errors/404', { replace: true });
                    break;
                case InternalServerError:
                    navigate('/errors/500', { replace: true });
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
                }, 1000);
            }
        )();

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const onGoToResultClick = () => {
        navigate(`/result?documentId=${documentId}`);
    };

    return (
        <div>
            <Header/>
            <div className={css.studentProgress}>
                {documentVerificationResultStatus === Verification.pending &&
                    <div className={css.verificationInProgress}>
                        <ProgressBar/>
                        <img className={css.pandaSleeps} src={pandaSleeps} alt={'Панда спит'}/>
                    </div>
                }
                {documentVerificationResultStatus === Verification.ok &&
                    <div className={css.verificationComplete}>
                        <img className={css.verificationComplete__logo} src={documentAccepted} alt={'Ваша работа принято'}/>
                        <p className={css.mainText}>Ваша работа проверена</p>
                        <button className={css.goToResult} onClick={onGoToResultClick}>Просмотреть результат</button>
                        <img className={css.pandaAwake} src={pandaAwake} alt={'Панда проснулась'}/>
                    </div>
                }
                {documentVerificationResultStatus === Verification.error &&
                    <div className={css.verificationFailed}>
                        <p className={css.mainText}>При проверке вашей работы произошла ошибка</p>
                    </div>
                }
            </div>
            <Footer/>
        </div>
    );
}