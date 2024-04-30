import {NavLink, useNavigate} from "react-router-dom";
import AuthService from "../../../../../services/AuthService.js";

export default function CommonAuthedElements() {
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
            <NavLink to={'/'} onClick={onLogout}>Выход</NavLink>
        </div>
    );
}