import css from "../AuthPopUp.module.css";
import {useEffect, useState} from "react";
import AuthUtils from "../../../../utils/authUtils/AuthUtils.js";
import AuthService from "../../../../services/auth/AuthService.js";
import WrongCredentialsError from "../../../../assets/WrongCredentialsError.js";
import CredentialsAlreadyInUse from "../../../../assets/CredentialsAlreadyInUse.js";
import AcademicGroupsService from "../../../../services/academicGroups/AcademicGroupsService.js";

export default function Registration({onAuth}) {

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

    const [isRegistrationFailed, setIsRegistrationFailed] = useState(false);
    const [registrationFailureReason, setRegistrationFailureReason] = useState('');

    const [isEmailWrongDomain, setIsEmailWrongDomain] = useState(false);
    const [isPasswrodsMismathes, setIsPasswrodsMismathes] = useState(false);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        (async () => {
            let groups = await AcademicGroupsService.getAcademicGroups();
            setAcademicGroups(groups);

            let normocontrollers = await AcademicGroupsService.getNormocontrollers();
            setNormocontrollers(normocontrollers);
        })();
    }, []);

    const onEmailInput = (e) => {
        const currentEmail = e.target.value
        setIsRegistrationFailed(false);
        setEmail(currentEmail);
        setIsEmailWrongDomain(!AuthUtils.isEmailCorrect(currentEmail));
    }

    const onPasswordInput = (e) => {
        const currentPassword = e.target.value;
        setIsRegistrationFailed(false);
        setPassword(currentPassword);
        if (currentPassword !== passwordRepetition)
            setIsPasswrodsMismathes(true);
        else
            setIsPasswrodsMismathes(false);
    }

    const onPasswordRepetitionInput = (e) => {
        const currentRepetitionPassword = e.target.value;
        setIsRegistrationFailed(false);
        setPasswordRepetition(currentRepetitionPassword);
        if (currentRepetitionPassword !== password)
            setIsPasswrodsMismathes(true);
        else
            setIsPasswrodsMismathes(false);
    }

    const registrationOnSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true);
        setIsRegistrationFailed(false);
        try {
            await AuthService.registerWithCredentials(email, lastName, firstName, middleName, academicGroupdId, normocontrollerId, password);
            onAuth();
        } catch (e) {
            if (e instanceof CredentialsAlreadyInUse) {
                setIsRegistrationFailed(true);
                setRegistrationFailureReason('Указанный вами e-mail уже используется в системе')
            } else {
                setIsRegistrationFailed(true);
                setRegistrationFailureReason('Попытка регистрации не удалась. Пожалуйста, попробуйте снова');
            }
        }
        setIsPending(false);
    }

    const isFormDisabled = () => {
        return !(AuthUtils.isEmailCorrect(email) && lastName && firstName && password && passwordRepetition && password === passwordRepetition) || isPending;
    };

    return (
        <form className={css.authForm} onSubmit={registrationOnSubmit}>
            <h2 className={css.authForm__header}>Регистрация</h2>
            <input className={css.authForm__input} type={'text'} placeholder={'E-mail'}
                   onChange={onEmailInput}/>
            <input className={css.authForm__input} type={'text'} placeholder={'Фамилия'}
                   onInput={(e) => setLastName(e.target.value)}/>
            <input className={css.authForm__input} type={'text'} placeholder={'Имя'}
                   onInput={(e) => setFirstName(e.target.value)}/>
            <input className={css.authForm__input} type={'text'} placeholder={'Отчество (оционально)'}
                   onInput={(e) => setMiddleName(e.target.value)}/>
            <p className={css.authForm__text}>Академическая группа</p>
            <select className={css.authForm__select} name="academicGroupdId" value={academicGroupdId}
                    onChange={(e) => setAcademicGroupId(e.target.value)}>
                <option value="">-</option>
                {
                    academicGroups.map((academicGroup) =>
                        <option value={academicGroup.id}>
                            {academicGroup.name}
                        </option>)
                }
            </select>
            <p className={css.authForm__text}>Нормоконтролер</p>
            <select className={css.authForm__select} name="normocontrollerId" value={normocontrollerId}
                    onChange={(e) => setNormocontrollerId(e.target.value)}>
                <option value="">-</option>
                {
                    normocontrollers.map((normocontroller) =>
                        <option value={normocontroller.id}>
                            {`${normocontroller.lastName} ${normocontroller.firstName[0]}. ${normocontroller.lastName[0]}.`}
                        </option>)
                }
            </select>
            <input className={css.authForm__input} type={'password'} placeholder={'Пароль'}
                   onChange={onPasswordInput}/>
            <input className={css.authForm__input} type={'password'} placeholder={'Повторите пароль'}
                   onChange={onPasswordRepetitionInput}/>
            <button className={`${css.button} ${css.button_upload} ${css.button_red}`}
                    disabled={isFormDisabled()}>
                Регистрация
            </button>
            {isEmailWrongDomain && email.trim() !== '' &&
                <p className={css.auth_error}>Укажите e-mail в домене <b>@urfu.me</b> или <b>@at.urfu.ru</b></p>}
            {isPasswrodsMismathes && <p className={css.auth_error}>Пароли не совпадают</p>}
            {isRegistrationFailed && <p className={css.auth_error}>{registrationFailureReason}</p>}
        </form>
    );
}