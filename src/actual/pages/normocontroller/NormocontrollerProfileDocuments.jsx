import Header from "../../commonComponents/header/Header.jsx";
import {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import DocumentsService from "../../services/DocumentsService.js";

export default function NormocontrollerProfileDocuments() {
    const navigate = useNavigate();

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        (
            async () => {
                let documents = await DocumentsService.getDocuments();
                setDocuments(documents);
            }
        )();
    }, []);

    return (
        <div>
            <Header/>
            <div>NormocontrollerProfileDocuments</div>
            <button>Скачать список всех работ</button>
            <div>
                {documents.map((document, index) => {
                    return (
                        <div key={index} id={document.id}>
                            <NavLink
                                to={`/profile/normocontroller/document?documentId=${document.id}`}>{document.fileName}</NavLink>
                            <p>{document.verificationDate}</p>
                            <p>{document.documentVerdict}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}