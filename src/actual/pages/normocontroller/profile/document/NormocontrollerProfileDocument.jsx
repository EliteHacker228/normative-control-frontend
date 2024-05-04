import Header from "../../../../commonComponents/header/Header.jsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import DocumentsService from "../../../../services/DocumentsService.js";
import AccessForbiddenError from "../../../../errors/AccessForbiddenError.js";
import NotFoundError from "../../../../errors/NotFoundError.js";
import InternalServerError from "../../../../errors/InternalServerError.js";
import Student from "../../../../domain/users/Student.js";
import Verdicts from "../../../../domain/documents/Verdicts.js";

export default function NormocontrollerProfileDocument() {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const [student, setStudent] = useState(new Student());

    const [documentId, setDocumentId] = useState(searchParams.get('documentId'));
    const [documentHtml, setDocumentHtml] = useState('');
    const [documentMistakes, setDocumentMistakes] = useState([]);

    const [documentComment, setDocumentComment] = useState('');
    const [documentVerdict, setDocumentVerdict] = useState(Verdicts.NOT_CHECKED);

    const resultDownloadRef = useRef();

    useEffect(() => {
        (async () => {
            try {
                await getDocumentData();
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

    const getDocumentData = async () => {
        let documentHtmlWithMistakes = await DocumentsService.getDocumentHtmlWithMistakesList(documentId);
        setDocumentHtml(documentHtmlWithMistakes.documentHtml);
        setDocumentMistakes(documentHtmlWithMistakes.documentMistakes);
        let documentNode = await DocumentsService.getDocumentNode(documentId);
        let student = Student.fromPlainObject(documentNode.student);
        setStudent(student);
        setDocumentComment(documentNode.comment ?? '');
        setDocumentVerdict(documentNode.documentVerdict);
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

    return (
        <div>
            <Header/>
            <p>Результат проверки работ студента {`${student.lastName} ${student.firstName} ${student.middleName}`}</p>
            {documentVerdict === Verdicts.NOT_CHECKED && <p>Вы можете принять или отклонить данную работу</p>}
            {documentVerdict === Verdicts.NOT_CHECKED && <button onClick={onAcceptDocument}>Принять</button>}
            {documentVerdict === Verdicts.NOT_CHECKED && <button onClick={onRejectDocument}>Отклонить</button>}
            {documentVerdict === Verdicts.NOT_CHECKED &&
                <textarea placeholder='Комментарий к работе' value={documentComment} onInput={onDocumentCommentInput}/>}

            {documentVerdict !== Verdicts.NOT_CHECKED && <p>Данная работа имеет статус {documentVerdict}</p>}
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