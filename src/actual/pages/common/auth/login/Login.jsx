import {useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthService from "../../../../services/AuthService.js";
import Header from "../../../../components/header/Header.jsx";

export default function Login() {
    const navigate = useNavigate();

    const [isAuthenticationFailed, setIsAuthenticationFailed] = useState(false);
    const [authenticationFailureReason, setAuthenticationFailureReason] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const onLoginSubmit = async (e) => {
        e.preventDefault()
        try {
            await AuthService.authenticateUserByEmailAndPassword(email, password);
        } catch (error) {
            setIsAuthenticationFailed(true);
            setAuthenticationFailureReason(error.message);
            return;
        }
        navigate('/profile');
    };

    return (
        <div>
            <Header/>
            <p>Login</p>
            <form onSubmit={onLoginSubmit}>
                <input type='email' placeholder='E-mail' value={email} onInput={onEmailInput}/>
                <input type='password' placeholder='Пароль' value={password} onInput={onPasswordInput}/>
                <input type='submit' value='Войти'/>
            </form>
            {isAuthenticationFailed && <div>{authenticationFailureReason}</div>}
        </div>
    );
}
