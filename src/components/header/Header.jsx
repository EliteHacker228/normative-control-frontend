import css from './Header.module.css';
import normative_control_logo from './normative_control_logo.svg';
import dropdown_icon from './dropdown_arrow.svg';

export default function Header() {
    return (
        <div className={css.header}>
            <div className={css.headerContent}>
                <div className={css.logoBlock}>
                    <img className={css.logoBlock_image} src={normative_control_logo}></img>
                    <p className={css.logoBlock_text}>normative control</p>
                </div>

                <div className={css.controlBlock}>
                    <p className={css.header_text}>FAQ</p>
                    <div className={css.loginBlock}>
                        <p className={css.header_text}>Войти</p>
                        <img src={dropdown_icon} alt={'Dropdown arrow'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}