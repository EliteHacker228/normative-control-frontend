import css from './Welcome.module.css';
import welcome_panda_img from './welcome_panda.png';
import Header from "../../components/header/Header.jsx";

export default function Welcome() {
    return (
        <div>
            <Header/>
            <div className={css.content}>
                <div className={css.content__main}>
                    <h1 className={css.content__header}>Проверка вашей выпускной квалифицированной работы
                        на наличие ошибок оформления документа</h1>
                    <p className={css.content__text}>Сервис поддерживает файлы формата <b>docx</b> объемом
                        до <b>20МБ.</b></p>
                    <div className={css.content__upload}>
                        <button className={`${css.button} ${css.button_upload} ${css.button_red} ${css.button_shadow}`}>ВЫБРАТЬ ФАЙЛ
                        </button>
                        <p className={css.content__hint}>или перетащите файл сюда</p>
                    </div>
                </div>
                <img className={css.content__image} src={welcome_panda_img} alt={'Panda is welcoming user'}/>
            </div>
        </div>
    );
}