import css from './Header.module.css';
import normative_control_logo from './normative_control_logo.svg';
import dropdown_icon from './dropdown_arrow.svg';
import pullup_icon from './pullup_arrow.svg';
import burger_menu from './burger_menu.svg';
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import Login from "./authPopUp/login/Login.jsx";
import Registration from "./authPopUp/registration/Registration.jsx";
import AuthPopUp from "./authPopUp/AuthPopUp.jsx";
import AuthService from "../../services/auth/AuthService.js";

export default function Header() {

    const [isAuthPopUpShowed, setIsAuthPopUpShowed] = useState(false);
    const [isUserAuthed, setIsUserAuthed] = useState(AuthService.isUserLocallyAuthenticated());
    const onAuth = () => {
        closePopUp();
        setIsUserAuthed(AuthService.isUserLocallyAuthenticated());
    };
    const toggleOpenAuthPopUp = () => {
        if (isAuthPopUpShowed)
            closePopUp();
        else
            showPopUp();
    };
    const closePopUp = () => setIsAuthPopUpShowed(false);
    const showPopUp = () => setIsAuthPopUpShowed(true);

    const handleKeyDown = (e) => {
        if (isAuthPopUpShowed && e.code === 'Escape')
            toggleOpenAuthPopUp();
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    const [selectedAuthType, setSelectedAuthType] = useState('login');

    const handleAuthTypeSelection = (e) => {
        setSelectedAuthType(e.target.value)
    };

    const [isBurgerMenuExpanded, setIsBurgerMenuExpanded] = useState(false);
    const toggleExpandBurgerMenu = () => setIsBurgerMenuExpanded(!isBurgerMenuExpanded);


    return (
        <div className={css.header}>
            <div className={css.headerContent}>
                <NavLink className={css.logoBlock} to={'/'}>
                    <img className={css.logoBlock_image} src={normative_control_logo}></img>
                    <p className={css.logoBlock_text}>normative control</p>
                </NavLink>

                <div className={css.controlBlock}>
                    <NavLink className={css.link} to={'/faq'}>
                        <p className={css.header_text}>FAQ</p>
                    </NavLink>
                    {
                        AuthService.isUserLocallyAuthenticated() &&
                        <NavLink className={css.link} to={'/profile'}>
                            <p  className={css.header_text}>Личный кабинет</p>
                        </NavLink>
                    }
                    {
                        AuthService.isUserLocallyAuthenticated() ?
                            <NavLink className={css.link} onClick={AuthService.logout} to={'/'}>
                                <p className={css.header_text}>Выход</p>
                            </NavLink>
                            :
                            <NavLink className={css.link}>
                                <div className={css.loginBlock} onClick={toggleOpenAuthPopUp}>
                                    <p className={css.header_text}>Вход</p>
                                    {isAuthPopUpShowed ? <img src={pullup_icon} alt={'Dropdown arrow'}/> :
                                        <img src={dropdown_icon} alt={'Dropdown arrow'}/>}
                                </div>
                            </NavLink>
                    }
                </div>

                {isAuthPopUpShowed &&
                    <div className={`${css.popUp} ${css.zIndex_3}`}>
                        <div className={css.popUp__background} onClick={toggleOpenAuthPopUp}></div>
                        <div className={css.popUp__content}>
                            <div className={css.selectionMenu}>
                                <label
                                    className={`${css.selectionBlock} ${selectedAuthType === 'login' && css.selectionBlock__checked}`}
                                    htmlFor="auth_type_login">
                                    <p className={css.selectionBlock__label}>Вход</p>
                                    <input className={css.selectionBlock__radio} type="radio" value="login"
                                           id="auth_type_login"
                                           name="select_auth_type"
                                           checked={selectedAuthType === 'login'}
                                           onChange={handleAuthTypeSelection}/>
                                </label>

                                <label
                                    className={`${css.selectionBlock} ${selectedAuthType === 'registration' && css.selectionBlock__checked}`}
                                    htmlFor="auth_type_registration">
                                    <p className={css.selectionBlock__label}
                                    >Регистрация</p>
                                    <input className={css.selectionBlock__radio} type="radio" value="registration"
                                           id="auth_type_registration"
                                           name="select_auth_type"
                                           checked={selectedAuthType === 'registration'}
                                           onChange={handleAuthTypeSelection}/>
                                </label>
                            </div>
                            <AuthPopUp selectedAuthType={selectedAuthType} onAuth={onAuth}/>
                        </div>
                    </div>
                }


                <div className={css.burgerMenu} onClick={toggleExpandBurgerMenu}>
                    <img className={css.burgerMenu__img} src={burger_menu}/>
                </div>

                {isBurgerMenuExpanded &&
                    <div className={`${css.popUp} ${css.zIndex_2}`}>
                        <div className={css.popUp__background} onClick={toggleExpandBurgerMenu}></div>
                        <div className={css.popUp__content}>
                            <div className={css.popUp__links}>
                                <NavLink className={css.popUp__link} to={'/faq'}>
                                    <p>FAQ</p>
                                </NavLink>
                                {
                                    AuthService.isUserLocallyAuthenticated() &&
                                    <NavLink className={css.popUp__link} to={'/profile'}>
                                        <p>Личный кабинет</p>
                                    </NavLink>
                                }
                                {
                                    AuthService.isUserLocallyAuthenticated() ?
                                        <NavLink className={css.popUp__link} onClick={AuthService.logout}>
                                            <p>Выход</p>
                                        </NavLink>
                                        :
                                        <NavLink className={css.popUp__link} onClick={toggleOpenAuthPopUp}>
                                            <p>Вход</p>
                                        </NavLink>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}