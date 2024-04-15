import css from "./EditProfile.module.css";
import welcome_panda_img from "../../../welcome/welcome_panda.png";
import {useEffect, useState} from "react";
import AuthUtils from "../../../../utils/authUtils/AuthUtils.js";
import AccountService from "../../../../services/account/AccountService.js";
import AuthService from "../../../../services/auth/AuthService.js";
import AcademicGroupsService from "../../../../services/academicGroups/AcademicGroupsService.js";

export default function EditProfile() {
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [academicGroupdId, setAcademicGroupId] = useState('');
    const [normocontrollerId, setNormocontrollerId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepetition, setPasswordRepetition] = useState('');

    const [academicGroups, setAcademicGroups] = useState([]);
    const [normocontrollers, setNormocontrollers] = useState([]);


    const [isEmailWrong, setIsEmailWrong] = useState(false);
    const [isPasswordsMismatch, setIsPasswordsMismatch] = useState(false);

    const [emailUpdateStatus, setEmailUpdateStatus] = useState('');
    const [passwordUpdateStatus, setPasswordUpdateStatus] = useState('');
    const [personalDataUpdateStatus, setPersonalDataUpdateStatus] = useState('');

    const [isUpdatePending, setIsUpdatePending] = useState(false);

    const [isEmailUpdatedSuccessfully, setIsEmailUpdatedSuccessfully] = useState(false);
    const [isPasswordUpdatedSuccessfully, setIsPasswordUpdatedSuccessfully] = useState(false);
    const [isPersonalDataUpdatedSuccessfully, setIsPersonalDataUpdatedSuccessfully] = useState(false);

    useEffect(() => {
        (async () => {
            let accountData = await AccountService.getAccountData();
            setEmail(accountData.email);
            setLastName(accountData.lastName);
            setFirstName(accountData.firstName);
            setMiddleName(accountData.middleName);
            setNormocontrollerId(accountData.normocontroller.id);
            setAcademicGroupId(accountData.academicGroup.id);

            let academicGroups = await AcademicGroupsService.getAcademicGroups();
            setAcademicGroups(academicGroups);

            let normocontrollers = await AcademicGroupsService.getNormocontrollers();
            setNormocontrollers(normocontrollers);
        })();
    }, []);


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

    const onLastNameInput = (e) => {
        setLastName(e.target.value);
    };

    const onFirstNameInput = (e) => {
        setFirstName(e.target.value);
    };

    const onMiddleNameInput = (e) => {
        setMiddleName(e.target.value);
    };

    const isPersonalDataNotFull = () => {
        return !lastName || !firstName;
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
        setIsPersonalDataUpdatedSuccessfully(false)

        if (!isPasswordsMismatch && !isPasswordEmpty()) {
            try {
                await AccountService.updatePassword(password);
                setIsPasswordUpdatedSuccessfully(true);
            } catch (e) {
                console.log(e);
                setPasswordUpdateStatus('Не удалось обновить пароль. Попробуйте позже');
            }
        }

        if (lastName && firstName) {
            try {
                await AccountService.updatePersonalData(lastName, firstName, middleName, academicGroupdId, normocontrollerId);
                setIsPersonalDataUpdatedSuccessfully(true);
            } catch (e) {
                console.log(e);
                setPersonalDataUpdateStatus('Не удалось обновить личные данные. Попробуйте позже');
            }
        }

        if (!isEmailWrong && !isEmailEmpty()) {
            try {
                await AccountService.updateEmail(email);
                setIsEmailUpdatedSuccessfully(true);
            } catch (e) {
                console.log(e);
                setEmailUpdateStatus('Не удалось обнвоить e-mail. Попробуйте позже');
            }
        }

        setIsUpdatePending(false);
    }

    return (
        <div className={css.content}>
            <form className={css.content__main} onSubmit={onSubmit}>
                <h1 className={css.content__header}>Сменить данные учётной
                    записи {localStorage.getItem('role') === 'STUDENT' ? 'студента' : 'нормоконтролера'}</h1>

                <div className={css.content__section}>
                    <p className={css.content__text}>E-mail</p>
                    <input disabled={isUpdatePending}
                           className={css.authForm__input}
                           value={email}
                           onInput={onEmailInput}
                           type={'email'}
                           placeholder={'Введите новый e-mail в доменной зоне @urfu.me или @at.urfu.ru'}/>
                    {isEmailWrong && <p className={css.auth_error}>Укажите корректный e-mail в
                        домене <b>@urfu.me</b> или <b>@at.urfu.ru</b></p>}
                </div>

                <div className={css.content__section}>
                    <p className={css.content__text}>Пароль</p>
                    <input disabled={isUpdatePending} className={css.authForm__input} onInput={onPasswordInput}
                           type={'password'}
                           placeholder={'Введите новый пароль'}/>
                    <input disabled={isUpdatePending} className={css.authForm__input}
                           onInput={onPasswordRepetitionInput} type={'password'}
                           placeholder={'Повторите новый пароль'}/>
                    {isPasswordsMismatch && <p className={css.auth_error}>Пароли не совпадают</p>}
                </div>

                <div className={css.content__section}>
                    <p className={css.content__text}>ФИО</p>
                    <input disabled={isUpdatePending}
                           className={css.authForm__input}
                           value={lastName}
                           onChange={onLastNameInput}
                           type={'text'}
                           placeholder={'Фамилия'}/>
                    <input disabled={isUpdatePending}
                           className={css.authForm__input}
                           value={firstName}
                           onChange={onFirstNameInput}
                           type={'text'}
                           placeholder={'Имя'}/>
                    <input disabled={isUpdatePending}
                           className={css.authForm__input}
                           value={middleName}
                           onChange={onMiddleNameInput}
                           type={'text'}
                           placeholder={'Отчество (опицонально)'}/>

                    {isPersonalDataNotFull() && <p className={css.auth_error}>Имя или Фамилия не могут быть пустыми</p>}
                </div>

                <div className={css.content__section}>
                    <p className={css.content__text}>Учебные данные</p>

                    <select className={css.authForm__select}
                            name="academicGroupdId"
                            value={academicGroupdId}
                            onChange={(e) => setAcademicGroupId(e.target.value)}>
                        <option value="">-</option>
                        {
                            academicGroups.map((academicGroup, index) =>
                                <option value={academicGroup.id} key={index}>
                                    {academicGroup.name}
                                </option>)
                        }
                    </select>

                    <select className={css.authForm__select} name="normocontrollerId" value={normocontrollerId}
                            onChange={(e) => setNormocontrollerId(e.target.value)}>
                        <option value="">-</option>
                        {
                            normocontrollers.map((normocontroller, index) =>
                                <option value={normocontroller.id} key={index}>
                                    {`${normocontroller.lastName} ${normocontroller.firstName[0]}. ${normocontroller.lastName[0]}.`}
                                </option>)
                        }
                    </select>
                </div>

                <button type={'submit'}
                        disabled={isUpdatePending || isEmailWrong || isPasswordsMismatch || isInputEmpty() || isPersonalDataNotFull()}
                        className={`${css.button} ${css.button_upload} ${css.button_blue} ${css.button_shadow}`}>
                    СОХРАНИТЬ ИЗМЕНЕНИЯ
                </button>
                <div>
                    {emailUpdateStatus !== '' && <p className={css.auth_error}>{emailUpdateStatus}</p>}
                    {passwordUpdateStatus !== '' && <p className={css.auth_error}>{passwordUpdateStatus}</p>}
                </div>
                <div>
                    {isEmailUpdatedSuccessfully &&
                        <p className={css.updated_successfully}>Ваш e-mail успешно обновлён</p>}
                    {isPasswordUpdatedSuccessfully &&
                        <p className={css.updated_successfully}>Ваш пароль успешно обновлён</p>}
                </div>
            </form>
            <img className={css.content__image} src={welcome_panda_img} alt={'Panda is welcoming user'}/>
        </div>
    );
}