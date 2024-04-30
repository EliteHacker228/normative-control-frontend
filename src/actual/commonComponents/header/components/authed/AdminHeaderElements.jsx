import {NavLink} from "react-router-dom";
import CommonAuthedElements from "./common/CommonAuthedElements.jsx";

export default function AdminHeaderElements() {
    return (
        <div>
            <NavLink to={'/profile/admin/personal'}>Личная информация</NavLink>
            <NavLink to={'/profile/admin/academical/groups'}>Академические группы</NavLink>
            <NavLink to={'/profile/admin/accounts'}>Управление учетными записями</NavLink>
            <NavLink to={'/profile/admin/logs'}>Журнал событий</NavLink>
            <CommonAuthedElements/>
        </div>
    );
}