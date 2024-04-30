import {NavLink} from "react-router-dom";
import CommonAuthedElements from "./common/CommonAuthedElements.jsx";

export default function NormocontrollerHeaderElements() {
    return (
        <div>
            <NavLink to={'/profile/normocontroller/documents'}>Работы</NavLink>
            <NavLink to={'/profile/normocontroller/personal'}>Личная информация</NavLink>
            <NavLink to={'/profile/normocontroller/faq'}>Помощь и поддержка</NavLink>
            <CommonAuthedElements/>
        </div>
    );
}