import css from "../Faq.module.css";
import faq_data_saving_ico from "../faq_data_saving_ico.svg";

export default function FaqCard({faq_image, faq_header, faq_content}){
  return (
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
  );
};