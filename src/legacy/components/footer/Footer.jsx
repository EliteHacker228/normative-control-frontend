import css from './Footer.module.css';

export default function Footer(){
    return (
        <div className={css.footer}>
            <div className={css.footer_content}>
                <p className={css.footer_description}>@ ИИТ ИНФО «УрФУ имени первого Президента России Б.Н. Ельцина»</p>
            </div>
        </div>
    );
}