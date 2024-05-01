import {useEffect, useState} from "react";
import User from "../../../domain/users/User.js";
import AccountsService from "../../../services/AccountsService.js";
import AuthService from "../../../services/AuthService.js";
import Header from "../../../commonComponents/header/Header.jsx";
import DocumentsService from "../../../services/DocumentsService.js";
import {NavLink} from "react-router-dom";

export default function StudentProfileDocuments() {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        (async () => {
                let documents = await DocumentsService.getDocuments();
                setDocuments(documents);
            }
        )();
    }, []);

    return (
        <div>
            <Header/>
            <div>
                <div>
                    {documents.map((document, index) => {
                        return (
                            <div key={index} id={document.id}>
                                <NavLink to={`/result?documentId=${document.id}`}>{document.fileName}</NavLink>
                                <p>{document.verificationDate}</p>
                                <p>{document.documentVerdict}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}