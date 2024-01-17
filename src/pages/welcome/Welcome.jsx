import css from './Welcome.module.css';
import welcome_panda_img from './welcome_panda.png';
import Header from "../../components/header/Header.jsx";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Welcome() {
    let fileInputRef = useRef(null);
    const navigate = useNavigate();
    let onUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    const fileErrors = {'fileIsTooBig': 0, 'wrongFileExtension': 1};
    const [fileError, setFileError] = useState(null);

    let onFileUpload = (e) => {
        e.preventDefault();
        let file = e.target.files[0];
        handleFileUploading(file);
    };

    let handleFileUploading = (file) => {
        const _20MB = 20_971_520;

        let fileSize = file.size;
        let fileExtension = file.name.split('.').at(-1);

        if (fileSize > _20MB) {
            setFileError(fileErrors.fileIsTooBig);
            return;
        }
        if (fileExtension !== 'docx') {
            setFileError(fileErrors.wrongFileExtension);
            return;
        }

        setFileError(null);
        navigate('/uploading');
    };

    const [isDragActive, setIsDragActive] = useState(false);

    const onDragEnter = (e) => {
        e.preventDefault();
        setIsDragActive(true);
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        setIsDragActive(false);
    };

    const onDragOver = (e) => {
        e.preventDefault();
        setIsDragActive(true);
    };

    const onDrop = (e) => {
        e.preventDefault();
        setIsDragActive(false);
        let file = e.dataTransfer.files[0];
        handleFileUploading(file);
    };

    return (
        <div>
            <Header/>
            <div className={css.content}>
                <div className={css.content__main}>
                    <h1 className={css.content__header}>Проверка вашей выпускной квалификационной работы
                        на наличие ошибок оформления документа</h1>
                    <p className={css.content__text}>Сервис поддерживает файлы формата <b>docx</b> объемом
                        до <b>20МБ.</b></p>
                    <div className={css.content__upload}
                         onDragEnter={onDragEnter}
                         onDragLeave={onDragLeave}
                         onDragOver={onDragOver}
                         onDrop={onDrop}>
                        {isDragActive ?
                            <div className={css.upload__dragndrop}>
                                <p className={`${css.content__hint} ${css.content__hint__dragndrop}`}>Отпустите файл, чтобы начать загрузку</p>
                            </div>
                            :
                            <div className={css.upload__controls}>
                                <button
                                    className={`${css.button} ${css.button_upload} ${css.button_red} ${css.button_shadow}`}
                                    onClick={onUploadButtonClick}>ВЫБРАТЬ ФАЙЛ
                                </button>
                                <p className={css.content__hint}>или перетащите файл сюда</p>
                            </div>
                        }
                    </div>
                    {fileError === fileErrors.wrongFileExtension &&
                        <p className={`${css.content__hint} ${css.content__hint__error}`}>Неподдерживаемый формат.
                            Пожалуйста, загрузите <span className={css.bold}>.docx</span> файл</p>
                    }
                    {fileError === fileErrors.fileIsTooBig &&
                        <p className={`${css.content__hint} ${css.content__hint__error}`}>Слишком большой файл.
                            Пожалуйста,
                            загрузите размером <span className={css.bold}>до 20 МБ</span></p>
                    }
                    <input type='file' id='upload' ref={fileInputRef} onChange={onFileUpload} style={
                        {display: 'none'}
                    }/>
                </div>
                <img className={css.content__image} src={welcome_panda_img} alt={'Panda is welcoming user'}/>
            </div>
        </div>
    );
}