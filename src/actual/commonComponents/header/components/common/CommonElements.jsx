import {NavLink} from "react-router-dom";
import css from '../../Header.module.css';

export default function CommonElements() {
    return (
        <div className={css.header__elements}>
            {/*<NavLink to='/faq' className={css.header__link}>Помощь и поддержка</NavLink>*/}
        </div>
    );
}