import css from './Profile.module.css';
import Header from "../../../components/header/Header.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import panda_with_laptop from '../panda_with_laptop.png';
import {useEffect, useState} from "react";
import welcome_panda_img from "../../welcome/welcome_panda.png";
import AuthUtils from "../../../utils/authUtils/AuthUtils.js";
import AccountService from "../../../services/account/AccountService.js";
import {NavLink, useLocation} from "react-router-dom";
import StudworkService from "../../../services/studwork/StudworkService.js";

export default function Profile() {
    const location = useLocation();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [passwordRepetition, setPasswordRepetition] = useState('');

    const [isEmailWrong, setIsEmailWrong] = useState(false);
    const [isPasswordsMismatch, setIsPasswordsMismatch] = useState(false);

    const [emailUpdateStatus, setEmailUpdateStatus] = useState('');
    const [passwordUpdateStatus, setPasswordUpdateStatus] = useState('');

    const [isUpdatePending, setIsUpdatePending] = useState(false);
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
        if (!isEmailWrong && !isEmailEmpty()) {
            try {
                await AccountService.updateEmail(email);
            } catch (e) {
                console.log(e);
                setEmailUpdateStatus('Не удалось обнвоить e-mail. Попробуйте позже');
            }
        }

        if (!isPasswordsMismatch && !isPasswordEmpty()) {
            try {
                await AccountService.updatePassword(password);
            } catch (e) {
                console.log(e);
                setPasswordUpdateStatus('Не удалось обновить пароль. Попробуйте позже');
            }
        }
        setIsUpdatePending(false);
    }

    const [listOfAuthedVerifications, setListOfAuthedVerification] = useState([]);

    useEffect(() => {
        (async function () {
            let authedVerifications = await StudworkService.getListOfAuthedVerifications();
            console.log(authedVerifications);
            setListOfAuthedVerification(authedVerifications);
        })();
    }, [])

    return (
        <div>
            <Header/>
            <div className={css.menu}>
                <NavLink to={'/profile/edit'} className={css.menu__element}>Изменить личные данные</NavLink>
                <NavLink to={'/profile/list'} className={css.menu__element}>Мои проверки</NavLink>
            </div>
            {location.pathname === '/profile/edit' ?
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
                    </form>
                    <img className={css.content__image} src={welcome_panda_img} alt={'Panda is welcoming user'}/>
                </div>
                :
                <div className={css.content}>
                    <div className={css.verilog}>
                        <h1 className={css.content__header}>Список ваших проверок</h1>
                        <div className={css.verilog__list}>
                            {listOfAuthedVerifications.reverse().map((element) => {
                                return (
                                    <div className={css.verilog__card}>
                                        <NavLink to={`/result?resultId=${element.id}`}
                                                 className={css.verilog__link}>Просмотреть</NavLink>
                                        <p className={css.verilog__text}>ID: {element.id}</p>
                                        <p className={css.verilog__text}>Дата проверки:
                                            {' ' + new Date(element.timestamp).toLocaleTimeString('ru-RU') + ' ' + new Date(element.timestamp).toLocaleDateString('ru-RU')}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <img className={css.content__image} src={panda_with_laptop} alt={'Panda with it\'s laptop'}/>
                </div>
            }
            <Footer/>
        </div>
    );
}