import css from './GiveFeedbackPopUp.module.css';
import {useEffect, useRef, useState} from "react";
import pandaWithHeartImg from './static/panda_with_hear.png';
import closeIco from './static/close_ico.svg';
import scrollLock from 'scroll-lock';
import FeedbackService from "../../services/FeedbackService.js";

export default function GiveFeedbackPopUp({isPopUpShowed = true}) {
    const [isShowed, setIsShowed] = useState(isPopUpShowed);

    const feedbackRef = useRef();

    useEffect(() => {
        FeedbackService.setFeedbackIsShowedBefore();
        if(isShowed) {
            scrollLock.disablePageScroll();
            window.document.addEventListener('keydown', onEscapePressed);
        }else{
            window.document.removeEventListener('keydown', onEscapePressed);
            scrollLock.enablePageScroll();
        }

    }, [isShowed]);

    const onEscapePressed = (e) => {
        if (e.key === "Escape") {
            closePopUp();
        }
    };

    const onGiveFeedbackClick = () => {
        feedbackRef.current.click();
    };

    const closePopUp = (e) => {
        setIsShowed(false);
    };

    const clickPropagationBlock = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={`${isShowed ? css.popupPage : css.hidden}`} onClick={closePopUp}>
            <div className={css.popup} onClick={clickPropagationBlock}>
                <h1 className={css.popup__header}>Обратная связь</h1>
                <img className={css.popup__closeButton} src={closeIco} onClick={closePopUp} title={'Закрыть'}
                     alt={'Закрыть'}/>
                <p className={css.popup__text}>Данный сервис всё ещё находится в разработке, и мы бы хотели услышать <a
                    className={css.popup__link} rel="noopener noreferrer" target="_blank"
                    ref={feedbackRef}
                    href={'https://forms.gle/hewHJgWNdH91eakYA'}>ваше
                    мнение о нём</a>, чтобы сделать его ещё лучше!</p>
                <img className={css.popup__image} src={pandaWithHeartImg} alt={'Панда с сердечком'}/>
                <button className={css.popup__button} onClick={onGiveFeedbackClick}>Пройти</button>
            </div>
        </div>
    );
}