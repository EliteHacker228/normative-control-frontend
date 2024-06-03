import {NavLink, useNavigate} from "react-router-dom";
import CommonAuthedElements from "./common/CommonAuthedElements.jsx";
import css from "../../Header.module.css";
import headerProfileLogo from "../../static/header_profile_logo.svg";
import * as jose from "jose";
import AuthService from "../../../../services/AuthService.js";
import arrowDownIco from "../../static/arrow_down.svg";
import arrowUpIco from "../../static/arrow_up.svg";
import {useState} from "react";

export default function AdminHeaderElements() {
    const navigate = useNavigate();

    const [isDropdownShowed, setDropdownShowed] = useState(false);

    const onProfileClick = () => {
        setDropdownShowed(prevState => !prevState);
    };

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
            <div className={css.profileWithDropdown}>
                <div className={css.profile} onClick={onProfileClick}>
                    <img src={headerProfileLogo} alt='Логотип профиля пользователя' className={css.profile__picture}/>
                    <p className={css.header__link}>{jose.decodeJwt(AuthService.getLocalUserData().accessToken).sub}</p>
                    {!isDropdownShowed &&
                        <img src={arrowDownIco} alt='Стрелка, направленная вниз' className={css.arrow_picture}/>}
                    {isDropdownShowed &&
                        <img src={arrowUpIco} alt='Стрелка, направленная вверх' className={css.arrow_picture}/>}
                </div>
                {isDropdownShowed && <div className={css.dropdownMenu}>
                    <NavLink to={'/profile/admin/groups'}
                             className={css.dropdownMenu__element}>Академические группы</NavLink>
                    <NavLink to={'/profile/admin/accounts'}
                             className={css.dropdownMenu__element}>Учётные записи</NavLink>
                    <NavLink to={'/profile/admin/log'}
                             className={css.dropdownMenu__element}>Журнал событий</NavLink>
                    <NavLink to={'/profile/admin/personal'} className={css.dropdownMenu__element}>Личная
                        информация</NavLink>
                    <NavLink to={'/'} onClick={onLogout} className={css.dropdownMenu__element}>Выход</NavLink>
                </div>}
            </div>
        </div>
    );
}