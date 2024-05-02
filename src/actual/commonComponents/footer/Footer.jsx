import css from './Footter.module.css';

export default function Footer() {
    return (
        <div className={css.footer}>
            <div className={css.footer__content}>
                <p className={css.footer__element}>© ИИТ ИНФО «УрФУ имени первого Президента России Б.Н. Ельцина»</p>
            </div>
        </div>
    );
}