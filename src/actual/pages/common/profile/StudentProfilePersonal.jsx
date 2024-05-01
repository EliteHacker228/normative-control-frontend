import AuthService from "../../../services/AuthService.js";
import {useEffect, useState} from "react";
import Header from "../../../commonComponents/header/Header.jsx";
import AccountsService from "../../../services/AccountsService.js";
import AcademicalGroupsService from "../../../services/AcademicalGroupsService.js";
import PatchAccountDto from "../../../dto/accounts/PatchAccountDto.js";

export default function StudentProfilePersonal() {
    const [academicalGroups, setAcademicalGroups] = useState([]);

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [academicGroupId, setAcademicGroupId] = useState('');
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

    const onAcademicGroupIdInput = (e) => {
        setAcademicGroupId(e.target.value);
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
            setLastName(receivedUser.firstName);
            setFirstName(receivedUser.firstName);
            setMiddleName(receivedUser.middleName);
            setEmail(receivedUser.email);
            setAcademicGroupId(receivedUser.academicGroup.id);
            let receivedAcademicalGroups = await AcademicalGroupsService.getAcademicalGroups();
            setAcademicalGroups(receivedAcademicalGroups);
        })();
    }, []);

    const [personalDataUpdationFailed, setPersonalDataUpdationFailed] = useState(false);
    const [personalDataUpdationFailureReason, setPersonalDataUpdationFailureReason] = useState('');

    const [passwordUpdationFailed, setPasswordUpdationFailed] = useState(false);
    const [passwordUpdationFailureReason, setPasswordUpdationFailureReason] = useState('');

    const onPersonalInfoUpdate = async (e) => {
        e.preventDefault();
        let patchAccountDto = new PatchAccountDto(email, firstName, middleName, lastName, academicGroupId);
        try {
            await AccountsService.patchStudentAccount(AuthService.getLocalUserData().id, patchAccountDto);
        } catch (e) {
            setPersonalDataUpdationFailed(true);
            setPersonalDataUpdationFailureReason(e.message);
        }
    };

    const onPasswordUpdate = async (e) => {
        e.preventDefault();
        try {
            await AccountsService.patchAccountPassword(AuthService.getLocalUserData().id, newPassword);
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
                <select placeholder='Академическая группа' onChange={onAcademicGroupIdInput}>
                    <option value='' disabled>-</option>
                    {
                        academicalGroups
                            .map((academicalGroup, index) =>
                                <option key={index} value={academicalGroup.id}
                                        selected={academicGroupId === academicalGroup.id}>{academicalGroup.name}</option>
                            )
                    }
                </select>
                <input type='submit' value={'Обновить'}/>
                {personalDataUpdationFailed && <p>{personalDataUpdationFailureReason}</p>}
            </form>
            <form onSubmit={onPasswordUpdate}>
                <p>Пароль</p>
                <input type={'password'} placeholder={'Старый пароль'} value={oldPassword}
                       onInput={onOldPasswordInput}/>
                <input type={'password'} placeholder={'Новый пароль'} value={newPassword} onInput={onNewPasswordInput}/>
                <a>Не помню пароль</a>
                <input type='submit' value={'Изменить'}/>
                {passwordUpdationFailed && <p>{passwordUpdationFailureReason}</p>}
            </form>
        </div>
    );
}