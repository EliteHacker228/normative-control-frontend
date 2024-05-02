import {NavLink} from "react-router-dom";
import css from "../../Header.module.css";


export default function UnauthedUserHeaderElements() {
    return (
        <div className={css.header__elements}>
            <NavLink to='/login' className={css.header__link}>Войти</NavLink>
        </div>
    );
}