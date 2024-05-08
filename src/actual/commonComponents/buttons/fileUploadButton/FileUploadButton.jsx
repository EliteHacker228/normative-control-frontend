import DocumentUploadingDto from "../../../dto/documents/DocumentUploadingDto.js";
import DocumentsService from "../../../services/DocumentsService.js";
import {useNavigate} from "react-router-dom";
import css from './FileUploadButton.module.css';
import {useRef} from "react";

export default function FileUploadButton({setIsUploadigFailed, setUploadingFailureReason}) {
    const navigate = useNavigate();
    const fileInputRef = useRef();

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
        navigate(`/profile/student/progress?documentId=${documentUploadingResult.id}`);
    };

    const onFileUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            <button className={css.fileUploadButton} onClick={onFileUploadButtonClick}>Загрузить работу</button>
            <input type='file' onInput={onFileUploading} className={css.fileInput} ref={fileInputRef}/>
        </div>
    );
}