import css from "./Welcome.module.css";
import Header from "../../../commonComponents/header/Header.jsx";
import {Navigate, useNavigate} from "react-router-dom";

import pandaHappyWithMagnifier from "./static/panda_happy_with_magnifier.svg";
import pandaHappyOutOfBox from "./static/pand_happy_out_of_box.svg";

import gostApplicableVerification from "./static/fast_and_accurate_verification.svg";
import fastAndAccurateVerification from "./static/gost_applicable_verification.svg";
import AuthService from "../../../services/AuthService.js";
import Footer from "../../../commonComponents/footer/Footer.jsx";

export default function Welcome() {
    const navigate = useNavigate();

    const onLoginClick = () => {
        navigate('/login');
    };

    return (
        <div>
            <Header/>
            <div className={css.welcome}>
                <div className={css.aboutService}>
                    <div className={css.aboutService__info}>
                        <h1 className={css.welcome__header}>Проверка вашей выпускной квалификационной работы на наличие
                            ошибок
                            оформления
                            документа</h1>
                        <div className={css.pros}>
                            <div className={css.pros__item}>
                                <img className={css.pros__image} src={gostApplicableVerification}
                                     alt={'Символ щита с галочкой'}/>
                                <p className={css.pros__description}>Работы проверяются по ГОСТ</p>
                            </div>
                            <div className={css.pros__item}>
                                <img className={css.pros__image} src={fastAndAccurateVerification}
                                     alt={'Символ часов'}/>
                                <p className={css.pros__description}>Быстрая и точная проверка</p>
                            </div>
                        </div>
                        <div className={css.gettingStarted}>
                            <p className={css.gettingStarted__description}>Для работы с сервисом
                                необходимо <b>авторизироваться</b>
                            </p>
                            <button className={css.gettingStarted__login} onClick={onLoginClick}>Войти</button>
                        </div>
                    </div>
                    <div className={css.aboutService__banner}>
                        <img src={pandaHappyWithMagnifier} alt={'Радостная панда с увеличительным стеклом'}/>
                    </div>
                </div>
                <div className={css.howItWorks}>
                    <h1 className={css.howItWorks__header}>Как это работает?</h1>
                    <div className={css.howItWorks__sequence}>
                        <div className={css.howItWorks__connection}/>
                        <div className={css.howItWorks__step}>
                            <div className={css.howItWorks__number}>1</div>
                            <p className={css.howItWorks__description}>Пройди регистрацию</p>
                        </div>
                        <div className={css.howItWorks__step}>
                            <div className={css.howItWorks__number}>2</div>
                            <p className={css.howItWorks__description}>Загрузи файл с работой в формате docx</p>
                        </div>
                        <div className={css.howItWorks__step}>
                            <div className={css.howItWorks__number}>3</div>
                            <p className={css.howItWorks__description}>Получи проверенную работу и исправь все
                                ошибки</p>
                        </div>
                        <div className={css.howItWorks__step}>
                            <div className={css.howItWorks__number}>4</div>
                            <p className={css.howItWorks__description}>Работа прошла нормоконтроль!</p>
                        </div>
                    </div>
                    <div className={css.howItWorks__banner}>
                        <img src={pandaHappyOutOfBox} alt={'Радостная падна выглядывает из подарочной коробки'}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
