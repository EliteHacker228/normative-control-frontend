import AuthService from "../../../services/AuthService.js";
import Header from "../../../commonComponents/header/Header.jsx";
import DocumentsService from "../../../services/DocumentsService.js";
import {useNavigate} from "react-router-dom";
import DocumentUploadingDto from "../../../dto/documents/DocumentUploadingDto.js";
import {useState} from "react";
import FileUploadButton from "../../../commonComponents/buttons/FileUploadButton.jsx";

export default function Welcome() {

    const [isUploadingFailed, setIsUploadigFailed] = useState(false);
    const [uploadingFailureReason, setUploadingFailureReason] = useState('');

    return (
        <div>
            <Header/>
            <h1>Welcome</h1>
            {
                AuthService.isUserLocallyAuthenticated()
                    ?
                    <div>
                        <div>Вы можете загрузить файл на проверку</div>
                        <FileUploadButton setIsUploadigFailed={setIsUploadigFailed}
                                          setUploadingFailureReason={setUploadingFailureReason}/>
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
