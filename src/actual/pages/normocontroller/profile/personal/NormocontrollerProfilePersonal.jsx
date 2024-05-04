import {useEffect, useState} from "react";
import css from './NormocontrollerProfilePersonal.module.css';
import AccountsService from "../../../../services/AccountsService.js";
import AcademicalGroupsService from "../../../../services/AcademicalGroupsService.js";
import PatchAccountDto from "../../../../dto/accounts/PatchAccountDto.js";
import AuthService from "../../../../services/AuthService.js";
import Header from "../../../../commonComponents/header/Header.jsx";
import CredentialsValidator from "../../../../utils/CredentialsValidator.js";

export default function NormocontrollerProfilePersonal() {
    const [email, setEmail] = useState('');
    const [fio, setFio] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const onEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const onFioInput = (e) => {
        let fio = e.target.value;
        setFio(e.target.value);
        let fioPartsIndex1 = fio.indexOf(' ');
        let fioPartsIndex2 = fio.lastIndexOf(' ');

        let lastName = fio.substring(0, fioPartsIndex1);
        let firstName = fio.substring(fioPartsIndex1 + 1, fioPartsIndex2);
        let middleName = fio.substring(fioPartsIndex2 + 1);

        setLastName(lastName);
        setFirstName(firstName);
        setMiddleName(middleName);
    };

    const onFirstnameInput = (e) => {
        setFirstName(e.target.value);
    };

    const onLastnameInput = (e) => {
        setLastName(e.target.value);
    };

    const onMiddlenameInput = (e) => {
        setMiddleName(e.target.value);
    };

    const onOldPasswordInput = (e) => {
        setOldPassword(e.target.value);
    };

    const onNewPasswordInput = (e) => {
        setNewPassword(e.target.value);
    };

    useEffect(() => {
        (async () => {
            let receivedUser = await AccountsService.getAccountDataById(AuthService.getLocalUserData().id);
            setLastName(receivedUser.lastName);
            setFirstName(receivedUser.firstName);
            setMiddleName(receivedUser.middleName);
            setEmail(receivedUser.email);
        })();
    }, []);

    const [personalDataUpdationComplete, setPersonalDataUpdationComplete] = useState(false);
    const [personalDataUpdationFailed, setPersonalDataUpdationFailed] = useState(false);
    const [personalDataUpdationFailureReason, setPersonalDataUpdationFailureReason] = useState('');

    const [passwordUpdationComplete, setPasswordUpdationComplete] = useState(false);
    const [passwordUpdationFailed, setPasswordUpdationFailed] = useState(false);
    const [passwordUpdationFailureReason, setPasswordUpdationFailureReason] = useState('');

    const onPersonalInfoUpdate = async (e) => {
        e.preventDefault();
        let patchAccountDto = new PatchAccountDto(email, firstName, middleName, lastName);
        setPersonalDataUpdationComplete(false);
        try {
            setPersonalDataUpdationFailed(false);
            setPersonalDataUpdationFailureReason('');

            await AccountsService.patchStudentAccount(AuthService.getLocalUserData().id, patchAccountDto);

            setPersonalDataUpdationComplete(true);
        } catch (e) {
            setPersonalDataUpdationFailed(true);
            setPersonalDataUpdationFailureReason(e.message);
        }
    };

    const onPasswordUpdate = async (e) => {
        e.preventDefault();
        setPasswordUpdationComplete(false);
        try {
            setPasswordUpdationFailed(false);
            setPasswordUpdationFailureReason('');

            await AccountsService.patchAccountPassword(AuthService.getLocalUserData().id, newPassword);

            setPasswordUpdationComplete(true);
        } catch (e) {
            setPasswordUpdationFailed(true);
            setPasswordUpdationFailureReason(e.message);
        }
    };

    // TODO: Сделать валидацию email
    const isPersonalDataFormCorrect = () => {
        return CredentialsValidator.validateNormocontrollerPersonalDataUpdatingForm({firstName, lastName, email});
    };

    // TODO: Сделать подтверждение корректности данных с сервера типа password
    const isPasswordFormCorrect = () => {
        return CredentialsValidator.validatePasswordUpdatingForm({oldPassword, newPassword});
    };

    return (
        <div>
            <Header/>
            <div className={css.studentProfilePersonal}>
                <div className={css.sections}>
                    <form className={`${css.section} ${css.sectionTop}`} onSubmit={onPersonalInfoUpdate}>
                        <h1 className={css.section__header}>Личная информация</h1>
                        <div className={css.inputBlock}>
                            <p className={css.inputBlock__header}>ФИО</p>
                            <input className={css.inputBlock__input} type={'text'} placeholder={'ФИО'} value={fio}
                                   onInput={onFioInput}/>
                            {/*<input type={'text'} placeholder={'Фамилия'} value={lastName} onInput={onLastnameInput}/>*/}
                            {/*<input type={'text'} placeholder={'Имя'} value={firstName} onInput={onFirstnameInput}/>*/}
                            {/*<input type={'text'} placeholder={'Отчество'} value={middleName} onInput={onMiddlenameInput}/>*/}
                        </div>
                        <div className={css.inputBlock}>
                            <p className={css.inputBlock__header}>Адрес электронной почти</p>
                            <input className={css.inputBlock__input} type={'email'} placeholder={'E-mail'} value={email}
                                   onInput={onEmailInput}/>
                        </div>
                        <input className={css.applyButton} disabled={!isPersonalDataFormCorrect()} type='submit'
                               value={'Обновить'}/>
                        {personalDataUpdationFailed && <p className={css.updateError}>Обновление данных не удалось</p>}
                        {personalDataUpdationComplete &&
                            <p className={css.updateSuccess}>Ваши данные успешно обновлены!</p>}
                    </form>
                    <form className={`${css.section} ${css.sectionBottom}`} onSubmit={onPasswordUpdate}>
                        <h1 className={css.section__header}>Пароль</h1>
                        <div className={css.inputBlock}>
                            <p className={css.inputBlock__header}>Введите старый пароль</p>
                            <input className={css.inputBlock__input} type={'password'} placeholder={'Старый пароль'}
                                   value={oldPassword}
                                   onInput={onOldPasswordInput}/>
                        </div>
                        <div className={css.inputBlock}>
                            <p className={css.inputBlock__header}>Введите новый пароль</p>
                            <input className={css.inputBlock__input} type={'password'} placeholder={'Новый пароль'}
                                   value={newPassword}
                                   onInput={onNewPasswordInput}/>
                        </div>
                        {/*<a className={css.forgotPassword}>Не помню пароль</a>*/}
                        <input className={css.applyButton} disabled={!isPasswordFormCorrect()} type='submit'
                               value={'Изменить'}/>
                        {passwordUpdationFailed && <p className={css.updateError}>Обновление пароля не удалось</p>}
                        {passwordUpdationComplete && <p className={css.updateSuccess}>Пароль успешно обновлен!</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}