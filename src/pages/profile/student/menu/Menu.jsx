import css from "./Menu.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export default function Menu(){
    return (
        <div className={css.menu}>
            <NavLink to={'/profile/edit'} className={css.menu__element}>Изменить личные данные</NavLink>
            <NavLink to={'/profile/list'} className={css.menu__element}>Мои проверки</NavLink>
        </div>
    );
}