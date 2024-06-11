import {useEffect, useState} from "react";
import AccountsService from "../../../../../services/AccountsService.js";
import AuthService from "../../../../../services/AuthService.js";
import AcademicalGroupsService from "../../../../../services/AcademicalGroupsService.js";
import UpdateAccountDto from "../../../../../dto/accounts/UpdateAccountDto.js";
import CredentialsValidator from "../../../../../utils/Validators/CredentialsValidator.js";
import Header from "../../../../../commonComponents/header/Header.jsx";
import css from "../../../../student/profile/personal/StudentProfilePersonal.module.css";
import Footer from "../../../../../commonComponents/footer/Footer.jsx";

export default function EditStudentAccount({accountId}) {
    const [academicalGroups, setAcademicalGroups] = useState([]);

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [academicGroupId, setAcademicGroupId] = useState('');
    const [normocontrollerFullName, setNormocontrollerFullName] = useState('');
    const [password, setPassword] = useState('');

    const onEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const onFullNameInput = (e) => {
        setFullName(e.target.value);
    };

    const onAcademicGroupIdInput = (e) => {
        let academicGroupId = e.target.value;
        setAcademicGroupId(academicGroupId);
        if(academicGroupId) {
            let targetNormocontroller = academicalGroups[e.target.selectedIndex - 1].normocontroller;
            if(targetNormocontroller)
                setNormocontrollerFullName(targetNormocontroller.fullName);
            else
                setNormocontrollerFullName('Отсутствует');
        }else{
            setNormocontrollerFullName('Отсутствует');
        }
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
        setFullName(receivedUser.fullName);
        setEmail(receivedUser.email);

        if(receivedUser.academicGroup.id)
            setAcademicGroupId(receivedUser.academicGroup.id);
        else
            setAcademicGroupId('');

        if(receivedUser.academicGroup.normocontroller)
            setNormocontrollerFullName(receivedUser.academicGroup.normocontroller.fullName);
        else
            setNormocontrollerFullName('Отсутствует');

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

            await AccountsService.updateAccountData(accountId, patchAccountDto, false);
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

    // TODO: Сделать валидацию email
    const isPersonalDataFormCorrect = () => {
        return CredentialsValidator.validateStudentPersonalDataUpdatingForm({fullName, email, academicGroupId});
    };

    // TODO: Сделать подтверждение корректности данных с сервера типа password и academicGroup
    const isPasswordFormCorrect = () => {
        return CredentialsValidator.validatePassword(password);
    };

    return (
        <div>
            <Header/>
            <div className={css.studentProfilePersonal}>
                <p className={css.studentProfilePersonal__header}>Информация о аккаунте студента</p>
                <div className={css.sections}>
                    <form className={`${css.section} ${css.sectionLeft}`} onSubmit={onPersonalInfoUpdate}>
                        <div className={css.inputBlock}>
                            <p className={css.inputBlock__header}>ФИО</p>
                            <input className={css.inputBlock__input} type={'text'} placeholder={'ФИО'} value={fullName} onInput={onFullNameInput}/>
                        </div>
                        <div className={css.inputBlock}>
                            <p className={css.inputBlock__header}>Адрес электронной почты</p>
                            <input className={css.inputBlock__input} type={'email'} placeholder={'E-mail'} value={email} onInput={onEmailInput}/>
                        </div>
                        <div className={css.inputBlock}>
                            <p className={css.inputBlock__header}>Группа</p>
                            <select className={css.inputBlock__input} placeholder='Академическая группа' value={academicGroupId}
                                    onChange={onAcademicGroupIdInput}>
                                <option value=''>-</option>
                                {
                                    academicalGroups
                                        .map((academicalGroup, index) =>
                                            <option id={index} key={index} value={academicalGroup.id}>{academicalGroup.name}</option>
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
                        {personalDataUpdationComplete && <p className={css.updateSuccess}>Данные аккаунта успешно обновлены!</p>}
                    </form>
                    <form className={`${css.section} ${css.sectionRight}`} onSubmit={onPasswordUpdate}>
                        <h1 className={css.section__header}>Пароль</h1>
                        <div className={css.inputBlock}>
                            <p className={css.inputBlock__header}>Введите новый пароль</p>
                            <input className={css.inputBlock__input} type={'text'} placeholder={'Новый пароль (минимум 8 символов)'}
                                   value={password}
                                   onInput={onPasswordInput}/>
                        </div>
                        {/*<a className={css.forgotPassword}>Не помню пароль</a>*/}
                        <input className={css.applyButton} disabled={!isPasswordFormCorrect()} type='submit' value={'Изменить'}/>
                        {passwordUpdationFailed && <p className={css.updateError}>{passwordUpdationFailureReason}</p>}
                        {passwordUpdationComplete && <p className={css.updateSuccess}>Пароль успешно обновлен!</p>}
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}