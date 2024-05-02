import {NavLink, useNavigate} from "react-router-dom";
import AuthService from "../../../../../services/AuthService.js";
import css from "../../../Header.module.css";

export default function CommonAuthedElements() {
    const navigate = useNavigate();

    const onLogout = () => {
        try {
            AuthService.logoutUser();
        } catch (error) {
            console.log(error);
        }
        navigate('/');
    }

    return (
        <div className={css.header__elements}>
            <NavLink to={'/'} onClick={onLogout} className={css.header__link}>Выход</NavLink>
        </div>
    );
}