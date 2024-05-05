import css from './Footter.module.css';

export default function Footer() {
    return (
        <div className={css.footer}>
            <div className={css.footer__content}>
                <p className={css.footer__element__left}>Данная версия является тестовой и не отражает качество финальной
                    версии сервиса.
                    Пройдите <a className={css.feedback} rel="noopener noreferrer" target="_blank"
                                href={'https://forms.gle/hewHJgWNdH91eakYA'}>короткий опрос</a>, чтобы помочь нам
                    улучшить качество финального продукта.</p>
                <p className={css.footer__element__right}>© ИИТ ИНФО «УрФУ имени первого Президента России Б.Н. Ельцина»</p>
            </div>
        </div>
    );
}