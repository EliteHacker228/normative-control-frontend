import {NavLink} from "react-router-dom";
import css from "./Header.module.css";
import normocontrolLogo from './static/normocontrol_logo.svg';
import AuthService from "../../services/AuthService.js";
import StudentHeaderElements from "./components/authed/StudentHeaderElements.jsx";
import NormocontrollerHeaderElements from "./components/authed/NormocontrollerHeaderElements.jsx";
import AdminHeaderElements from "./components/authed/AdminHeaderElements.jsx";
import UnauthedUserHeaderElements from "./components/unauthed/UnauthedUserHeaderElements.jsx";
import Roles from "../../domain/users/Roles.js";
import CommonElements from "./components/common/CommonElements.jsx";

export default function Header() {
    return (
        <div className={css.header}>
            <div className={css.header__content}>
                <NavLink to='/' className={`${css.header__logo} ${css.header__link}`}>
                    <img src={normocontrolLogo} alt={'Логотип сервиса нормоконтроля'}/>
                    <p>Сервис автоматического нормоконтроля</p>
                </NavLink>
                <div className={css.header__elements}>
                    <CommonElements/>
                    {!AuthService.isUserLocallyAuthenticated() && <UnauthedUserHeaderElements/>}
                    {AuthService.isUserLocallyAuthenticated() && AuthService.getLocalUserData().role === Roles.STUDENT &&
                        <StudentHeaderElements/>}
                    {AuthService.isUserLocallyAuthenticated() && AuthService.getLocalUserData().role === Roles.NORMOCONTROLLER &&
                        <NormocontrollerHeaderElements/>}
                    {AuthService.isUserLocallyAuthenticated() && AuthService.getLocalUserData().role === Roles.ADMIN &&
                        <AdminHeaderElements/>}
                </div>
            </div>
        </div>
    );
}