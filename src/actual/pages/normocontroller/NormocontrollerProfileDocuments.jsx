import Header from "../../commonComponents/header/Header.jsx";
import {useEffect, useRef, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import DocumentsService from "../../services/DocumentsService.js";

export default function NormocontrollerProfileDocuments() {
    const navigate = useNavigate();

    const [documents, setDocuments] = useState([]);

    const resultDownloadRef = useRef();

    useEffect(() => {
        (
            async () => {
                let documents = await DocumentsService.getDocuments();
                setDocuments(documents);
            }
        )();
    }, []);

    const onDocumentsListCsvDownload = async () => {
        let documentsListText = await DocumentsService.getDocumentsListCsv();

        let objectUrl = "data:text/plain;charset=CP1251," + encodeCP1251(documentsListText);
        resultDownloadRef.current.href = objectUrl;
        resultDownloadRef.current.download = `Выгрузка нормоконтроля, ${new Date().toLocaleString(undefined, {weekday:"long"})}.csv`;
        resultDownloadRef.current.click();
        window.URL.revokeObjectURL(objectUrl);
    }

    let encodeCP1251 = function (string) {
        function encodeChar(c) {
            let isKyr = function (str) {
                return /[а-я]/i.test(str);
            }
            let cp1251 = 'ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬*®Ї°±Ііґµ¶·\
ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя';
            let p = isKyr(c) ? (cp1251.indexOf(c) + 128) : c.charCodeAt(0);
            let h = p.toString(16);
            if (h == 'a') {
                h = '0A';
            }
            return '%' + h;
        }

        let res = '';
        for (let     i = 0; i < string.length; i++) {
            res += encodeChar(string.charAt(i));
        }
        return res;
    }

    return (
        <div>
            <Header/>
            <div>NormocontrollerProfileDocuments</div>
            <button onClick={onDocumentsListCsvDownload}>Скачать список всех работ</button>
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
            <a ref={resultDownloadRef}/>
        </div>
    );
}