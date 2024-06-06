import css from './AddAcademicalGroupPopUp.module.css';
import {useEffect, useState} from "react";
import scrollLock from "scroll-lock";
import closeIco from './static/close_ico.svg';
import AccountsService from "../../../../../../../services/AccountsService.js";
import AcademicalGroupsService from "../../../../../../../services/AcademicalGroupsService.js";
import AcademicalGroupValidator from "../../../../../../../utils/Validators/AcademicalGroupValidator.js";

export default function AddAcademicalGroupPopUp({closePopUp, updateGroups}) {

    const [normocontrollers, setNormocontrollers] = useState([]);
    const [normocontrollerId, setNormocontrollerId] = useState('');
    const [academicalGroupName, setAcademicalGroupName] = useState('');

    const [isCreationInProgress, setIsCreationInProgress] = useState(false);
    const [isCreationSuccessfull, setIsCreationSuccessfull] = useState(false);
    const [isCreationFailed, setIsCreationFailed] = useState(false);
    const [failureReason, setFailureReason] = useState('');

    const [createdAcademicalGroup, setCreatedAcademicalGroup] = useState({});

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
        console.log(normocontrollers);
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
        if (!isCreationInProgress) {
            closePopUp();
        }
    };

    const onAcademicalGroupNameInput = (e) => {
        setAcademicalGroupName(e.target.value);
    };

    const addAcademicalGroup = async () => {
        let result;
        try {
            setIsCreationInProgress(true);
            setIsCreationFailed(false);
            setIsCreationSuccessfull(false);

            result = await AcademicalGroupsService.createAcademicalGroup(academicalGroupName, normocontrollerId);
            setCreatedAcademicalGroup(result);
        } catch (e) {
            setIsCreationInProgress(false);
            setIsCreationFailed(true);
            setFailureReason(e.message);
            setIsCreationSuccessfull(false);
            return;
        }
        setIsCreationInProgress(false);
        setIsCreationFailed(false);
        setIsCreationSuccessfull(true);
        await updateGroups();
    };

    const isGroupCreationFormValid = () => {
        return AcademicalGroupValidator.isAcademicalGroupCreationFormValid(academicalGroupName, normocontrollerId);
    };

    return (
        <div className={css.popupPage} onClick={onPopUpClose}>
            {!(isCreationFailed || isCreationSuccessfull) && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Добавление группы</h1>
                    {!isCreationInProgress &&
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
                    <button className={`${css.popup__button} ${css.popup__button_add}`} disabled={isCreationInProgress || !isGroupCreationFormValid()}
                            onClick={addAcademicalGroup}>Добавить
                    </button>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            disabled={isCreationInProgress} onClick={onPopUpClose}>Отмена
                    </button>
                </div>
            </div>}
            {isCreationSuccessfull && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Успешно</h1>
                    <img className={css.header__closeButton} src={closeIco} onClick={onPopUpClose} title={'Закрыть'}
                         alt={'Закрыть'}/>
                </div>
                <div>
                    <p className={css.popup__text}> Группа <b>{academicalGroupName}</b> успешно создана.</p>
                    {createdAcademicalGroup.normocontroller && <p className={css.popup__text}> Её нормоконтролером
                        назначен <b>{createdAcademicalGroup.normocontroller.fullName}, {createdAcademicalGroup.normocontroller.email}</b>
                    </p>}
                </div>
                <div className={css.popup__controls}>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            onClick={onPopUpClose}>Закрыть
                    </button>
                </div>
            </div>}
            {isCreationFailed && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Ошибка</h1>
                    <img className={css.header__closeButton} src={closeIco} onClick={onPopUpClose} title={'Закрыть'}
                         alt={'Закрыть'}/>
                </div>
                <p className={css.popup__text}>Создать группу <b>{academicalGroupName}</b> не удалось. {failureReason}</p>
                <div className={css.popup__controls}>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            onClick={onPopUpClose}>Закрыть
                    </button>
                </div>
            </div>}
        </div>
    );
}