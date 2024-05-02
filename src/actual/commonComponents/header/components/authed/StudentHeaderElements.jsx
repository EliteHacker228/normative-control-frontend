import {NavLink} from "react-router-dom";
import CommonAuthedElements from "./common/CommonAuthedElements.jsx";
import css from "../../Header.module.css";

export default function StudentHeaderElements() {
    return (
        <div className={css.header__elements}>
            <NavLink to={'/profile/student/documents'} className={css.header__link}>Работы</NavLink>
            <NavLink to={'/profile/student/personal'} className={css.header__link}>Личная информация</NavLink>
            <CommonAuthedElements/>
        </div>
    );
}