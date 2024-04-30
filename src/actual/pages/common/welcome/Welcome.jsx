import AuthService from "../../../services/AuthService.js";
import Header from "../../../commonComponents/header/Header.jsx";
import DocumentsService from "../../../services/DocumentsService.js";
import {useNavigate} from "react-router-dom";
import DocumentUploadingDto from "../../../dto/documents/DocumentUploadingDto.js";
import {useState} from "react";

export default function Welcome() {

    const navigate = useNavigate();

    const [isUploadingFailed, setIsUploadigFailed] = useState(false);
    const [uploadingFailureReason, setUploadingFailureReason] = useState('');

    const onFileUploading = async (e) => {
        let document = e.target.files[0];
        let documentUploadingDto = new DocumentUploadingDto(document.name, document);
        let documentUploadingResult;
        try {
            setIsUploadigFailed(false);
            setUploadingFailureReason('');

            documentUploadingResult = await DocumentsService.sendDocumentToVerification(documentUploadingDto);
        } catch (error) {
            setIsUploadigFailed(true);
            setUploadingFailureReason(error.message);
        }
        navigate(`/progress?documentId=${documentUploadingResult.id}`);
    };

    return (
        <div>
            <Header/>
            <h1>Welcome</h1>
            {
                AuthService.isUserLocallyAuthenticated()
                    ?
                    <div>
                        <div>Вы можете загрузить файл на проверку</div>
                        <input type='file' onInput={onFileUploading}/>
                        {isUploadingFailed && <p>{uploadingFailureReason}</p>}
                    </div>
                    :
                    <div>
                        <p>Для использования сервиса войдите зарегистрируйтесь</p>
                    </div>
            }
        </div>
    );
}
