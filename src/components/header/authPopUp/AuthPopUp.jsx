import Login from "./login/Login.jsx";
import Registration from "./registration/Registration.jsx";
import css from './AuthPopUp.module.css';

export default function AuthPopUp({selectedAuthType, onAuth}) {
    return (
        <div>
            <div className={selectedAuthType === 'login' ? '' : css.block__no_display}>
                <Login onAuth={onAuth}/>
            </div>
            <div className={selectedAuthType === 'registration' ? '' : css.block__no_display}>
                <Registration onAuth={onAuth}/>
            </div>
        </div>
    );
}