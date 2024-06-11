import css from '../PopUp.module.css';
import {useEffect, useState} from "react";
import scrollLock from "scroll-lock";
import closeIco from '../static/close_ico.svg';
import AccountsService from "../../../../../../../services/AccountsService.js";
import AcademicalGroupsService from "../../../../../../../services/AcademicalGroupsService.js";
import AcademicalGroupValidator from "../../../../../../../utils/Validators/AcademicalGroupValidator.js";
import Roles from "../../../../../../../domain/users/Roles.js";
import RoleTranslator from "../../../../../../../utils/Translators/RoleTranslator.js";
import CredentialsValidator from "../../../../../../../utils/Validators/CredentialsValidator.js";
import AuthService from "../../../../../../../services/AuthService.js";
import UserRegistrationDto from "../../../../../../../dto/auth/UserRegistrationDto.js";
import NormocontrollerRegistrationDto from "../../../../../../../dto/auth/NormocontrollerRegistrationDto.js";

export default function AddAccountPopUp({closePopUp, updateAccounts}) {

    const [normocontrollers, setNormocontrollers] = useState([]);
    const [normocontrollerId, setNormocontrollerId] = useState('');

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('Студент');
    const [academicalGroupId, setAcademicalGroupId] = useState('');
    const [password, setPassword] = useState('');

    const roles = [Roles.STUDENT, Roles.NORMOCONTROLLER];

    const [academicalGroups, setAcademicalGroups] = useState([]);

    const [isCreationInProgress, setIsCreationInProgress] = useState(false);
    const [isCreationSuccessfull, setIsCreationSuccessfull] = useState(false);
    const [isCreationFailed, setIsCreationFailed] = useState(false);
    const [failureReason, setFailureReason] = useState('');

    const getInputFunctionForStateSetter = (stateSetter) => {
        return (e) => {
            stateSetter(e.target.value);
        };
    };

    const [createdAccount, setCreatedAccount] = useState({});

    const clickPropagationBlock = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        scrollLock.disablePageScroll();
        window.document.addEventListener('keydown', onEscapePressed);

        updateAcademicalGroups();

        return () => {
            window.document.removeEventListener('keydown', onEscapePressed);
            scrollLock.enablePageScroll();
        };
    }, []);

    const updateNormocontrollersList = async () => {
        let normocontrollers = await AccountsService.getNormocontrollers();
        setNormocontrollers(normocontrollers);
    };

    const updateAcademicalGroups = async () => {
        let academicalGroups = await AcademicalGroupsService.getAcademicalGroups();
        setAcademicalGroups(academicalGroups);
    };

    const onNormocontrollerGroupIdInput = (e) => {
        let normocontrollerId = e.target.value;
        setNormocontrollerId(normocontrollerId);
    };

    const onEscapePressed = (e) => {
        if (e.key === "Escape") {
            onPopUpClose();
        }
    };

    const onPopUpClose = () => {
        if (!isCreationInProgress) {
            closePopUp();
        }
    };

    const onTryAgain = () => {
        resetPopUp();
    };

    const resetPopUp = () => {
        setIsCreationInProgress(false);
        setIsCreationFailed(false);
        setFailureReason('');
        setIsCreationSuccessfull(false);
    };

    const isAccountCreationFormValid = () => {
        let result;
        if (role === RoleTranslator.getRoleName(Roles.STUDENT)) {
            result = CredentialsValidator.validateRegistrationForm({
                email,
                firstName,
                middleName,
                lastName,
                academicGroupId: academicalGroupId,
                password,
                passwordRepetition: password
            });
        } else {
            result = CredentialsValidator.validateNormocontrollerCreationForm({
                email,
                firstName,
                middleName,
                lastName,
                password
            });

        }

        return result;
    };

    const addAccount = async () => {
        try {
            setIsCreationInProgress(true);
            setIsCreationFailed(false);
            setIsCreationSuccessfull(false);

            if (role === RoleTranslator.getRoleName(Roles.STUDENT)) {
                let studentRegistrationDto = new UserRegistrationDto(
                    email, firstName, lastName, middleName, academicalGroupId, password
                );
                await AuthService.registerUserByUserRegistrationDto(studentRegistrationDto, false);
            } else {
                let normocontrollerRegistrationDto = new NormocontrollerRegistrationDto(
                    email, firstName, lastName, middleName, password
                );
                await AuthService.registerNormocontroller(normocontrollerRegistrationDto);
            }
        } catch (e) {
            setIsCreationInProgress(false);
            setIsCreationFailed(true);
            setFailureReason(e.message);
            setIsCreationSuccessfull(false);
            await updateAccounts();
            return;
        }
        setIsCreationInProgress(false);
        setIsCreationFailed(false);
        setIsCreationSuccessfull(true);
        await updateAccounts();
    };

    return (
        <div className={css.popupPage} onClick={onPopUpClose}>
            {!(isCreationFailed || isCreationSuccessfull) && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Добавление пользователя</h1>
                    {!isCreationInProgress &&
                        <img className={css.header__closeButton} src={closeIco} onClick={onPopUpClose} title={'Закрыть'}
                             alt={'Закрыть'}/>}
                </div>
                <div>
                    <p className={css.popup__text}>Фамилия</p>
                    <input className={css.popup__textInput} placeholder={'Фамилия'} type={'text'}
                           value={lastName} onChange={getInputFunctionForStateSetter(setLastName)}/>
                </div>
                <div>
                    <p className={css.popup__text}>Имя</p>
                    <input className={css.popup__textInput} placeholder={'Имя'} type={'text'}
                           value={firstName} onChange={getInputFunctionForStateSetter(setFirstName)}/>
                </div>
                <div>
                    <p className={css.popup__text}>Отчество</p>
                    <input className={css.popup__textInput} placeholder={'Отчество (при наличии)'} type={'text'}
                           value={middleName} onChange={getInputFunctionForStateSetter(setMiddleName)}/>
                </div>
                <div>
                    <p className={css.popup__text}>E-mail</p>
                    <input className={css.popup__textInput} placeholder={'E-mail'} type={'email'}
                           value={email} onChange={getInputFunctionForStateSetter(setEmail)}/>
                </div>
                {/*<div>*/}
                {/*    <p className={css.popup__text}>Роль</p>*/}
                {/*    <input className={css.popup__textInput} placeholder={'Роль'} type={'text'}*/}
                {/*           value={role} onChange={getInputFunctionForStateSetter(setRole)}/>*/}
                {/*</div>*/}
                <div>
                    <p className={css.popup__text}>Роль</p>
                    <select className={css.popup__textInput} value={role}
                            onChange={getInputFunctionForStateSetter(setRole)}>
                        {roles.map((role, index) => <option key={index}
                                                            value={RoleTranslator.getRoleName(role)}>{RoleTranslator.getRoleName(role)}</option>)}
                    </select>
                </div>
                {role === 'Студент' && <div>
                    <p className={css.popup__text}>Группа</p>
                    <select className={css.popup__textInput}
                            value={academicalGroupId}
                            onChange={getInputFunctionForStateSetter(setAcademicalGroupId)}>
                        <option value=''>-</option>
                        {
                            academicalGroups
                                .map((academicalGroup, index) =>
                                    <option key={index}
                                            value={academicalGroup.id}>{academicalGroup.name}</option>)
                        }
                    </select>
                </div>}
                <div>
                    <p className={css.popup__text}>Пароль</p>
                    <input className={css.popup__textInput} placeholder={'Пароль'} type={'text'}
                           value={password} onChange={getInputFunctionForStateSetter(setPassword)}/>
                </div>
                <div className={css.popup__controls}>
                    <button className={`${css.popup__button} ${css.popup__button_add}`}
                            disabled={isCreationInProgress || !isAccountCreationFormValid()}
                            onClick={addAccount}>Добавить
                    </button>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            disabled={isCreationInProgress} onClick={onPopUpClose}>Отмена
                    </button>
                </div>
            </div>}
            {isCreationSuccessfull && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Успешно</h1>
                    <img className={css.header__closeButton} src={closeIco} onClick={onPopUpClose} title={'Закрыть'}
                         alt={'Закрыть'}/>
                </div>
                <div>
                    <p className={css.popup__text}> Аккаунт
                        пользователя <b>{`${firstName} ${lastName} ${middleName}`}</b> с адресом электронной
                        почты <b>{email}</b> успешно создан.</p>
                </div>
                <div className={css.popup__controls}>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            onClick={onPopUpClose}>Закрыть
                    </button>
                </div>
            </div>}
            {isCreationFailed && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Ошибка</h1>
                    <img className={css.header__closeButton} src={closeIco} onClick={onPopUpClose} title={'Закрыть'}
                         alt={'Закрыть'}/>
                </div>
                <p className={css.popup__text}>Создать аккаунт для
                    пользователя <b>{`${lastName} ${firstName} ${middleName}`}</b> с адресом электронной
                    почты <b>{email}</b> не удалось. {failureReason}</p>
                <div className={css.popup__controls}>
                    <button className={`${css.popup__button} ${css.popup__button_tryAgain}`}
                            onClick={onTryAgain}>Попробовать снова
                    </button>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            onClick={onPopUpClose}>Закрыть
                    </button>
                </div>
            </div>}
        </div>
    );
}