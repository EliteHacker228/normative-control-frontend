import css from "./VerifyingsList.module.css";
import {NavLink} from "react-router-dom";

export default function VerifyingsList({listOfAuthedVerifications}) {
    return (
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
    );
}