import css from './Faq.module.css';
import faq_panda_image from './faq_panda.png';
import faq_data_saving_ico from './faq_data_saving_ico.svg';
import faq_system_requirements_ico from './faq_system_requirements_ico.svg';
import faq_word_correction_ico from './faq_word_correction_ico.svg';
import faq_contents_ico from './faq_contents_ico.svg';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

export default function Faq() {
    return (
        <div>
            <Header/>
            <div className={css.content}>
                <div className={css.aboutFaq}>
                    <h1 className={css.aboutFaq__header}>
                        Ответы на часто задаваемые вопросы
                    </h1>
                    <p className={css.aboutFaq__text}>
                        Мы думаем, что они также могут быть полезны для вас
                    </p>
                    <img className={css.aboutFaq__img} src={faq_panda_image}
                         alt={'Thinking panda with question marks'}/>
                </div>
                <div className={css.faqCards}>
                    <div className={css.faqCard}>
                        <div className={css.faqCard__headSection}>
                            <img className={css.faqCard__headImage} src={faq_data_saving_ico}/>
                            <h1 className={css.faqCard_h1}>Вы сохраняете копию моих обработанных файлов?</h1>
                        </div>
                        <p className={css.faqCard__p}>
                            <b>Нет.</b> Ваши файлы - только ваша собственность. Пока ваши файлы находятся на наших
                            серверах, они строго защищены, и никто не может получить к ним доступ. Мы храним
                            файлы
                            на протяжении 2 часов, чтобы вы могли их скачать. Сразу после этого они навсегда
                            удаляются с наших серверов. Мы не будем проверять, копировать или анализировать ваши
                            файлы.
                        </p>
                    </div>
                    <div className={css.faqCard}>
                        <div className={css.faqCard__headSection}>
                            <img className={css.faqCard__headImage} src={faq_system_requirements_ico}/>
                            <h1 className={css.faqCard_h1}>Каковы системные требования?</h1>
                        </div>
                        <p className={css.faqCard__p}>
                            У нас есть основные системные требования. Для бесперебойной работы нашего сервиса мы
                            рекомендуем вам работать со следующими браузерами: Chrome, Firefox, Internet Explorer
                            +10 и Safari.
                        </p>
                    </div>
                    <div className={css.faqCard}>
                        <div className={css.faqCard__headSection}>
                            <img className={css.faqCard__headImage} src={faq_word_correction_ico}/>
                            <h1 className={css.faqCard_h1}>Word подчеркивает правильное слово как неправильное: что
                                мне делать?</h1>
                        </div>
                        <p className={css.faqCard__p}>
                            Убедитесь, что текст написан <b>на нужной раскладке</b> (это указано в левом нижнем углу
                            окна
                            Word) и перепишите слово, если это потребуется. Важно: во избежании таких ошибок не
                            вставляйте текст в документ, перепишите его сами.
                        </p>
                    </div>
                    <div className={css.faqCard}>
                        <div className={css.faqCard__headSection}>
                            <img className={css.faqCard__headImage} src={faq_contents_ico}/>
                            <h1 className={css.faqCard_h1}>Почему пишется, что позиция главы неправильная хотя все
                                главы у меня есть и идут в правильном порядке?</h1>
                        </div>
                        <p className={css.faqCard__p}>
                            Проверьте <b>наличие пустых строк</b> с неверными уровнями параграфа (они кстати тоже
                            выделяются как ошибки).
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}