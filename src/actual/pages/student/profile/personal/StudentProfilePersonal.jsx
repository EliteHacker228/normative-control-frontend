import AuthService from "../../../../services/AuthService.js";
import css from './StudentProfilePersonal.module.css';
import {useEffect, useState} from "react";
import Header from "../../../../commonComponents/header/Header.jsx";
import AccountsService from "../../../../services/AccountsService.js";
import AcademicalGroupsService from "../../../../services/AcademicalGroupsService.js";
import UpdateAccountDto from "../../../../dto/accounts/UpdateAccountDto.js";
import CredentialsValidator from "../../../../utils/CredentialsValidator.js";
import Footer from "../../../../commonComponents/footer/Footer.jsx";

export default function StudentProfilePersonal() {
    const [academicalGroups, setAcademicalGroups] = useState([]);

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [academicGroupId, setAcademicGroupId] = useState('');
    const [normocontrollerFullName, setNormocontrollerFullName] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const onEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const onFullNameInput = (e) => {
        setFullName(e.target.value);
    };

    const onAcademicGroupIdInput = (e) => {
        setAcademicGroupId(e.target.value);
        let targetNormocontroller = academicalGroups[e.target.selectedIndex - 1].normocontroller;
        setNormocontrollerFullName(targetNormocontroller.fullName);
    };

    const onOldPasswordInput = (e) => {
        setOldPassword(e.target.value);
    };

    const onNewPasswordInput = (e) => {
        setNewPassword(e.target.value);
    };

    useEffect(() => {
        (async () => {
            await fetchUserData();
        })();
    }, []);

    const fetchUserData = async () => {
        let receivedUser = await AccountsService.getAccountDataById(AuthService.getLocalUserData().id);
        setFullName(receivedUser.fullName);
        setEmail(receivedUser.email);

        setAcademicGroupId(receivedUser.academicGroup.id);
        setNormocontrollerFullName(receivedUser.academicGroup.normocontroller.fullName);
        let receivedAcademicalGroups = await AcademicalGroupsService.getAcademicalGroups();
        setAcademicalGroups(receivedAcademicalGroups);
    };

    const [personalDataUpdationComplete, setPersonalDataUpdationComplete] = useState(false);
    const [personalDataUpdationFailed, setPersonalDataUpdationFailed] = useState(false);
    const [personalDataUpdationFailureReason, setPersonalDataUpdationFailureReason] = useState('');

    const [passwordUpdationComplete, setPasswordUpdationComplete] = useState(false);
    const [passwordUpdationFailed, setPasswordUpdationFailed] = useState(false);
    const [passwordUpdationFailureReason, setPasswordUpdationFailureReason] = useState('');

    const onPersonalInfoUpdate = async (e) => {
        e.preventDefault();
        let patchAccountDto = new UpdateAccountDto(email, fullName, academicGroupId);
        setPersonalDataUpdationComplete(false);
        try {
            setPersonalDataUpdationFailed(false);
            setPersonalDataUpdationFailureReason('');

            await AccountsService.updateAccountData(AuthService.getLocalUserData().id, patchAccountDto);
            await fetchUserData();

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
        return CredentialsValidator.validateStudentPersonalDataUpdatingForm({fullName, email, academicGroupId});
    };

    // TODO: Сделать подтверждение корректности данных с сервера типа password и academicGroup
    const isPasswordFormCorrect = () => {
        return CredentialsValidator.validatePasswordUpdatingForm({oldPassword, newPassword});
    };

    return (
        <div>
            <Header/>
            <div className={css.studentProfilePersonal}>
                <p className={css.studentProfilePersonal__header}>Личная информация</p>
                <div className={css.sections}>
                    <form className={`${css.section} ${css.sectionLeft}`} onSubmit={onPersonalInfoUpdate}>
                        <div className={css.inputBlock}>
                            <p className={css.inputBlock__header}>ФИО</p>
                            <input className={css.inputBlock__input} type={'text'} placeholder={'ФИО'} value={fullName} onInput={onFullNameInput}/>
                        </div>
                        <div className={css.inputBlock}>
                            <p className={css.inputBlock__header}>Адрес электронной почти</p>
                            <input className={css.inputBlock__input} type={'email'} placeholder={'E-mail'} value={email} onInput={onEmailInput}/>
                        </div>
                        <div className={css.inputBlock}>
                            <p className={css.inputBlock__header}>Группа</p>
                            <select className={css.inputBlock__input} placeholder='Академическая группа' onChange={onAcademicGroupIdInput}>
                                <option value='' disabled>-</option>
                                {
                                    academicalGroups
                                        .map((academicalGroup, index) =>
                                            <option id={index} key={index} value={academicalGroup.id}
                                                    selected={academicGroupId === academicalGroup.id}>{academicalGroup.name}</option>
                                        )
                                }
                            </select>
                        </div>
                        <div className={css.inputBlock}>
                            <p className={css.inputBlock__header}>Нормоконтролер</p>
                            <input className={css.inputBlock__input} type={'text'} placeholder={'Нормоконтролер'} value={normocontrollerFullName}
                                   disabled={true}/>
                        </div>
                        <input className={css.applyButton} disabled={!isPersonalDataFormCorrect()} type='submit' value={'Обновить'}/>
                        {personalDataUpdationFailed && <p className={css.updateError}>Обновление данных не удалось</p>}
                        {personalDataUpdationComplete && <p className={css.updateSuccess}>Ваши данные успешно обновлены!</p>}
                    </form>
                    <form className={`${css.section} ${css.sectionRight}`} onSubmit={onPasswordUpdate}>
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
                        <input className={css.applyButton} disabled={!isPasswordFormCorrect()} type='submit' value={'Изменить'}/>
                        {passwordUpdationFailed && <p className={css.updateError}>Обновление пароля не удалось</p>}
                        {passwordUpdationComplete && <p className={css.updateSuccess}>Пароль успешно обновлен!</p>}
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}