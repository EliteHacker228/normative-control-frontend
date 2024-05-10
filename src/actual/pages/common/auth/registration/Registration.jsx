import Header from "../../../../commonComponents/header/Header.jsx";
import css from './Registration.module.css';
import {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import AcademicalGroupsService from "../../../../services/AcademicalGroupsService.js";
import AuthService from "../../../../services/AuthService.js";
import UserRegistrationDto from "../../../../dto/auth/UserRegistrationDto.js";
import Footer from "../../../../commonComponents/footer/Footer.jsx";
import CredentialsValidator from "../../../../utils/CredentialsValidator.js";

export default function Registration() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [academicGroupId, setAcademicGroupId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepetition, setPasswordRepetition] = useState('');
    const [isEulaAccepted, setIsEulaAccepted] = useState('');

    const onEmailInput = (e) => {
        setIsRegistrationFailed(false);
        setRegistrationFailureReason('');
        setEmail(e.target.value);
    };

    const onFirstnameInput = (e) => {
        setIsRegistrationFailed(false);
        setRegistrationFailureReason('');
        setFirstName(e.target.value);
    };

    const onLastnameInput = (e) => {
        setIsRegistrationFailed(false);
        setRegistrationFailureReason('');
        setLastName(e.target.value);
    };

    const onMiddlenameInput = (e) => {
        setIsRegistrationFailed(false);
        setRegistrationFailureReason('');
        setMiddleName(e.target.value);
    };

    const onAcademicGroupIdInput = (e) => {
        setIsRegistrationFailed(false);
        setRegistrationFailureReason('');
        setAcademicGroupId(e.target.value);
    };

    const onPasswordInput = (e) => {
        setIsRegistrationFailed(false);
        setRegistrationFailureReason('');
        setPassword(e.target.value);
    };

    const onPasswordRepetitionInput = (e) => {
        setIsRegistrationFailed(false);
        setRegistrationFailureReason('');
        setPasswordRepetition(e.target.value);
    };

    const [isRegistrationFailed, setIsRegistrationFailed] = useState(false);
    const [registrationFailureReason, setRegistrationFailureReason] = useState('');

    const getRegistrationDtoFromState = () => {
        return new UserRegistrationDto(
            email, firstName, lastName, middleName, academicGroupId, password
        );
    };

    const onRegistrationSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsRegistrationFailed(false);
            setRegistrationFailureReason('');

            let userRegistrationDto = getRegistrationDtoFromState();
            await AuthService.registerUserByUserRegistrationDto(userRegistrationDto);
        } catch (error) {
            setIsRegistrationFailed(true);
            setRegistrationFailureReason(error.message);
            return;
        }
        navigate(`/profile/${AuthService.getLocalUserData().role.toLowerCase()}/documents`);
    };

    const [academicalGroups, setAcademicalGroups] = useState([]);

    useEffect(() => {
        (async () => {
            let recievedAcademicalGroups = await AcademicalGroupsService.getAcademicalGroups();
            setAcademicalGroups(recievedAcademicalGroups);
        })();
    }, []);

    const isRegistrationFormCorrect = () => {
        return CredentialsValidator.validateRegistrationForm({
            email,
            firstName,
            middleName,
            lastName,
            academicGroupId,
            password,
            passwordRepetition,
        });
    };

    const onAcceptEula = () => {
        setIsRegistrationFailed(false);
        setRegistrationFailureReason('');
        setIsEulaAccepted(prevState => !prevState);
    };

    return (
        <div>
            <Header/>
            <div className={css.registration}>
                <p className={css.registration__header}>Регистрация</p>
                <form className={css.registrationForm} onSubmit={onRegistrationSubmit}>
                    <input className={css.registrationForm__textInput} type='email' placeholder='E-mail @urfu.me или @urfu.ru' value={email}
                           onInput={onEmailInput} readOnly
                           onFocus={(e) => e.target.removeAttribute('readonly')}/>
                    <input className={css.registrationForm__textInput} type='text' placeholder='Имя' value={firstName}
                           onInput={onFirstnameInput}/>
                    <input className={css.registrationForm__textInput} type='text' placeholder='Фамилия'
                           value={lastName} onInput={onLastnameInput}/>
                    <input className={css.registrationForm__textInput} type='text' placeholder='Отчество (при наличии)'
                           value={middleName}
                           onInput={onMiddlenameInput}/>
                    <select className={css.registrationForm__textInput} placeholder='Академическая группа'
                            value={academicGroupId}
                            onChange={onAcademicGroupIdInput}>
                        <option value='' disabled>-</option>
                        {
                            academicalGroups
                                .map((academicalGroup, index) =>
                                    <option key={index} value={academicalGroup.id}>{academicalGroup.name}</option>)
                        }
                    </select>

                    <input className={css.registrationForm__textInput} type='password' placeholder='Пароль (минимум 8 символов)'
                           value={password} onInput={onPasswordInput} readOnly
                           onFocus={(e) => e.target.removeAttribute('readonly')}/>
                    <input className={css.registrationForm__textInput} type='password' placeholder='Повторите пароль'
                           value={passwordRepetition}
                           onInput={onPasswordRepetitionInput} readOnly
                           onFocus={(e) => e.target.removeAttribute('readonly')}/>

                    {/*На момент тестирования не нужно, но после внедрения будет использоваться*/}

                    {/*<div className={css.labeledCheckbox}>*/}
                    {/*    <div className={css.labeledCheckbox__content}>*/}
                    {/*        <input className={css.labeledCheckbox__checkbox} type='checkbox' checked={isEulaAccepted}*/}
                    {/*               onInput={onAcceptEula}*/}
                    {/*               id='rememberPassword'/>*/}
                    {/*        <label className={css.labeledCheckbox__label} htmlFor='rememberPassword'>Я принимаю условия <NavLink className={css.noAccount__link} to={'/eula'}>Пользовательского соглашения</NavLink> и даю <NavLink className={css.noAccount__link} to={'/pdpa'}>согласие на обработку персональных данных</NavLink></label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <input type='submit' className={css.registrationButton} value='Регистрация'
                           disabled={!isRegistrationFormCorrect()}/>
                </form>
                <div className={css.registrationErrors}>
                    {isRegistrationFailed &&
                        <div className={css.registrationErrors__description}>{registrationFailureReason}</div>}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
