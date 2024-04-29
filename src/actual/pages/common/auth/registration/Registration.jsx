import Header from "../../../../components/header/Header.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import AcademicalGroupsService from "../../../../services/AcademicalGroupsService.js";
import AuthService from "../../../../services/AuthService.js";
import UserRegistrationDto from "../../../../dto/auth/UserRegistrationDto.js";

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

    const onPasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const onPasswordRepetitionInput = (e) => {
        setPasswordRepetition(e.target.value);
    };

    const [isRegistrationFailed, setIsRegistrationFailed] = useState(false);
    const [registrationFailureReason, setRegistrationFailureReason] = useState('');

    const onRegistrationSubmit = async (e) => {
        e.preventDefault()
        try {
            let userRegistrationDto = new UserRegistrationDto(
                email, firstName, lastName, middleName, academicGroupId, password
            );
            await AuthService.registerUserByUserRegistrationDto(userRegistrationDto);
        } catch (error) {
            setIsRegistrationFailed(true);
            setRegistrationFailureReason(error.message);
            return;
        }
        navigate('/profile');
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
            <p>Registration</p>
            <form onSubmit={onRegistrationSubmit} style={
                {
                    display: "flex",
                    flexDirection: "column",
                    width: "200px",
                    gap: "8px"
                }
            }>
                <input type='email' placeholder='E-mail' value={email} onInput={onEmailInput} readOnly
                       onFocus={(e) => e.target.removeAttribute('readonly')}/>
                <input type='text' placeholder='Имя' value={firstName} onInput={onFirstnameInput}/>
                <input type='text' placeholder='Фамилия' value={lastName} onInput={onLastnameInput}/>
                <input type='text' placeholder='Отчество (при наличии)' value={middleName} onInput={onMiddlenameInput}/>
                <select placeholder='Академическая группа' value={academicGroupId} onChange={onAcademicGroupIdInput}>
                    {
                        academicalGroups
                            .map((academicalGroup, index) =>
                                <option key={index} value={academicalGroup.id}>{academicalGroup.name}</option>)
                    }
                </select>

                <input type='password' placeholder='Пароль' value={password} onInput={onPasswordInput} readOnly
                       onFocus={(e) => e.target.removeAttribute('readonly')}/>
                <input type='password' placeholder='Повторите пароль' value={passwordRepetition}
                       onInput={onPasswordRepetitionInput} readOnly
                       onFocus={(e) => e.target.removeAttribute('readonly')}/>
                <input type='submit' value='Регистрация'/>
                {isRegistrationFailed && <div>{registrationFailureReason}</div>}
            </form>
        </div>
    );
}
