import css from './RemoveAcademicalGroupPopUp.module.css';
import closeIco from "./static/close_ico.svg";
import {useEffect, useState} from "react";
import FeedbackService from "../../../../../../../services/FeedbackService.js";
import scrollLock from "scroll-lock";
import AcademicalGroupsService from "../../../../../../../services/AcademicalGroupsService.js";

export default function RemoveAcademicalGroupPopUp({closePopUp, academicalGroup, updateGoups}) {

    const [isDeletionFailed, setIsDeletionFailed] = useState(false);
    const [isDeletionSuccessful, setIsDeletionSuccessful] = useState(false);
    const [isDeletionInProgress, setIsDeletionInProgress] = useState(false);

    const clickPropagationBlock = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        scrollLock.disablePageScroll();
        window.document.addEventListener('keydown', onEscapePressed);

        return () => {
            window.document.removeEventListener('keydown', onEscapePressed);
            scrollLock.enablePageScroll();
        };
    });

    const onEscapePressed = (e) => {
        if (e.key === "Escape") {
            onPopUpClose();
        }
    };

    const onDelete = async (e) => {
        try {
            setIsDeletionInProgress(true);
            setIsDeletionFailed(false);
            setIsDeletionSuccessful(false);
            await AcademicalGroupsService.deleteAcademicalGroupById(academicalGroup.id);
        } catch (e) {
            setIsDeletionInProgress(false);
            setIsDeletionFailed(true);
            setIsDeletionSuccessful(false);
            return;
        }
        setIsDeletionInProgress(false);
        setIsDeletionFailed(false);
        setIsDeletionSuccessful(true);
        await updateGoups();
    };

    const onPopUpClose = () => {
        if (!isDeletionInProgress) {
            closePopUp();
        }
    };

    return (
        <div className={css.popupPage} onClick={onPopUpClose}>
            {!(isDeletionSuccessful || isDeletionFailed) && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Подтверждение</h1>
                    {!isDeletionInProgress && <img className={css.header__closeButton} src={closeIco} onClick={onPopUpClose} title={'Закрыть'}
                         alt={'Закрыть'}/>}
                </div>
                <p className={css.popup__text}>Вы собираетесь удалить группу <b>{academicalGroup.name}</b>. Данное
                    действие невозможно отменить. Вы
                    точно уверены, что хотите удалить группу?</p>
                <div className={css.popup__controls}>
                    <button className={`${css.popup__button} ${css.popup__button_delete}`}
                            disabled={isDeletionInProgress} onClick={onDelete}>Да, удалить группу
                    </button>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            disabled={isDeletionInProgress} onClick={closePopUp}>Отмена
                    </button>
                </div>
            </div>}
            {isDeletionFailed && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Ошибка</h1>
                    {!isDeletionInProgress &&
                        <img className={css.header__closeButton} src={closeIco} onClick={onPopUpClose} title={'Закрыть'}
                             alt={'Закрыть'}/>}
                </div>
                <p className={css.popup__text}>Удалить группу <b>{academicalGroup.name}</b> не удалось. Попробуйте позже</p>
                <div className={css.popup__controls}>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            disabled={isDeletionInProgress} onClick={closePopUp}>Закрыть
                    </button>
                </div>
            </div>}
            {isDeletionSuccessful && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Успешно</h1>
                    {!isDeletionInProgress &&
                        <img className={css.header__closeButton} src={closeIco} onClick={onPopUpClose} title={'Закрыть'}
                             alt={'Закрыть'}/>}
                </div>
                <p className={css.popup__text}>Группа <b>{academicalGroup.name}</b> была успешно удалена!</p>
                <div className={css.popup__controls}>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            disabled={isDeletionInProgress} onClick={closePopUp}>Закрыть
                    </button>
                </div>
            </div>}
        </div>
    );
}