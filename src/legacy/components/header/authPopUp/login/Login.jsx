import css from "../AuthPopUp.module.css";
import {useState} from "react";
import AuthService from "../../../../services/auth/AuthService.js";
import WrongCredentialsError from "../../../../assets/WrongCredentialsError.js";
import AuthUtils from "../../../../utils/authUtils/AuthUtils.js";

export default function Login({onAuth}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoginFailed, setIsLoginFailed] = useState(false);
    const [loginFailureReason, setLoginFailureReason] = useState('');

    const [isEmailWrongDomain, setIsEmailWrongDomain] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const loginOnSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true);
        setIsLoginFailed(false);
        try {
            await AuthService.loginWithCredentials(email, password);
            onAuth();
        } catch (e) {
            if (e instanceof WrongCredentialsError) {
                setIsLoginFailed(true);
                setLoginFailureReason('Неверный e-mail или пароль')
            } else {
                setIsLoginFailed(true);
                setLoginFailureReason('Попытка входа не удалась. Пожалуйста, попробуйте снова');
            }
        }
        setIsPending(false);
    }

    const onEmailInput = (e) => {
        const currentEmail = e.target.value
        setIsLoginFailed(false);
        setEmail(currentEmail);
        setIsEmailWrongDomain(!AuthUtils.isEmailCorrect(currentEmail));
    }

    const onPasswordInput = (e) => {
        const password = e.target.value;
        setIsLoginFailed(false);
        setPassword(password);
    };

    return (
        <div>
            <form className={css.authForm} onSubmit={loginOnSubmit}>
                <h2 className={css.authForm__header}>Вход</h2>
                <input className={css.authForm__input} type={'text'} placeholder={'E-mail'} value={email}
                       onChange={onEmailInput}/>
                <input className={css.authForm__input} type={'password'} placeholder={'Пароль'} value={password}
                       onChange={onPasswordInput}/>
                <button className={`${css.button} ${css.button_upload} ${css.button_red}`}
                        disabled={!(AuthUtils.isEmailCorrect(email) && password) || isPending}
                        type={'submit'}>Вход
                </button>
                {isLoginFailed && <p className={css.auth_error}>{loginFailureReason}</p>}
                {isEmailWrongDomain && email.trim() !== '' &&
                    <p className={css.auth_error}>Укажите корректный e-mail в
                        домене <b>@urfu.me</b> или <b>@at.urfu.ru</b></p>}
            </form>
        </div>
    );
}