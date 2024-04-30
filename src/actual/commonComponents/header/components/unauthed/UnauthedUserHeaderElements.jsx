import {NavLink} from "react-router-dom";


export default function UnauthedUserHeaderElements() {
    return (
        <div>
            <NavLink to='/login'>Вход</NavLink>
            <NavLink to='/registration'>Регистрация</NavLink>
        </div>
    );
}