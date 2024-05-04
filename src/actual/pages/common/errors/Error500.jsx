import Header from "../../../commonComponents/header/Header.jsx";
import css from "./Errors.module.css";
import questionedPanda from "./static/questionedPanda.svg";
import Footer from "../../../commonComponents/footer/Footer.jsx";

export default function Error500() {
    return (
        <div className={css.error}>
            <Header/>
            <div className={css.content}>
                <h1 className={css.header}>Ошибка 500</h1>
                <h1 className={css.header}>Внутренняя ошибка сервера</h1>
                <p className={css.description}>Сервер не смог обработать задачу</p>
                <img className={css.image} src={questionedPanda} alt={'Панда озадачена'}/>
            </div>
            <Footer/>
        </div>
    );
}