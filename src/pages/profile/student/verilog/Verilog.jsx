import css from "./Verilog.module.css";
import {NavLink} from "react-router-dom";
import panda_with_laptop from "../../panda_with_laptop.png";
import {useEffect, useState} from "react";
import StudworkService from "../../../../services/studwork/StudworkService.js";

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
            <div className={css.verilog}>
                <h1 className={css.content__header}>Список ваших проверок</h1>
                <div className={css.verilog__list}>
                    {listOfAuthedVerifications.length === 0 &&
                        <h1 className={css.verilog__emptyHeader}>Здесь пока ничего нет</h1>}
                    {listOfAuthedVerifications.reverse().map((element) => {
                        return (
                            <div className={css.verilog__card}>
                                <NavLink to={`/result?resultId=${element.id}`}
                                         className={css.verilog__link}>Просмотреть</NavLink>
                                <p className={css.verilod__dateText}>Дата проверки:
                                    {' ' + new Date(element.timestamp).toLocaleTimeString('ru-RU') + ' ' + new Date(element.timestamp).toLocaleDateString('ru-RU')}</p>
                                <p className={css.verilog__text}>ID: {element.id}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <img className={css.content__image} src={panda_with_laptop} alt={'Panda with it\'s laptop'}/>
        </div>
    );
}