import Header from "../../../../commonComponents/header/Header.jsx";
import Footer from "../../../../commonComponents/footer/Footer.jsx";
import {useEffect, useRef, useState} from "react";
import AcademicalGroupsService from "../../../../services/AcademicalGroupsService.js";
import css from "./AcademicalGroups.module.css";
import searchIco from './static/search_ico.svg';
import whiteDownloadIco from './static/downloadIcoWhite.svg';
import CsvDocumentsListDownloader from "../../../../utils/Downloaders/CsvDocumentsListDowloader.js";
import RemoveAcademicalGroupPopUp from "./components/popups/removeAcademicalGroupPopUp/RemoveAcademicalGroupPopUp.jsx";
import AddAcademicalGroupPopUp from "./components/popups/addAcademicalGroupPopUp/AddAcademicalGroupPopUp.jsx";
import {EditAcademicalGroupPopUp} from "./components/popups/editAcademicalGroupPopUp/EditAcademicalGroupPopUp.jsx";


export default function AcademicalGroups() {
    const [academicalGroups, setAcademicalGroups] = useState([]);
    const [filteredAcademicalGroups, setFilteredAcademicalGroups] = useState([]);
    const [searchRequest, setSearchRequest] = useState('');

    const [academicalGroupOnDeletion, setAcademicalGroupOnDeletion] = useState({});
    const [academicalGroupOnEdition, setAcademicalGroupOnEdition] = useState({});

    const [isDeleteGroupPopUpShowed, setIsDeleteGroupPopUpShowed] = useState(false);
    const [isAddGroupPopUpShowed, setIsAddGroupPopUpShowed] = useState(false);
    const [isEditGroupPopUpShowed, setIsEditGroupPopUpShowed] = useState(false);

    const resultDownloadRef = useRef();

    useEffect(() => {
        updateGroups();

        let intervalId = setInterval(updateGroups, 2000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setFilteredAcademicalGroups(academicalGroups.filter(academicalGroup => academicalGroup.name.includes(searchRequest)));
    }, [searchRequest, academicalGroups]);

    const updateGroups = async () => {
        let academicalGroups = await AcademicalGroupsService.getAcademicalGroups();
        setAcademicalGroups(academicalGroups);
    };

    const onSearchInput = (e) => {
        let searchRequest = e.target.value;
        setSearchRequest(searchRequest);
    };

    const onDocumentsListCsvDownload = () => {
        CsvDocumentsListDownloader.download(resultDownloadRef);
    }

    const openAddGroupPopUp = () => {
        setIsAddGroupPopUpShowed(true);
    };

    const closeAddGroupPopUp = () => {
        setIsAddGroupPopUpShowed(false);
    };

    const openDeleteGroupPopUp = (e) => {
        setIsDeleteGroupPopUpShowed(true);
        let academicalGroupOnDeletionIndex = e.target.parentNode.parentNode.id;
        let academicalGroupOnDeletion = filteredAcademicalGroups[academicalGroupOnDeletionIndex];
        setAcademicalGroupOnDeletion(academicalGroupOnDeletion);
    };

    const closeDeleteGroupPopUp = () => {
        setIsDeleteGroupPopUpShowed(false);
        setAcademicalGroupOnDeletion({});
    };

    const openEditGroupPopUp = (e) => {
        setIsEditGroupPopUpShowed(true);
        let academicalGroupOnEditionIndex = e.target.parentNode.parentNode.id;
        let academicalGroupOnEdition = filteredAcademicalGroups[academicalGroupOnEditionIndex];
        setAcademicalGroupOnEdition(academicalGroupOnEdition);
    };

    const closeEditGroupPopUp = () => {
        setIsEditGroupPopUpShowed(false);
        setAcademicalGroupOnEdition({});
    };

    return (
        <div>
            <Header/>
            {isDeleteGroupPopUpShowed &&
                <RemoveAcademicalGroupPopUp closePopUp={closeDeleteGroupPopUp}
                                            academicalGroup={academicalGroupOnDeletion}
                                            updateGroups={updateGroups}/>}
            {isAddGroupPopUpShowed &&
                <AddAcademicalGroupPopUp closePopUp={closeAddGroupPopUp} updateGroups={updateGroups}/>}
            {isEditGroupPopUpShowed &&
                <EditAcademicalGroupPopUp closePopUp={closeEditGroupPopUp} academicalGroup={academicalGroupOnEdition}
                                          updateGroups={updateGroups}/>}
            <div className={css.academicalGroups}>
                <h1 className={css.academicalGroups__header}>Академические группы</h1>
                <div className={css.search}>
                    <div className={css.searchHeader}>
                        <img className={css.searchHeader__ico} src={searchIco} alt='Иконка поиска' title='Поиск'/>
                        <h1 className={css.searchHeader__text}>Поиск</h1>
                    </div>
                    <div className={css.searchInput}>
                        <input className={css.searchInput__field} type='text' placeholder='Группа' value={searchRequest}
                               onChange={onSearchInput}/>
                    </div>
                    <div className={css.searchResults}>
                        {filteredAcademicalGroups.length === 0 &&
                            <p className={css.searchResults__placeholder}>Группы не найдены</p>}
                        {filteredAcademicalGroups.map((academicalGroup, index) => {
                                return <div id={index} key={index} className={css.searchResult}>
                                    <div className={css.searchResult__text}>{academicalGroup.name}</div>
                                    <div className={css.searchResult__controls}>
                                        <button
                                            className={`${css.search__button} ${css.search__button_open}`}>Открыть
                                        </button>
                                        <button
                                            className={`${css.search__button} ${css.search__button_edit}`}
                                            onClick={openEditGroupPopUp}>Изменить
                                        </button>
                                        <button
                                            className={`${css.search__button} ${css.search__button_remove}`}
                                            onClick={openDeleteGroupPopUp}>Удалить
                                        </button>
                                    </div>
                                </div>;
                            }
                        )}
                    </div>
                    <div className={css.search__controls}>
                        <button className={`${css.search__button} ${css.search__button_add}`}
                                onClick={openAddGroupPopUp}>Добавить
                        </button>
                        <div className={`${css.search__button} ${css.search__button_download}`}
                             onClick={onDocumentsListCsvDownload}>
                            <p>Скачать список всех работ</p>
                            <img className={css.downloadImage} src={whiteDownloadIco}
                                 alt={'Кнопка скачивания списка работ'} title={'Скачать'}/>
                        </div>
                        <a ref={resultDownloadRef}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}