import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import DocumentsService from "../../../services/DocumentsService.js";
import AccessForbiddenError from "../../../errors/AccessForbiddenError.js";
import NotFoundError from "../../../errors/NotFoundError.js";
import InternalServerError from "../../../errors/InternalServerError.js";

export default function Result() {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const [documentId, setDocumentId] = useState(searchParams.get('documentId'));
    const [documentHtml, setDocumentHtml] = useState('');
    const [documentMistakes, setDocumentMistakes] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                let documentHtmlWithMistakes = await DocumentsService.getDocumentHtmlWithMistakesList(documentId);
                setDocumentHtml(documentHtmlWithMistakes.documentHtml);
                setDocumentMistakes(documentHtmlWithMistakes.documentMistakes);
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

    const onDownloadClick = () => {
        DocumentsService.downloadDocumentDocx(documentId);
    }

    return (
        <div>
            <p>Результат проверки вашей работы</p>
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
        </div>
    );
}