import css from "../AuthPopUp.module.css";
import {useState} from "react";
import AuthService from "../../../../services/auth/auth.js";
import WrongCredentialsError from "../../../../assets/WrongCredentialsError.js";

export default function Login({selectedAuthType}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoginFailed, setIsLoginFailed] = useState(false);
    const [loginFailureReason, setLoginFailureReason] = useState('');

    const [isEmailWrongDomain, setIsEmailWrongDomain] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const onLogin = async () => {
        setIsPending(true);
        setIsLoginFailed(false);
        try {
            await AuthService.loginWithCredentials(email, password);
        } catch (e) {
            if (e instanceof WrongCredentialsError) {
                setIsLoginFailed(true);
                setLoginFailureReason('Неверный e-mail или пароль')
            } else {
                setIsLoginFailed(true);
                setLoginFailureReason('Попытка войти не удалась по неизвестным причинам');
            }
        }
        setIsPending(false);
    }

    const onEmailInput = (e) => {
        const currentEmail = e.target.value
        setEmail(currentEmail);
        setIsEmailWrongDomain(!isEmailCorrect(currentEmail));
    }

    const isEmailCorrect = (email) => {
        const emailRegExp =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        return email.match(emailRegExp) && (email.endsWith('@urfu.me') || email.endsWith('@at.urfu.ru'));
    }

    return (
        <div>
            <div className={css.authForm}>
                <h2 className={css.authForm__header}>Вход</h2>
                <input className={css.authForm__input} type={'text'} placeholder={'E-mail'} value={email}
                       onChange={onEmailInput}/>
                <input className={css.authForm__input} type={'password'} placeholder={'Пароль'} value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <button className={`${css.button} ${css.button_upload} ${css.button_red}`}
                        disabled={!(isEmailCorrect(email) && password) || isPending} onClick={onLogin}>Вход
                </button>
                {isLoginFailed && <p className={css.auth_error}>{loginFailureReason}</p>}
                {isEmailWrongDomain &&
                    <p className={css.auth_error}>Укажите корректный e-mail в домене <b>@urfu.me</b> или <b>@at.urfu.ru</b></p>}
            </div>
        </div>
    );
}