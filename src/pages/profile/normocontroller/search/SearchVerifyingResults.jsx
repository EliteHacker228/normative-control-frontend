import css from './SearchVerifyingResults.module.css';
import {useEffect, useState} from "react";
import StudworkService from "../../../../services/studwork/StudworkService.js";
import VerifyingsList from "../../commonComponents/verifyingsList/VerifyingsList.jsx";
import panda_with_laptop from "../../panda_with_laptop.png";
import {useSearchParams} from "react-router-dom";

export default function SearchVerifyingResults() {
    const [searchParameters, setSearchParameters] = useSearchParams();

    const [searchByEmailQuery, setSearchByEmailQuery] = useState('');

    const [listOfAuthedVerifications, setListOfAuthedVerification] = useState([]);

    useEffect(() => {
        let normocontrollersLastSearchQuery = localStorage.getItem('normocontrollersLastSearchQuery');
        if (normocontrollersLastSearchQuery) {
            setSearchByEmailQuery(normocontrollersLastSearchQuery);
            doSearch(normocontrollersLastSearchQuery);
        }
    }, []);

    const onSearchQueryInput = (e) => {
        setSearchByEmailQuery(e.target.value);
    };

    const onSearch = async () => {
        doSearch(searchByEmailQuery);
    };

    const doSearch = async (searchQuery) => {
        setSearchParameters({query: searchQuery});
        localStorage.setItem('normocontrollersLastSearchQuery', searchQuery);
        let authedVerifications = await StudworkService.getListOfVerificationsByStudentsEmail(searchQuery);
        console.log(authedVerifications);
        setListOfAuthedVerification(authedVerifications);
    };

    return (
        <div className={css.content}>
            <div>
                <input type={'text'} onInput={onSearchQueryInput} value={searchByEmailQuery}
                       placeholder={'Введите e-mail студента'}/>
                <button onClick={onSearch}>Найти</button>
                <div className={css.verilogContainer}>
                    <h1 className={css.content__header}>Список найденных работ</h1>
                    <VerifyingsList listOfAuthedVerifications={listOfAuthedVerifications}/>
                </div>
            </div>
            <img className={css.content__image} src={panda_with_laptop} alt={'Panda with it\'s laptop'}/>
        </div>
    );
}