import css from "./Login.module.css";
import {useState} from "react";
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import AuthService from "../../../../services/AuthService.js";
import Header from "../../../../commonComponents/header/Header.jsx";
import Footer from "../../../../commonComponents/footer/Footer.jsx";

export default function Login() {
    const navigate = useNavigate();

    const [isAuthenticationFailed, setIsAuthenticationFailed] = useState(false);
    const [authenticationFailureReason, setAuthenticationFailureReason] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(true);

    const onEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const onRememberPasswordInput = (e) => {
        setRememberPassword(e.target.value);
    };

    const onLoginSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsAuthenticationFailed(false);
            setAuthenticationFailureReason('');

            await AuthService.authenticateUserByEmailAndPassword(email, password);
        } catch (error) {
            setIsAuthenticationFailed(true);
            setAuthenticationFailureReason(error.message);
            return;
        }
        navigate(`/profile/${AuthService.getLocalUserData().role.toLowerCase()}/documents`);
    };

    return (
        <div>
            <Header/>
            <div className={css.login}>
                <p className={css.login__header}>Вход</p>
                <form className={css.loginForm} onSubmit={onLoginSubmit}>
                    <input className={css.loginForm__textInput} type='email' placeholder='E-mail' value={email}
                           onInput={onEmailInput}/>
                    <input className={css.loginForm__textInput} type='password' placeholder='Пароль' value={password}
                           onInput={onPasswordInput}/>

                    <div className={css.labeledCheckbox}>
                        <div className={css.labeledCheckbox__content}>
                            <input className={css.labeledCheckbox__checkbox} type='checkbox' value={rememberPassword}
                                   id='rememberPassword'/>
                            <label className={css.labeledCheckbox__label} htmlFor='rememberPassword'>Запомнить
                                пароль</label>
                        </div>
                    </div>

                    <div>
                        <span className={css.forgotPassword}>Не помню пароль</span>
                    </div>


                    <input type='submit' value='Войти' className={css.loginButton}/>
                    <div className={css.horizontalRuler}/>
                    <div className={css.noAccount}>
                        <p className={css.noAccount__title}>Ещё нет аккаунта?</p>
                        <NavLink className={css.noAccount__link} to={'/registration'}>Создать аккаунт</NavLink>
                    </div>
                </form>
                {isAuthenticationFailed && <div>{authenticationFailureReason}</div>}
            </div>
            <Footer/>
        </div>
    );
}
