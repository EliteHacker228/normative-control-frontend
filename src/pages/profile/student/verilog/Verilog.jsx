import css from "./Verilog.module.css";
import panda_with_laptop from "../../panda_with_laptop.png";
import {useEffect, useState} from "react";
import StudworkService from "../../../../services/studwork/StudworkService.js";
import VerifyingsList from "../../commonComponents/verifyingsList/VerifyingsList.jsx";

export default function Verilog() {
    const [listOfAuthedVerifications, setListOfAuthedVerification] = useState([]);

    useEffect(() => {
        (async function () {
            let authedVerifications = await StudworkService.getListOfAuthedVerifications();
            console.log(authedVerifications);
            setListOfAuthedVerification(authedVerifications);
        })();
    }, []);

    return (
        <div className={css.content}>
            <div className={css.verilogContainer}>
                <h1 className={css.content__header}>Список ваших проверок</h1>
                // TODO: Переделать verilog
                {/*<VerifyingsList listOfAuthedVerifications={listOfAuthedVerifications}/>*/}
            </div>
            <img className={css.content__image} src={panda_with_laptop} alt={'Panda with it\'s laptop'}/>
        </div>
    );
}