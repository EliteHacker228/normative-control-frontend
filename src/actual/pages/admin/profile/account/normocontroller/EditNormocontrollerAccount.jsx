import {useEffect, useState} from "react";
import AccountsService from "../../../../../services/AccountsService.js";
import AuthService from "../../../../../services/AuthService.js";
import UpdateAccountDto from "../../../../../dto/accounts/UpdateAccountDto.js";
import CredentialsValidator from "../../../../../utils/Validators/CredentialsValidator.js";
import Header from "../../../../../commonComponents/header/Header.jsx";
import css from "../../../../normocontroller/profile/personal/NormocontrollerProfilePersonal.module.css";
import Footer from "../../../../../commonComponents/footer/Footer.jsx";

export default function EditNormocontrollerAccount({accountId}) {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');

    const onEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const onFullNameInput = (e) => {
        setFullName(e.target.value);
    };

    const onPasswordInput = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        (async () => {
            await fetchUserData();
        })();
    }, []);

    const fetchUserData = async () => {
        let receivedUser = await AccountsService.getAccountDataById(accountId);
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

            await AccountsService.updateAccountData(accountId, updateAccountDto, false);
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

            await AccountsService.patchAccountPasswordAsAdmin(accountId, password);

            setPasswordUpdationComplete(true);
            setPassword('');
        } catch (e) {
            setPasswordUpdationFailed(true);
            setPasswordUpdationFailureReason(e.message);
        }
    };

    const isPersonalDataFormCorrect = () => {
        return CredentialsValidator.validateNormocontrollerPersonalDataUpdatingForm({fullName, email});
    };

    const isPasswordFormCorrect = () => {
        return CredentialsValidator.validatePassword(password);
    };

    return (
        <div>
            <Header/>
            <div className={css.normocontrollerProfilePersonal}>
                <div className={css.sections}>
                    <form className={`${css.section} ${css.sectionTop}`} onSubmit={onPersonalInfoUpdate}>
                        <h1 className={css.section__header}>Информация о аккаунте нормоконтролера</h1>
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
                            <p className={css.inputBlock__header}>Введите новый пароль</p>
                            <input className={css.inputBlock__input} type={'text'}
                                   placeholder={'Новый пароль (минимум 8 символов)'}
                                   value={password}
                                   onInput={onPasswordInput}/>
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