import {NavLink} from "react-router-dom";
import CommonAuthedElements from "./common/CommonAuthedElements.jsx";
import css from "../../Header.module.css";

export default function AdminHeaderElements() {
    return (
        <div className={css.header__elements}>
            <NavLink to={'/profile/admin/personal'} className={css.header__link}>Личная информация</NavLink>
            <NavLink to={'/profile/admin/academical/groups'} className={css.header__link}>Академические группы</NavLink>
            <NavLink to={'/profile/admin/accounts'} className={css.header__link}>Управление учетными записями</NavLink>
            <NavLink to={'/profile/admin/logs'} className={css.header__link}>Журнал событий</NavLink>
            <CommonAuthedElements/>
        </div>
    );
}