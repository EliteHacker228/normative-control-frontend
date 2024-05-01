import Header from "../../commonComponents/header/Header.jsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import DocumentsService from "../../services/DocumentsService.js";
import AccessForbiddenError from "../../errors/AccessForbiddenError.js";
import NotFoundError from "../../errors/NotFoundError.js";
import InternalServerError from "../../errors/InternalServerError.js";
import Student from "../../domain/users/Student.js";

export default function NormocontrollerProfileDocument () {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const [student, setStudent] = useState(new Student());

    const [documentId, setDocumentId] = useState(searchParams.get('documentId'));
    const [documentHtml, setDocumentHtml] = useState('');
    const [documentMistakes, setDocumentMistakes] = useState([]);

    const resultDownloadRef = useRef();

    useEffect(() => {
        (async () => {
            try {
                let documentHtmlWithMistakes = await DocumentsService.getDocumentHtmlWithMistakesList(documentId);
                setDocumentHtml(documentHtmlWithMistakes.documentHtml);
                setDocumentMistakes(documentHtmlWithMistakes.documentMistakes);
                let documentNode = await DocumentsService.getDocumentNode(documentId);
                let student = Student.fromPlainObject(documentNode.student);
                setStudent(student);
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
            <p>Результат проверки работ студента {`${student.lastName} ${student.firstName} ${student.middleName}`}</p>
            <button>Принять</button>
            <button>Отклонить</button>

            <form>
                <textarea placeholder='Комментарий к работе'/>
                <input type='submit' value='Сохранить комментарий'/>
            </form>

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