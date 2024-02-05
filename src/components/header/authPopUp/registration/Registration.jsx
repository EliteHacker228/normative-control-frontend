import css from "../AuthPopUp.module.css";
import {useState} from "react";

export default function Registration() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepetition, setPasswordRepetition] = useState('');

    const [isRegistrationFailed, setIsRegistrationFailed] = useState(false);

    const [isEmailUsed, setIsEmailUsed] = useState(false);
    const [isEmailWrongDomain, setIsEmailWrongDomain] = useState(false);
    const [isPasswrodsMismathes, setIsPasswrodsMismathes] = useState(false);

    const onEmailInput = (e) => {
        const currentEmail = e.target.value
        setEmail(currentEmail);
        if (!currentEmail.endsWith('@urfu.me') && !currentEmail.endsWith('@at.urfu.ru'))
            setIsEmailWrongDomain(true);
        else
            setIsEmailWrongDomain(false);
    }

    const onPasswordInput = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        if (currentPassword !== passwordRepetition)
            setIsPasswrodsMismathes(true);
        else
            setIsPasswrodsMismathes(false);
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
                    disabled={!(email && password && passwordRepetition)}>Регистрация
            </button>
            {isEmailUsed && <p className={css.auth_error}>Указанный e-mail уже используется</p>}
            {isEmailWrongDomain &&
                <p className={css.auth_error}>Укажите e-mail в домене <b>@urfu.me</b> или <b>@at.urfu.ru</b></p>}
            {isPasswrodsMismathes && <p className={css.auth_error}>Пароли не совпадают</p>}
            {isRegistrationFailed &&
                <p className={css.auth_error}>Произошла ошибка при регистрации. Пожалуйста, попробуйте позже</p>}
        </div>
    );
}