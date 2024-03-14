import css from "./EditProfile.module.css";
import welcome_panda_img from "../../../welcome/welcome_panda.png";
import {useState} from "react";
import AuthUtils from "../../../../utils/authUtils/AuthUtils.js";
import AccountService from "../../../../services/account/AccountService.js";
import AuthService from "../../../../services/auth/AuthService.js";

export default function EditProfile(){
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [passwordRepetition, setPasswordRepetition] = useState('');

    const [isEmailWrong, setIsEmailWrong] = useState(false);
    const [isPasswordsMismatch, setIsPasswordsMismatch] = useState(false);

    const [emailUpdateStatus, setEmailUpdateStatus] = useState('');
    const [passwordUpdateStatus, setPasswordUpdateStatus] = useState('');

    const [isUpdatePending, setIsUpdatePending] = useState(false);

    const [isEmailUpdatedSuccessfully, setIsEmailUpdatedSuccessfully] = useState(false);
    const [isPasswordUpdatedSuccessfully, setIsPasswordUpdatedSuccessfully] = useState(false);
    // Указанный e-mail уже используется
    // Произошла ошибка

    const isInputEmpty = () => {
        return isEmailEmpty() && isPasswordEmpty() && isPasswordRepetitionEmpty();
    };

    const isEmailEmpty = () => {
        return email.trim().length === 0;
    };

    const isPasswordEmpty = () => {
        return password.trim().length === 0;
    };

    const isPasswordRepetitionEmpty = () => {
        return passwordRepetition.trim().length === 0;
    };

    const onEmailInput = (e) => {
        // console.log(isInputWrong, inputError);
        let email = e.target.value;
        setEmail(email);
        setEmailUpdateStatus('');
        if (!AuthUtils.isEmailCorrect(email) && email !== '') {
            setIsEmailWrong(true);
        } else {
            setIsEmailWrong(false);
        }
    };

    const onPasswordInput = (e) => {
        let password = e.target.value;
        setPassword(password);
        setPasswordUpdateStatus('');
        if (password !== passwordRepetition) {
            setIsPasswordsMismatch(true);
        } else {
            setIsPasswordsMismatch(false);
        }
    };

    const onPasswordRepetitionInput = (e) => {
        let passwordRepetition = e.target.value;
        setPasswordRepetition(passwordRepetition);
        setPasswordUpdateStatus('');
        if (passwordRepetition !== password) {
            setIsPasswordsMismatch(true);
        } else {
            setIsPasswordsMismatch(false);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsUpdatePending(true);
        setIsEmailUpdatedSuccessfully(false);
        setIsPasswordUpdatedSuccessfully(false);
        if (!isEmailWrong && !isEmailEmpty()) {
            try {
                await AccountService.updateEmail(email);
                setIsEmailUpdatedSuccessfully(true);
            } catch (e) {
                console.log(e);
                setEmailUpdateStatus('Не удалось обнвоить e-mail. Попробуйте позже');
            }
        }

        if (!isPasswordsMismatch && !isPasswordEmpty()) {
            try {
                await AccountService.updatePassword(password);
                setIsPasswordUpdatedSuccessfully(true);
            } catch (e) {
                console.log(e);
                setPasswordUpdateStatus('Не удалось обновить пароль. Попробуйте позже');
            }
        }
        setIsUpdatePending(false);
    }

    return (
        <div className={css.content}>
            <form className={css.content__main} onSubmit={onSubmit}>
                <h1 className={css.content__header}>Сменить данные учётной
                    записи {localStorage.getItem('role') === 'STUDENT' ? 'студента' : 'нормоконтролера'}</h1>

                <p className={css.content__text}>E-mail</p>
                <input disabled={isUpdatePending} className={css.authForm__input} onInput={onEmailInput}
                       type={'email'}
                       placeholder={'Введите новый e-mail в доменной зоне @urfu.me или @at.urfu.ru'}/>

                <p className={css.content__text}>Пароль</p>
                <input disabled={isUpdatePending} className={css.authForm__input} onInput={onPasswordInput}
                       type={'password'}
                       placeholder={'Введите новый пароль'}/>
                <input disabled={isUpdatePending} className={css.authForm__input}
                       onInput={onPasswordRepetitionInput} type={'password'}
                       placeholder={'Повторите новый пароль'}/>

                <button type={'submit'}
                        disabled={isUpdatePending || isEmailWrong || isPasswordsMismatch || isInputEmpty()}
                        className={`${css.button} ${css.button_upload} ${css.button_blue} ${css.button_shadow}`}>
                    СОХРАНИТЬ ИЗМЕНЕНИЯ
                </button>
                <div>
                    {emailUpdateStatus !== '' && <p className={css.auth_error}>{emailUpdateStatus}</p>}
                    {passwordUpdateStatus !== '' && <p className={css.auth_error}>{passwordUpdateStatus}</p>}
                    {isEmailWrong && <p className={css.auth_error}>Укажите корректный e-mail в
                        домене <b>@urfu.me</b> или <b>@at.urfu.ru</b></p>}
                    {isPasswordsMismatch && <p className={css.auth_error}>Пароли не совпадают</p>}
                </div>
                <div>
                    {isEmailUpdatedSuccessfully && <p className={css.updated_successfully}>Ваш e-mail успешно обновлён</p>}
                    {isPasswordUpdatedSuccessfully && <p className={css.updated_successfully}>Ваш пароль успешно обновлён</p>}
                </div>
            </form>
            <img className={css.content__image} src={welcome_panda_img} alt={'Panda is welcoming user'}/>
        </div>
    );
}