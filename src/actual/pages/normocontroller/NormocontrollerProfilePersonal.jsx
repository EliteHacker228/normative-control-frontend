import {useEffect, useState} from "react";
import AccountsService from "../../services/AccountsService.js";
import AcademicalGroupsService from "../../services/AcademicalGroupsService.js";
import PatchAccountDto from "../../dto/accounts/PatchAccountDto.js";
import AuthService from "../../services/AuthService.js";
import Header from "../../commonComponents/header/Header.jsx";

export default function NormocontrollerProfilePersonal() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const onEmailInput = (e) => {
        setEmail(e.target.value);
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

    return (
        <div>
            <Header/>
            <form onSubmit={onPersonalInfoUpdate}>
                <p>Личная информация</p>
                <input type={'text'} placeholder={'Фамилия'} value={lastName} onInput={onLastnameInput}/>
                <input type={'text'} placeholder={'Имя'} value={firstName} onInput={onFirstnameInput}/>
                <input type={'text'} placeholder={'Отчество'} value={middleName} onInput={onMiddlenameInput}/>
                <input type={'email'} placeholder={'E-mail'} value={email} onInput={onEmailInput}/>
                <input type='submit' value={'Обновить'}/>
                {personalDataUpdationFailed && <p>{personalDataUpdationFailureReason}</p>}
                {personalDataUpdationComplete && <p>Ваши данные успешно обновлены!</p>}
            </form>
            <form onSubmit={onPasswordUpdate}>
                <p>Пароль</p>
                <input type={'password'} placeholder={'Старый пароль'} value={oldPassword}
                       onInput={onOldPasswordInput}/>
                <input type={'password'} placeholder={'Новый пароль'} value={newPassword} onInput={onNewPasswordInput}/>
                <a>Не помню пароль</a>
                <input type='submit' value={'Изменить'}/>
                {passwordUpdationFailed && <p>{passwordUpdationFailureReason}</p>}
                {passwordUpdationComplete && <p>Пароль успешно обновлен!</p>}
            </form>
        </div>
    );
}