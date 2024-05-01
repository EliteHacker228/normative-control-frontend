import {useEffect, useState} from "react";
import User from "../../../domain/users/User.js";
import AccountsService from "../../../services/AccountsService.js";
import AuthService from "../../../services/AuthService.js";
import Header from "../../../commonComponents/header/Header.jsx";
import DocumentsService from "../../../services/DocumentsService.js";
import {NavLink} from "react-router-dom";
import FileUploadButton from "../../../commonComponents/buttons/FileUploadButton.jsx";

export default function StudentProfileDocuments() {
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
                <FileUploadButton setIsUploadigFailed={setIsUploadigFailed}
                                  setUploadingFailureReason={setUploadingFailureReason}/>
                {isUploadingFailed && <p>{uploadingFailureReason}</p>}
            </div>
        </div>
    );
}