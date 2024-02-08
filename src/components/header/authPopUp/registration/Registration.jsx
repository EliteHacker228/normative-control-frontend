import css from "../AuthPopUp.module.css";
import {useState} from "react";
import AuthUtils from "../../../../utils/authUtils/AuthUtils.js";
import AuthService from "../../../../services/auth/AuthService.js";
import WrongCredentialsError from "../../../../assets/WrongCredentialsError.js";
import CredentialsAlreadyInUse from "../../../../assets/CredentialsAlreadyInUse.js";

export default function Registration({onAuth}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepetition, setPasswordRepetition] = useState('');

    const [isRegistrationFailed, setIsRegistrationFailed] = useState(false);
    const [registrationFailureReason, setRegistrationFailureReason] = useState('');

    const [isEmailWrongDomain, setIsEmailWrongDomain] = useState(false);
    const [isPasswrodsMismathes, setIsPasswrodsMismathes] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const onEmailInput = (e) => {
        const currentEmail = e.target.value
        setIsRegistrationFailed(false);
        setEmail(currentEmail);
        setIsEmailWrongDomain(!AuthUtils.isEmailCorrect(currentEmail));
    }

    const onPasswordInput = (e) => {
        const currentPassword = e.target.value;
        setIsRegistrationFailed(false);
        setPassword(currentPassword);
        if (currentPassword !== passwordRepetition)
            setIsPasswrodsMismathes(true);
        else
            setIsPasswrodsMismathes(false);
    }

    const onRegistration = async () => {
        setIsPending(true);
        setIsRegistrationFailed(false);
        try {
            await AuthService.registerWithCredentials(email, password);
            onAuth();
        } catch (e) {
            if (e instanceof CredentialsAlreadyInUse) {
                setIsRegistrationFailed(true);
                setRegistrationFailureReason('Указанный вами e-mail уже используется в системе')
            } else {
                setIsRegistrationFailed(true);
                setRegistrationFailureReason('Попытка регистрации не удалась. Пожалуйста, попробуйте снова');
            }
        }
        setIsPending(false);
    }

    const onPasswordRepetitionInput = (e) => {
        const currentRepetitionPassword = e.target.value;
        setPasswordRepetition(currentRepetitionPassword);
        if (currentRepetitionPassword !== password)
            setIsPasswrodsMismathes(true);
        else
            setIsPasswrodsMismathes(false);
    }

    return (
        <div className={css.authForm}>
            <h2 className={css.authForm__header}>Регистрация</h2>
            <input className={css.authForm__input} type={'text'} placeholder={'E-mail'}
                   onChange={onEmailInput}/>
            <input className={css.authForm__input} type={'password'} placeholder={'Пароль'}
                   onChange={onPasswordInput}/>
            <input className={css.authForm__input} type={'password'} placeholder={'Повторите пароль'}
                   onChange={onPasswordRepetitionInput}/>
            <button className={`${css.button} ${css.button_upload} ${css.button_red}`}
                    disabled={!(AuthUtils.isEmailCorrect(email) && password && passwordRepetition) || isPending}
                    onClick={onRegistration}>Регистрация
            </button>
            {isEmailWrongDomain &&
                <p className={css.auth_error}>Укажите e-mail в домене <b>@urfu.me</b> или <b>@at.urfu.ru</b></p>}
            {isPasswrodsMismathes && <p className={css.auth_error}>Пароли не совпадают</p>}
            {isRegistrationFailed && <p className={css.auth_error}>{registrationFailureReason}</p>}
        </div>
    );
}