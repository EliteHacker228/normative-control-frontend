import css from './Header.module.css';
import normative_control_logo from './normative_control_logo.svg';
import dropdown_icon from './dropdown_arrow.svg';
import burger_menu from './burger_menu.svg';
import {NavLink} from "react-router-dom";

export default function Header() {
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
                        <div className={css.loginBlock}>
                            <p className={css.header_text}>Войти</p>
                            <img src={dropdown_icon} alt={'Dropdown arrow'}/>
                        </div>
                    </NavLink>
                </div>

                <div className={css.burgerMenu}>
                    <img className={css.burgerMenu__img} src={burger_menu}/>
                </div>
            </div>
        </div>
    );
}