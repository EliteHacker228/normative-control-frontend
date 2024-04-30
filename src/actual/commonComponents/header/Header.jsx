import {NavLink, useNavigate} from "react-router-dom";
import AuthService from "../../services/AuthService.js";

export default function Header() {
    const navigate = useNavigate();

    const onLogout = () => {
        try {
            AuthService.logoutUser();
        } catch (error) {
            console.log(error);
        }
        navigate('/');
    }

    return (
        <div>
            <NavLink to='/'>Главная</NavLink>

            {!AuthService.isUserLocallyAuthenticated() && <NavLink to='/login'>Вход</NavLink>}
            {!AuthService.isUserLocallyAuthenticated() && <NavLink to='/registration'>Регистрация</NavLink>}

            {AuthService.isUserLocallyAuthenticated() && <NavLink to='/profile'>Профиль</NavLink>}
            {AuthService.isUserLocallyAuthenticated() && <span onClick={onLogout}>Выход</span>}
        </div>
    );
}