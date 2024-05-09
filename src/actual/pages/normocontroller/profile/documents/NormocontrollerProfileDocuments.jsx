import Header from "../../../../commonComponents/header/Header.jsx";
import css from './NormocontrollerProfileDocuments.module.css';
import {useEffect, useRef, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import DocumentsService from "../../../../services/DocumentsService.js";
import DocumentVerdictTranslators from "../../../../utils/DocumentVerdictTranslators/DocumentVerdictTranslators.js";
import searchIco from './static/searchIco.svg';
import downloadIco from "../../../student/profile/documents/static/download_ico.svg";
import whiteDownloadIco from './static/downloadIcoWhite.svg';
import Verdicts from "../../../../domain/documents/Verdicts.js";
import AcademicalGroupsService from "../../../../services/AcademicalGroupsService.js";
import AuthService from "../../../../services/AuthService.js";
import Footer from "../../../../commonComponents/footer/Footer.jsx";

export default function NormocontrollerProfileDocuments() {
    const navigate = useNavigate();

    const [documents, setDocuments] = useState([]);
    const [filteredDocuments, setFilteredDocuments] = useState([]);

    const [searchInput, setSearchInput] = useState('');

    const [groups, setGroups] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState(new Set([]));

    const verdicts = [Verdicts.NOT_CHECKED, Verdicts.ACCEPTED, Verdicts.REJECTED];
    const [selectedVerdicts, setSelectedVerdicts] = useState(new Set([]));

    const resultDownloadRef = useRef();

    useEffect(() => {
        getPageData();
    }, []);

    const getPageData = async () => {
        let documents = await DocumentsService.getActualDocuments();
        setDocuments(documents);
        setFilteredDocuments(documents);
        let groups = await AcademicalGroupsService.getAcademicalGroups();
        console.log('groups');
        console.log(groups);
        groups = groups.filter(group => group.normocontroller.id === AuthService.getLocalUserData().id);
        setGroups(groups);
    }

    const onDocumentsListCsvDownload = async () => {
        let documentsListText = await DocumentsService.getDocumentsListCsv();

        let objectUrl = "data:text/plain;charset=CP1251," + encodeCP1251(documentsListText);
        resultDownloadRef.current.href = objectUrl;
        resultDownloadRef.current.download = `Выгрузка нормоконтроля, ${new Date().toLocaleString(undefined, {weekday: "long"})}.csv`;
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
        for (let i = 0; i < string.length; i++) {
            res += encodeChar(string.charAt(i));
        }
        return res;
    }

    const onDownloadClick = async (e) => {
        e.preventDefault();
        let documentId = e.target.parentElement.parentElement.parentElement.id;
        let documentBlobResult = await DocumentsService.getDocumentDocx(documentId);
        let objectUrl = window.URL.createObjectURL(documentBlobResult.documentBlob);
        resultDownloadRef.current.href = objectUrl;
        resultDownloadRef.current.download = documentBlobResult.documentName;
        resultDownloadRef.current.click();
        window.URL.revokeObjectURL(objectUrl);
    };

    const onSearchInput = (e) => {
        let newSearchInput = e.target.value;
        setSearchInput(newSearchInput);
        updateFilteredDocuments(newSearchInput, selectedVerdicts, selectedGroups);
    };

    const onGroupSelect = (e) => {
        let groupId = e.target.id;
        let updatedGroups = selectedGroups;
        if (selectedGroups.has(groupId)) {
            selectedGroups.delete(groupId);
            setSelectedGroups(new Set(selectedGroups));
        } else {
            selectedGroups.add(groupId);
            setSelectedGroups(new Set(updatedGroups));
        }

        updateFilteredDocuments(searchInput, selectedVerdicts, updatedGroups);
    };

    const onVerdictSelect = (e) => {
        let verdict = e.target.id;
        let updatedVerdicts = selectedVerdicts;
        if (selectedVerdicts.has(verdict)) {
            updatedVerdicts.delete(verdict);
            setSelectedVerdicts(new Set(updatedVerdicts));
        } else {
            updatedVerdicts.add(verdict);
            setSelectedVerdicts(new Set(updatedVerdicts));
        }

        updateFilteredDocuments(searchInput, updatedVerdicts, selectedGroups);
    };

    const updateFilteredDocuments = (localSearchInput, localSelectedVerdicts, localSelectedGroups) => {
        let filteredDocuments = documents.filter(document => document.student.fullName.includes(localSearchInput));
        if (localSelectedVerdicts.size > 0) {
            filteredDocuments = filteredDocuments.filter(document => localSelectedVerdicts.has(document.documentVerdict));
        }
        if (localSelectedGroups.size > 0) {
            filteredDocuments = filteredDocuments.filter(document => localSelectedGroups.has(document.student.academicGroup.name));
        }
        setFilteredDocuments(filteredDocuments);
    };

    return (
        <div>
            <Header/>
            <div className={css.studentDocuments}>
                <div className={css.controls}>
                    <div className={css.filters}>
                        <div className={css.search}>
                            <h1 className={css.search__header}>Поиск</h1>
                            <div className={css.searchField}>
                                <input className={css.searchField__input} type='text'
                                       placeholder={'Введите ФИО обучающегося'} value={searchInput}
                                       onInput={onSearchInput}/>
                                {/*<img className={css.searchField__button} src={searchIco}/>*/}
                                <input className={css.searchField__button} type='submit' value=''/>
                            </div>
                        </div>
                        <h1 className={css.filters__header}>Фильтры подбора</h1>
                        <div className={css.filtersGroup}>
                            <h1 className={css.filtersGroup__header}>Группы</h1>
                            {groups.map((group, index) => {
                                return (
                                    <div className={css.filterCheckbox} key={index}>
                                        <input className={css.filterCheckbox__input} id={group.name}
                                               type='checkbox' checked={selectedGroups.has(group.name)}
                                               onChange={onGroupSelect}/>
                                        <label className={css.filterCheckbox__label}
                                               htmlFor={group.name}>{group.name}</label>
                                    </div>
                                );
                            })}

                            {/*<div className={css.filterCheckbox}>*/}
                            {/*    <input className={css.filterCheckbox__input} type='checkbox'/>*/}
                            {/*    <label className={css.filterCheckbox__label}>РИ-4000017</label>*/}
                            {/*</div>*/}
                            {/*<div className={css.filterCheckbox}>*/}
                            {/*    <input className={css.filterCheckbox__input} type='checkbox'/>*/}
                            {/*    <label className={css.filterCheckbox__label}>РИ-4000018</label>*/}
                            {/*</div>*/}
                        </div>
                        <div className={css.filtersGroup}>
                            <h1 className={css.filtersGroup__header}>Статусы</h1>
                            {verdicts.map((verdict, index) => {
                                return (
                                    <div className={css.filterCheckbox} key={index}>
                                        <input className={css.filterCheckbox__input} id={verdict} type='checkbox'
                                               checked={selectedVerdicts.has(verdict)} onChange={onVerdictSelect}/>
                                        <label className={css.filterCheckbox__label}
                                               htmlFor={verdict}>{DocumentVerdictTranslators.getDocumentVerdictTitle(verdict)}</label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={css.downloadCsv}>
                        <div className={css.downloadCsvButton} onClick={onDocumentsListCsvDownload}>
                            <p>Скачать
                                список
                                всех работ
                            </p>
                            <img src={whiteDownloadIco} alt={'Скачать'}/>
                        </div>
                        <a ref={resultDownloadRef}/>
                    </div>
                </div>
                <div className={css.documents}>
                    <h1 className={css.documents__header}>Найденные работы</h1>
                    {filteredDocuments.length === 0 &&
                        <p className={css.documents__placeholder}>Работы не найдены</p>}
                    {filteredDocuments.sort((a, b) => new Date(b.verificationDate).getTime() - new Date(a.verificationDate).getTime())
                        .map((document, index) => {
                            return (
                                <NavLink to={`/profile/normocontroller/document?documentId=${document.id}`} key={index}
                                         id={document.id}
                                         className={css.documentNode} title={'Просмотреть результат проверки работы'}>

                                    <div className={css.documentNode__header}>
                                        <div className={css.documentNode__description}>{document.student.fullName}</div>
                                        <div
                                            className={css.documentNode__description}>{new Date(document.verificationDate).toLocaleString("ru-RU", {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}</div>
                                    </div>

                                    <div className={css.documentNode__buttons}>
                                        <div className={css.documentNode__status}
                                             title={DocumentVerdictTranslators.getDocumentVerdictTitle(document.documentVerdict)}>
                                            <img
                                                src={DocumentVerdictTranslators.getDocumentVerdictIco(document.documentVerdict)}
                                                alt={'Статус работы'}/>
                                        </div>
                                    </div>
                                </NavLink>
                            );
                        })}
                </div>
            </div>
            <Footer/>
        </div>
    );
}