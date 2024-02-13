import css from './SearchVerifyingResults.module.css';
import {useEffect, useState} from "react";
import StudworkService from "../../../../services/studwork/StudworkService.js";
import VerifyingsList from "../../commonComponents/verifyingsList/VerifyingsList.jsx";
import panda_with_laptop from "../../panda_with_laptop.png";

export default function SearchVerifyingResults() {
    const [searchByEmailQuery, setSearchByEmailQuery] = useState('');
    const onSearchQueryInput = (e) => {
        setSearchByEmailQuery(e.target.value);
    };

    const [listOfAuthedVerifications, setListOfAuthedVerification] = useState([]);
    const onSearch = async () => {
        let authedVerifications = await StudworkService.getListOfVerificationsByStudentsEmail(searchByEmailQuery);
        console.log(authedVerifications);
        setListOfAuthedVerification(authedVerifications);
    };

    return (
        <div className={css.content}>
            <div>
                <input type={'text'} onInput={onSearchQueryInput} placeholder={'Введите e-mail студента'}/>
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