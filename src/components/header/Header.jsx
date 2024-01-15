import css from './Header.module.css';
import normative_control_logo from './normative_control_logo.svg';
import dropdown_icon from './dropdown_arrow.svg';
import pullup_icon from './pullup_arrow.svg';
import burger_menu from './burger_menu.svg';
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Header() {

    const [isAuthPopUpShowed, setIsAuthPopUpShowed] = useState(false);
    const toggleOpenAuthPopUp = () => setIsAuthPopUpShowed(!isAuthPopUpShowed);

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

    const authType = {"login": 0, "registration": 1};
    const [selectedAuthType, setSelectedAuthType] = useState(authType.login);

    const handleAuthTypeSelection = (e) => {
        setSelectedAuthType(authType[e.target.value])
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
                    <NavLink className={css.link}>
                        <div className={css.loginBlock} onClick={toggleOpenAuthPopUp}>
                            <p className={css.header_text}>Войти</p>
                            {isAuthPopUpShowed ? <img src={pullup_icon} alt={'Dropdown arrow'}/> :
                                <img src={dropdown_icon} alt={'Dropdown arrow'}/>}
                        </div>
                    </NavLink>
                </div>

                {isAuthPopUpShowed &&
                    <div className={`${css.popUp} ${css.zIndex_3}`}>
                        <div className={css.popUp__background} onClick={toggleOpenAuthPopUp}></div>
                        <div className={css.popUp__content}>
                            <div className={css.selectionMenu}>
                                <label
                                    className={`${css.selectionBlock} ${selectedAuthType === authType.login && css.selectionBlock__checked}`}
                                    htmlFor="auth_type_login">
                                    <p className={css.selectionBlock__label}
                                    >Войти</p>
                                    <input className={css.selectionBlock__radio} type="radio" value="login"
                                           id="auth_type_login"
                                           name="select_auth_type"
                                           checked={selectedAuthType === authType.login}
                                           onChange={handleAuthTypeSelection}/>
                                </label>

                                <label
                                    className={`${css.selectionBlock} ${selectedAuthType === authType.registration && css.selectionBlock__checked}`}
                                    htmlFor="auth_type_registration">
                                    <p className={css.selectionBlock__label}
                                    >Зарегистрироваться</p>
                                    <input className={css.selectionBlock__radio} type="radio" value="registration"
                                           id="auth_type_registration"
                                           name="select_auth_type"
                                           checked={selectedAuthType === authType.registration}
                                           onChange={handleAuthTypeSelection}/>
                                </label>

                            </div>
                            {selectedAuthType === authType.login ?
                                <div className={css.authForm}>
                                    <h2 className={css.authForm__header}>Войдите</h2>
                                    <input className={css.authForm__input} type={'text'} placeholder={'E-mail'}/>
                                    <input className={css.authForm__input} type={'password'} placeholder={'Пароль'}/>
                                    <button>Войти</button>
                                </div>
                                :
                                <div className={css.authForm}>
                                    <h2 className={css.authForm__header}>Зарегистрируйтесь</h2>
                                    <input className={css.authForm__input} type={'text'} placeholder={'E-mail'}/>
                                    <input className={css.authForm__input} type={'password'} placeholder={'Пароль'}/>
                                    <input className={css.authForm__input} type={'password'}
                                           placeholder={'Повторите пароль'}/>
                                    <button>Зарегистрироваться</button>
                                </div>
                            }
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
                                <NavLink className={css.popUp__link} onClick={toggleOpenAuthPopUp}>
                                    <p>Войти</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}