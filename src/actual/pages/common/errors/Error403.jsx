import css from './Errors.module.css';
import Header from "../../../commonComponents/header/Header.jsx";
import questionedPanda from './static/questionedPanda.svg';
import Footer from "../../../commonComponents/footer/Footer.jsx";

export default function Error403() {
    return (
        <div className={css.error}>
            <Header/>
            <div className={css.content}>
                <h1 className={css.header}>Ошибка 403</h1>
                <h1 className={css.header}>Доступ запрещён</h1>
                <p className={css.description}>Вы пытаетесь получить ресурс, к которому у вас нет доступа</p>
                <img className={css.image} src={questionedPanda} alt={'Панда озадачена'}/>
            </div>
            <Footer/>
        </div>
    );
}