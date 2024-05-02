import css from "../../Header.module.css";
import authedCss from './Authed.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import CommonAuthedElements from "./common/CommonAuthedElements.jsx";
import AuthService from "../../../../services/AuthService.js";
import * as jose from "jose";
import {useState} from "react";
import headerProfileLogo from '../../static/header_profile_logo.svg';
import arrowDownIco from '../../static/arrow_down.svg';
import arrowUpIco from '../../static/arrow_up.svg';


export default function StudentHeaderElements() {
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
            {/*<NavLink to={'/profile/student/documents'} className={css.header__link}>Работы</NavLink>*/}
            {/*<NavLink to={'/profile/student/personal'} className={css.header__link}>Личная информация</NavLink>*/}
            {/*<CommonAuthedElements/>*/}
            <div className={css.profileWithDropdown}>
                <div className={css.profile} onClick={onProfileClick}>
                    <img src={headerProfileLogo} alt='Логотип профиля пользователя' className={css.profile__picture}/>
                    <p className={css.header__link}>{jose.decodeJwt(AuthService.getLocalUserData().accessToken).sub}</p>
                    {!isDropdownShowed && <img src={arrowDownIco} alt='Стрелка, направленная вниз' className={css.arrow_picture}/>}
                    {isDropdownShowed && <img src={arrowUpIco} alt='Стрелка, направленная вверх' className={css.arrow_picture}/>}
                </div>
                {isDropdownShowed && <div className={css.dropdownMenu}>
                    <NavLink to={'/profile/student/documents'} className={css.dropdownMenu__element}>Работы</NavLink>
                    <NavLink to={'/profile/student/personal'} className={css.dropdownMenu__element}>Личная
                        информация</NavLink>
                    <NavLink to={'/'} onClick={onLogout} className={css.dropdownMenu__element}>Выход</NavLink>
                </div>}
            </div>
        </div>
    );
}