import css from './SearchVerifyingResults.module.css';
import {useEffect, useState} from "react";
import StudworkService from "../../../../services/studwork/StudworkService.js";
import VerifyingsList from "../../commonComponents/verifyingsList/VerifyingsList.jsx";
import panda_with_laptop from "../../panda_with_laptop.png";

export default function SearchVerifyingResults() {
    const [listOfDocuments, setListOfDocuments] = useState([]);

    useEffect(() => {
        (async () => {
            let documents = await StudworkService.getListOfDocuments();
            setListOfDocuments(documents);
        })();
    }, []);

    return (
        <div className={css.content}>
            <div className={css.verilogContainer}>
                <div>
                    <h1 className={css.content__header}>Список найденных работ</h1>
                    <VerifyingsList listOfAuthedVerifications={listOfDocuments}/>
                </div>
            </div>
            <img className={css.content__image} src={panda_with_laptop} alt={'Panda with it\'s laptop'}/>
        </div>
    );
}