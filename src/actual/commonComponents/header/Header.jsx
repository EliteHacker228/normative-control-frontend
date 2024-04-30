import {NavLink} from "react-router-dom";
import AuthService from "../../services/AuthService.js";
import StudentHeaderElements from "./components/authed/StudentHeaderElements.jsx";
import NormocontrollerHeaderElements from "./components/authed/NormocontrollerHeaderElements.jsx";
import AdminHeaderElements from "./components/authed/AdminHeaderElements.jsx";
import UnauthedUserHeaderElements from "./components/unauthed/UnauthedUserHeaderElements.jsx";
import Roles from "../../domain/users/Roles.js";

export default function Header() {
    return (
        <div>
            <NavLink to='/'>Главная</NavLink>

            {!AuthService.isUserLocallyAuthenticated() && <UnauthedUserHeaderElements/>}

            {AuthService.isUserLocallyAuthenticated() && AuthService.getLocalUserData().role === Roles.STUDENT &&
                <StudentHeaderElements/>}
            {AuthService.isUserLocallyAuthenticated() && AuthService.getLocalUserData().role === Roles.NORMOCONTROLLER &&
                <NormocontrollerHeaderElements/>}
            {AuthService.isUserLocallyAuthenticated() && AuthService.getLocalUserData().role === Roles.ADMIN &&
                <AdminHeaderElements/>}
        </div>
    );
}