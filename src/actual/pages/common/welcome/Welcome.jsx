import AuthService from "../../../services/AuthService.js";
import Header from "../../../commonComponents/header/Header.jsx";
import DocumentsService from "../../../services/DocumentsService.js";
import {useNavigate} from "react-router-dom";
import DocumentUploadingDto from "../../../dto/documents/DocumentUploadingDto.js";
import {useState} from "react";
import FileUploadButton from "../../../commonComponents/buttons/FileUploadButton.jsx";
import Roles from "../../../domain/users/Roles.js";

export default function Welcome() {

    const [isUploadingFailed, setIsUploadigFailed] = useState(false);
    const [uploadingFailureReason, setUploadingFailureReason] = useState('');

    return (
        <div>
            <Header/>
            <h1>Welcome</h1>
            {
                !AuthService.isUserLocallyAuthenticated() &&
                <div>
                    <p>Для использования сервиса войдите зарегистрируйтесь</p>
                </div>
            }
            {
                AuthService.isUserLocallyAuthenticated() && AuthService.getLocalUserData().role === Roles.STUDENT &&
                <div>
                    <div>Вы можете загрузить файл на проверку</div>
                    <FileUploadButton setIsUploadigFailed={setIsUploadigFailed}
                                      setUploadingFailureReason={setUploadingFailureReason}/>
                    {isUploadingFailed && <p>{uploadingFailureReason}</p>}
                </div>

            }
            {
                AuthService.isUserLocallyAuthenticated() && AuthService.getLocalUserData().role === Roles.NORMOCONTROLLER &&
                <div>
                    <div>Вы можете просмотреть работы, отправленные на првоерку, в личном кабинете</div>
                </div>
            }
            {
                AuthService.isUserLocallyAuthenticated() && AuthService.getLocalUserData().role === Roles.ADMIN &&
                <div>
                    <div>Вы Пможете перейти к админ-панели в личный кабинет</div>
                </div>
            }
        </div>
    );
}
