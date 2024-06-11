import {useEffect, useState} from "react";
import Roles from "../../../../../../../domain/users/Roles.js";
import scrollLock from "scroll-lock";
import AccountsService from "../../../../../../../services/AccountsService.js";
import AcademicalGroupsService from "../../../../../../../services/AcademicalGroupsService.js";
import RoleTranslator from "../../../../../../../utils/Translators/RoleTranslator.js";
import CredentialsValidator from "../../../../../../../utils/Validators/CredentialsValidator.js";
import UserRegistrationDto from "../../../../../../../dto/auth/UserRegistrationDto.js";
import AuthService from "../../../../../../../services/AuthService.js";
import NormocontrollerRegistrationDto from "../../../../../../../dto/auth/NormocontrollerRegistrationDto.js";
import css from "../PopUp.module.css";
import closeIco from "../static/close_ico.svg";

export default function DeleteAccountPopUp({closePopUp, accountOnDeletion, updateAccounts}) {

    const [isDeletionInProgress, setIsDeletionInProgress] = useState(false);
    const [isDeletionSuccessfull, setIsDeletionSuccessfull] = useState(false);
    const [isDeletionFailed, setIsDeletionFailed] = useState(false);
    const [failureReason, setFailureReason] = useState('');

    const getInputFunctionForStateSetter = (stateSetter) => {
        return (e) => {
            stateSetter(e.target.value);
        };
    };

    const clickPropagationBlock = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        scrollLock.disablePageScroll();
        window.document.addEventListener('keydown', onEscapePressed);

        // updateAcademicalGroups();

        return () => {
            window.document.removeEventListener('keydown', onEscapePressed);
            scrollLock.enablePageScroll();
        };
    }, []);

    const onEscapePressed = (e) => {
        if (e.key === "Escape") {
            onPopUpClose();
        }
    };

    const onPopUpClose = () => {
        if (!isDeletionInProgress) {
            closePopUp();
        }
    };

    const deleteAccount = async () => {
        try {
            setIsDeletionInProgress(true);
            setIsDeletionFailed(false);
            setIsDeletionSuccessfull(false);
            await AcademicalGroupsService.deleteAccountBy(accountOnDeletion.id);
        } catch (e) {
            setIsDeletionInProgress(false);
            setIsDeletionFailed(true);
            setFailureReason(e.message);
            setIsDeletionSuccessfull(false);
            await updateAccounts();
            return;
        }
        setIsDeletionInProgress(false);
        setIsDeletionFailed(false);
        setIsDeletionSuccessfull(true);
        await updateAccounts();
    };

    return (
        <div className={css.popupPage} onClick={onPopUpClose}>
            {!(isDeletionFailed || isDeletionSuccessfull) && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Удаление пользователя</h1>
                    {!isDeletionInProgress &&
                        <img className={css.header__closeButton} src={closeIco} onClick={onPopUpClose} title={'Закрыть'}
                             alt={'Закрыть'}/>}
                </div>
                <div>
                    <p className={css.popup__text}>Вы действительно хотите удалить
                        пользователя <b>{accountOnDeletion.fullName}</b> с адресом электронной
                        почты <b>{accountOnDeletion.email}</b>?</p>
                </div>
                <div className={css.popup__controls}>
                    <button className={`${css.popup__button} ${css.popup__button_delete}`}
                            disabled={isDeletionInProgress}
                            onClick={deleteAccount}>Удалить
                    </button>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            disabled={isDeletionInProgress} onClick={onPopUpClose}>Отмена
                    </button>
                </div>
            </div>}
            {isDeletionSuccessfull && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Успешно</h1>
                    <img className={css.header__closeButton} src={closeIco} onClick={onPopUpClose} title={'Закрыть'}
                         alt={'Закрыть'}/>
                </div>
                <div>
                    <p className={css.popup__text}> Аккаунт
                        пользователя <b>{accountOnDeletion.fullName}</b> с адресом электронной
                        почты <b>{accountOnDeletion.email}</b> успешно удален!</p>
                </div>
                <div className={css.popup__controls}>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            onClick={onPopUpClose}>Закрыть
                    </button>
                </div>
            </div>}
            {isDeletionFailed && <div className={css.popup} onClick={clickPropagationBlock}>
                <div className={css.header}>
                    <h1 className={css.header__text}>Ошибка</h1>
                    <img className={css.header__closeButton} src={closeIco} onClick={onPopUpClose} title={'Закрыть'}
                         alt={'Закрыть'}/>
                </div>
                <p className={css.popup__text}>Удалить аккаунт пользователя <b>{accountOnDeletion.fullName}</b> с
                    адресом электронной
                    почты <b>{accountOnDeletion.email}</b> не удалось. {failureReason}</p>
                <div className={css.popup__controls}>
                    <button className={`${css.popup__button} ${css.popup__button_cancel}`}
                            onClick={onPopUpClose}>Закрыть
                    </button>
                </div>
            </div>}
        </div>
    );
}