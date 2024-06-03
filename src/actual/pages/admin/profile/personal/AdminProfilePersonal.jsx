import {useEffect, useState} from "react";
import css from './AdminProfilePersonal.module.css';
import AccountsService from "../../../../services/AccountsService.js";
import AcademicalGroupsService from "../../../../services/AcademicalGroupsService.js";
import UpdateAccountDto from "../../../../dto/accounts/UpdateAccountDto.js";
import AuthService from "../../../../services/AuthService.js";
import Header from "../../../../commonComponents/header/Header.jsx";
import CredentialsValidator from "../../../../utils/Validators/CredentialsValidator.js";
import Footer from "../../../../commonComponents/footer/Footer.jsx";

export default function AdminProfilePersonal() {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const onEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const onFullNameInput = (e) => {
        setFullName(e.target.value);
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
        setEmail(receivedUser.email);
        setFullName(receivedUser.fullName);
    };

    const [personalDataUpdationComplete, setPersonalDataUpdationComplete] = useState(false);
    const [personalDataUpdationFailed, setPersonalDataUpdationFailed] = useState(false);
    const [personalDataUpdationFailureReason, setPersonalDataUpdationFailureReason] = useState('');

    const [passwordUpdationComplete, setPasswordUpdationComplete] = useState(false);
    const [passwordUpdationFailed, setPasswordUpdationFailed] = useState(false);
    const [passwordUpdationFailureReason, setPasswordUpdationFailureReason] = useState('');

    const onPersonalInfoUpdate = async (e) => {
        e.preventDefault();
        let updateAccountDto = new UpdateAccountDto(email, fullName);
        setPersonalDataUpdationComplete(false);
        try {
            setPersonalDataUpdationFailed(false);
            setPersonalDataUpdationFailureReason('');

            await AccountsService.updateAccountData(AuthService.getLocalUserData().id, updateAccountDto);
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

            await AccountsService.patchAccountPassword(AuthService.getLocalUserData().id, oldPassword, newPassword);

            setPasswordUpdationComplete(true);
            setNewPassword('');
            setOldPassword('');
        } catch (e) {
            setPasswordUpdationFailed(true);
            setPasswordUpdationFailureReason(e.message);
        }
    };

    const isPersonalDataFormCorrect = () => {
        return CredentialsValidator.validateNormocontrollerPersonalDataUpdatingForm({fullName, email});
    };

    const isPasswordFormCorrect = () => {
        return CredentialsValidator.validatePasswordUpdatingForm({oldPassword, newPassword});
    };

    return (
        <div>
            <Header/>
            <div className={css.adminProfilePersonal}>
                <div className={css.sections}>
                    <form className={`${css.section} ${css.sectionTop}`} onSubmit={onPersonalInfoUpdate}>
                        <h1 className={css.section__header}>Личная информация</h1>
                        <div className={css.inputBlock}>
                            <p className={css.inputBlock__header}>ФИО</p>
                            <input className={css.inputBlock__input} type={'text'} placeholder={'ФИО'} value={fullName}
                                   onInput={onFullNameInput}/>
                        </div>
                        <div className={css.inputBlock}>
                            <p className={css.inputBlock__header}>Адрес электронной почты</p>
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
                            <input className={css.inputBlock__input} type={'password'} placeholder={'Новый пароль (минимум 8 символов)'}
                                   value={newPassword}
                                   onInput={onNewPasswordInput}/>
                        </div>
                        {/*<a className={css.forgotPassword}>Не помню пароль</a>*/}
                        <input className={css.applyButton} disabled={!isPasswordFormCorrect()} type='submit'
                               value={'Изменить'}/>
                        {passwordUpdationFailed && <p className={css.updateError}>{passwordUpdationFailureReason}</p>}
                        {passwordUpdationComplete && <p className={css.updateSuccess}>Пароль успешно обновлен!</p>}
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}