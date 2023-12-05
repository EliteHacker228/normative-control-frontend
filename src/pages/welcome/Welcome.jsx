import css from './Welcome.module.css';
import welcome_panda_img from './welcome_panda.png';
import Header from "../../components/header/Header.jsx";

export default function Welcome() {
    return (
        <div>
            <Header/>
            <div className={css.contentWrap}>
                <div className={css.content}>
                    <div className={css.contentLeft}>
                        <h1 className={css.contentH1}>Проверка вашей выпускной квалифицированной работы
                            на наличие ошибок оформления документа</h1>
                        <p className={css.contentP}>Сервис поддерживает файлы формата <b>docx</b> объемом
                            до <b>20МБ.</b></p>
                        <div className={css.uploadBlock}>
                            <button className={css.uploadButton}>ВЫБРАТЬ ФАЙЛ</button>
                            <p className={css.uploadHint}>или перетащите файл сюда</p>
                        </div>
                    </div>
                    <div className={css.contentRight}>
                        <img className={css.contentImage} src={welcome_panda_img} alt={'Panda is welcoming user'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}