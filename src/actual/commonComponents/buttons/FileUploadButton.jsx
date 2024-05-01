import DocumentUploadingDto from "../../dto/documents/DocumentUploadingDto.js";
import DocumentsService from "../../services/DocumentsService.js";
import {useNavigate} from "react-router-dom";

export default function FileUploadButton({setIsUploadigFailed, setUploadingFailureReason}) {
    const navigate = useNavigate();

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

    return <input type='file' onInput={onFileUploading}/>;
}