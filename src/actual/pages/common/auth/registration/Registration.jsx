import Header from "../../../../commonComponents/header/Header.jsx";
import css from './Registration.module.css';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import AcademicalGroupsService from "../../../../services/AcademicalGroupsService.js";
import AuthService from "../../../../services/AuthService.js";
import UserRegistrationDto from "../../../../dto/auth/UserRegistrationDto.js";
import Footer from "../../../../commonComponents/footer/Footer.jsx";

export default function Registration() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [academicGroupId, setAcademicGroupId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepetition, setPasswordRepetition] = useState('');

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

    const onRegistrationSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsRegistrationFailed(false);
            setRegistrationFailureReason('');

            let userRegistrationDto = new UserRegistrationDto(
                email, firstName, lastName, middleName, academicGroupId, password
            );
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

    return (
        <div>
            <Header/>
            <div className={css.registration}>
                <p className={css.registration__header}>Регистрация</p>
                <form className={css.registrationForm} onSubmit={onRegistrationSubmit}>
                    <input className={css.registrationForm__textInput} type='email' placeholder='E-mail' value={email}
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

                    <input className={css.registrationForm__textInput} type='password' placeholder='Пароль'
                           value={password} onInput={onPasswordInput} readOnly
                           onFocus={(e) => e.target.removeAttribute('readonly')}/>
                    <input className={css.registrationForm__textInput} type='password' placeholder='Повторите пароль'
                           value={passwordRepetition}
                           onInput={onPasswordRepetitionInput} readOnly
                           onFocus={(e) => e.target.removeAttribute('readonly')}/>
                    <input type='submit' className={css.registrationButton} value='Регистрация'/>
                </form>
                <div className={css.registrationErrors}>
                    {isRegistrationFailed &&
                        <div className={css.registrationErrors__description}>Регистрация не удалась</div>}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
