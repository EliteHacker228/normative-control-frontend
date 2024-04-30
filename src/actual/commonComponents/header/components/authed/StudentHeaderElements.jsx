import {NavLink} from "react-router-dom";
import CommonAuthedElements from "./common/CommonAuthedElements.jsx";

export default function StudentHeaderElements() {
    return (
        <div>
            <NavLink to={'/profile/student/documents'}>Работы</NavLink>
            <NavLink to={'/profile/student/personal'}>Личная информация</NavLink>
            <CommonAuthedElements/>
        </div>
    );
}