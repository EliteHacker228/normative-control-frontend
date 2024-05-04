import Header from "../../../commonComponents/header/Header.jsx";
import css from "./Errors.module.css";
import questionedPanda from "./static/questionedPanda.svg";
import Footer from "../../../commonComponents/footer/Footer.jsx";

export default function Error404() {
    return (
        <div className={css.error}>
            <Header/>
            <div className={css.content}>
                <h1 className={css.header}>Ошибка 404</h1>
                <h1 className={css.header}>Не найдено</h1>
                <p className={css.description}>Ресурс, к которому вы пытаетесь получить доступ, не найден</p>
                <img className={css.image} src={questionedPanda} alt={'Панда озадачена'}/>
            </div>
            <Footer/>
        </div>
    );
}