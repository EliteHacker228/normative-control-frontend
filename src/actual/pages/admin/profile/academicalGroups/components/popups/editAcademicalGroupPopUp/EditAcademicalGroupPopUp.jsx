import {useEffect, useState} from "react";
import scrollLock from "scroll-lock";
import AccountsService from "../../../../../../../services/AccountsService.js";
import AcademicalGroupsService from "../../../../../../../services/AcademicalGroupsService.js";
import AcademicalGroupValidator from "../../../../../../../utils/Validators/AcademicalGroupValidator.js";
import css from "../PopUp.module.css";
import closeIco from "../static/close_ico.svg";

export function EditAcademicalGroupPopUp({closePopUp, academicalGroup, updateGroups}) {

    const initialNormocontrollerId = academicalGroup.normocontroller ? academicalGroup.normocontroller.id : '';
    const initialAcademicGroupName = academicalGroup.name;

    const [normocontrollers, setNormocontrollers] = useState([]);
    const [normocontrollerId, setNormocontrollerId] = useState(initialNormocontrollerId);
    const [academicalGroupName, setAcademicalGroupName] = useState(initialAcademicGroupName);

    const [isEditionInProgress, setIsEditionInProgress] = useState(false);
    const [isEditionSuccessful, setIsEditionSuccessful] = useState(false);
    const [isEditionFailed, setIsEditionFailed] = useState(false);
    const [failureReason, setFailureReason] = useState('');

    const [editedAcademicalGroup, setEditedAcademicalGroup] = useState({});

    const clickPropagationBlock = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        scrollLock.disablePageScroll();
        window.document.addEventListener('keydown', onEscapePressed);

        updateNormocontrollersList();

        return () => {
            window.document.removeEventListener('keydown', onEscapePressed);
            scrollLock.enablePageScroll();
        };
    }, []);

    const updateNormocontrollersList = async () => {
        let normocontrollers = await AccountsService.getNormocontrollers();
        setNormocontrollers(normocontrollers);
    };

    const onNormocontrollerGroupIdInput = (e) => {
        let normocontrollerId = e.target.value;
        setNormocontrollerId(normocontrollerId);
    };

    const onEscapePressed = (e) => {
        if (e.key === "Escape") {
            onPopUpClose();
        }
    };

    const onPopUpClose = () => {
        if (!isEditionInProgress) {
            closePopUp();
        }
    };

    const onTryAgain = () => {
        resetPopUp();
    };

    const resetPopUp = () => {
        setIsEditionInProgress(false);
        setIsEditionFailed(false);
        setFailureReason('');
        setIsEditionSuccessful(false);
    };

    const onAcademicalGroupNameInput = (e) => {
        setAcademicalGroupName(e.target.value);
    };

    const addAcademicalGroup = async () => {
        let result;
        try {
            setIsEditionInProgress(true);
            setIsEditionFailed(false);
            setIsEditionSuccessful(false);

            result = await AcademicalGroupsService.editAcademicalGroup(academicalGroup.id, academicalGroupName, normocontrollerId);
            setEditedAcademicalGroup(result);
        } catch (e) {
            setIsEditionInProgress(false);
            setIsEditionFailed(true);
            setFailureReason(e.message);
            setIsEditionSuccessful(false);
            await updateGroups();
            return;
        }
        setIsEditionInProgress(false);
        setIsEditionFailed(false);
        setIsEditionSuccessful(true);
        await updateGroups();
    };

    const isGroupEditionFormValid = () => {
        return AcademicalGroupValidator.isAcademicalGroupEditionFormValid(academicalGroupName, normocontrollerId, initialAcademicGroupName, initialNormocontrollerId);
    };

    return (
        <div className={css.popupPage} onClick={onPopUpClose}>
            {!(isEditionFailed || isEditionSuccessful) && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Изменение группы</h1>
                    {!isEditionInProgress &&
                        <img className={css.header__closeButton} src={closeIco} onClick={onPopUpClose} title={'Закрыть'}
                             alt={'Закрыть'}/>}
                </div>
                <div>
                    <p className={css.popup__text}>Название группы</p>
                    <input className={css.popup__textInput} placeholder={'Название группы'} type={'text'}
                           value={academicalGroupName} onChange={onAcademicalGroupNameInput}/>
                </div>
                <div>
                    <p className={css.popup__text}>Нормоконтролер</p>
                    <select className={css.popup__textInput}
                            value={normocontrollerId}
                            onChange={onNormocontrollerGroupIdInput}>
                        <option value=''>-</option>
                        {
                            normocontrollers
                                .map((normocontroller, index) =>
                                    <option key={index}
                                            value={normocontroller.id}>{normocontroller.fullName}, {normocontroller.email}</option>)
                        }
                    </select>
                </div>
                <div className={css.popup__controls}>
                    <button className={`${css.popup__button} ${css.popup__button_edit}`}
                            disabled={isEditionInProgress || !isGroupEditionFormValid()}
                            onClick={addAcademicalGroup}>Изменить
                    </button>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            disabled={isEditionInProgress} onClick={onPopUpClose}>Отмена
                    </button>
                </div>
            </div>}

            {isEditionSuccessful && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Успешно</h1>
                    <img className={css.header__closeButton} src={closeIco} onClick={onPopUpClose} title={'Закрыть'}
                         alt={'Закрыть'}/>
                </div>
                <p className={css.popup__text}> Группа <b>{initialAcademicGroupName}</b> успешно изменена.</p>
                {initialAcademicGroupName !== editedAcademicalGroup.name &&
                    <p className={css.popup__text}> Ей присвоено название - <b>{editedAcademicalGroup.name}</b>
                    </p>}
                {editedAcademicalGroup.normocontroller && editedAcademicalGroup.normocontroller.id !== initialNormocontrollerId &&
                    <p className={css.popup__text}> Ей назначен нормоконтролер
                        - <b>{editedAcademicalGroup.normocontroller.fullName}, {editedAcademicalGroup.normocontroller.email}</b>
                    </p>}
                <div className={css.popup__controls}>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            onClick={onPopUpClose}>Закрыть
                    </button>
                </div>
            </div>}

            {isEditionFailed && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Ошибка</h1>
                    <img className={css.header__closeButton} src={closeIco} onClick={onPopUpClose} title={'Закрыть'}
                         alt={'Закрыть'}/>
                </div>
                <p className={css.popup__text}>Изменить группу <b>{initialAcademicGroupName}</b> не
                    удалось. {failureReason}
                </p>
                <div className={css.popup__controls}>
                    <button className={`${css.popup__button} ${css.popup__button_tryAgain}`}
                            onClick={onTryAgain}>Попробовать снова
                    </button>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            onClick={onPopUpClose}>Закрыть
                    </button>
                </div>
            </div>}
        </div>
    );
}