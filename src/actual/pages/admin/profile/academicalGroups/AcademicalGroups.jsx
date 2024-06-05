import Header from "../../../../commonComponents/header/Header.jsx";
import Footer from "../../../../commonComponents/footer/Footer.jsx";
import {useEffect, useState} from "react";
import AcademicalGroupsService from "../../../../services/AcademicalGroupsService.js";
import css from "./AcademicalGroups.module.css";
import searchIco from './static/search_ico.svg';
import whiteDownloadIco from './static/downloadIcoWhite.svg';


export default function AcademicalGroups() {
    const [academicalGroups, setAcademicalGroups] = useState([]);
    const [filteredAcademicalGroups, setFilteredAcademicalGroups] = useState([]);
    const [searchRequest, setSearchRequest] = useState('');

    useEffect(() => {
        (async () => {
            let academicalGroups = await AcademicalGroupsService.getAcademicalGroups();
            setAcademicalGroups(academicalGroups);
            setFilteredAcademicalGroups(academicalGroups);
        })();
    }, []);

    const onSearchInput = (e) => {
        let searchRequest = e.target.value;
        setSearchRequest(searchRequest);
        setFilteredAcademicalGroups(academicalGroups.filter(academicalGroup => academicalGroup.name.includes(searchRequest)));
    };

    return (
        <div>
            <Header/>
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
                        {filteredAcademicalGroups.map((academicalGroup, index) => {
                                return <div key={index} className={css.searchResult}>
                                    <div className={css.searchResult__text}>{academicalGroup.name}</div>
                                    <div className={css.searchResult__controls}>
                                        <button
                                            className={`${css.search__button} ${css.search__button_open}`}>Открыть
                                        </button>
                                        <button
                                            className={`${css.search__button} ${css.search__button_edit}`}>Изменить
                                        </button>
                                        <button
                                            className={`${css.search__button} ${css.search__button_remove}`}>Удалить
                                        </button>
                                    </div>
                                </div>;
                            }
                        )}
                    </div>
                    <div className={css.search__controls}>
                        <button className={`${css.search__button} ${css.search__button_add}`}>Добавить</button>
                        <div className={`${css.search__button} ${css.search__button_download}`}>
                            <p>Скачать список всех работ</p>
                            <img className={css.downloadImage} src={whiteDownloadIco}
                                 alt={'Кнопка скачивания списка работ'} title={'Скачать'}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}