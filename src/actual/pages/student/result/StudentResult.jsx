import {useEffect, useRef, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import DocumentsService from "../../../services/DocumentsService.js";
import AccessForbiddenError from "../../../errors/AccessForbiddenError.js";
import NotFoundError from "../../../errors/NotFoundError.js";
import InternalServerError from "../../../errors/InternalServerError.js";
import Header from "../../../commonComponents/header/Header.jsx";
import Verdicts from "../../../domain/documents/Verdicts.js";
import Student from "../../../domain/users/Student.js";

export default function StudentResult() {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const [documentId, setDocumentId] = useState(searchParams.get('documentId'));
    const [documentHtml, setDocumentHtml] = useState('');
    const [documentMistakes, setDocumentMistakes] = useState([]);

    const [documentComment, setDocumentComment] = useState('');
    const [documentVerdict, setDocumentVerdict] = useState(Verdicts.NOT_CHECKED);

    const resultDownloadRef = useRef();

    useEffect(() => {
        (async () => {
            try {
                let documentHtmlWithMistakes = await DocumentsService.getDocumentHtmlWithMistakesList(documentId);
                setDocumentHtml(documentHtmlWithMistakes.documentHtml);
                setDocumentMistakes(documentHtmlWithMistakes.documentMistakes);
                let documentNode = await DocumentsService.getDocumentNode(documentId);
                setDocumentComment(documentNode.comment ?? '');
                setDocumentVerdict(documentNode.documentVerdict);
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

    return (
        <div>
            <Header/>
            <p>Результат проверки вашей работы</p>
            <p>Данная работа имеет статус {documentVerdict}</p>
            {documentVerdict !== Verdicts.NOT_CHECKED &&
                <div>
                    <p>Комментарий от нормоконтролера:</p>
                    <p>{documentComment}</p>
                </div>}

            <div>
                <p>Список ошибок</p>
                <ul>
                    {
                        documentMistakes.map((mistake, index) => {
                            return (
                                <div id={mistake.id} key={index}>
                                    <b>{mistake.mistakeReason}</b>
                                    <p>{mistake.description}</p>
                                </div>);
                        })
                    }
                </ul>
            </div>
            <div>
                <p>Просмотр документа</p>
                <iframe srcDoc={documentHtml}/>
            </div>
            <button onClick={onDownloadClick}>Скачать работу</button>
            <a ref={resultDownloadRef}/>
        </div>
    );
}