import DocumentsService from "../../services/DocumentsService.js";
import Cp1251Encoder from "../Encoders/Cp1251Encoder.js";

export default class CsvDocumentsListDownloader {
    static async download(resultDownloadRef){
        let documentsListText = await DocumentsService.getDocumentsListCsv();

        let objectUrl = "data:text/plain;charset=CP1251," + Cp1251Encoder.encodeString(documentsListText);
        resultDownloadRef.current.href = objectUrl;
        resultDownloadRef.current.download = `Выгрузка нормоконтроля, ${new Date().toLocaleString(undefined, {weekday: "long"})}.csv`;
        resultDownloadRef.current.click();
        window.URL.revokeObjectURL(objectUrl);
    }
}