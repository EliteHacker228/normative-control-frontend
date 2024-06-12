import {NavLink, useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import Roles from "../../../../domain/users/Roles.js";
import DocumentsService from "../../../../services/DocumentsService.js";
import AcademicalGroupsService from "../../../../services/AcademicalGroupsService.js";
import AuthService from "../../../../services/AuthService.js";
import CsvDocumentsListDownloader from "../../../../utils/Downloaders/CsvDocumentsListDowloader.js";
import Header from "../../../../commonComponents/header/Header.jsx";
import css from "./AcademicalGroup.module.css";
import DocumentVerdictTranslators from "../../../../utils/Translators/DocumentVerdictTranslators.js";
import whiteDownloadIco from "./static/downloadIcoWhite.svg";
import Footer from "../../../../commonComponents/footer/Footer.jsx";
import RoleTranslator from "../../../../utils/Translators/RoleTranslator.js";
import AccountsService from "../../../../services/AccountsService.js";
import AddAccountPopUp from "./components/popups/addAccountPopUp/AddAccountPopUp.jsx";
import DeleteAccountPopUp from "./components/popups/deleteAccountPopUp/DeleteAccountPopUp.jsx";
import AccessForbiddenError from "../../../../errors/AccessForbiddenError.js";
import NotFoundError from "../../../../errors/NotFoundError.js";
import InternalServerError from "../../../../errors/InternalServerError.js";

export default function AcademicalGroup() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [academicalGroupId, setAcademicalGroupId] = useState('');

    const [accounts, setAccounts] = useState([]);
    const [filteredAccounts, setFilteredAccounts] = useState([]);

    const [searchInput, setSearchInput] = useState('');

    const [academicalGroup, setAcademicalGroup] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState(new Set([]));

    const roles = [Roles.STUDENT, Roles.NORMOCONTROLLER, Roles.ADMIN];
    const [selectedRoles, setSelectedRoles] = useState(new Set([]));

    const [isAddAccountPopUpShowed, setIsAddAccountPopUpShowed] = useState(false);
    const [isDeleteAccountPopUpShowed, setIsDeleteAccountPopUpShowed] = useState(false);

    const [accountOnDeletion, setAccountOnDeletion] = useState({});

    useEffect(() => {
        getPageData();
    }, []);

    const getPageData = async () => {
        await getPageDataByGroupId(+searchParams.get('id'));
    }

    const getPageDataByGroupId = async (academicalGroupId) => {
        try {
            let accounts = await AccountsService.getAccounts();
            let group = await AcademicalGroupsService.getAcademicalGroupById(academicalGroupId);
            setAcademicalGroup(group);
            accounts = accounts.filter(user => user.role === Roles.STUDENT && user.academicGroup.id === academicalGroupId);
            accounts.unshift(group.normocontroller);
            setAccounts(accounts);
            updateFilteredAccountsExplicitly(searchInput, accounts);
        }catch (error) {
            switch (error.constructor) {
                case AccessForbiddenError:
                    navigate('/errors/403', {replace: true});
                    break;
                case NotFoundError:
                    navigate('/errors/404', {replace: true});
                    break;
                case InternalServerError:
                    navigate('/errors/500', {replace: true});
                    break;
            }
        }
    };

    const onSearchInput = (e) => {
        let newSearchInput = e.target.value;
        setSearchInput(newSearchInput);
        updateFilteredAccounts(newSearchInput);
    };

    const updateFilteredAccounts = (localSearchInput) => {
        let filteredAccounts = accounts.filter(account => account.fullName.toLowerCase().includes(localSearchInput.toLowerCase()) || account.email.toLowerCase().includes(localSearchInput.toLowerCase()));
        setFilteredAccounts(filteredAccounts);
    };

    const updateFilteredAccountsExplicitly = (localSearchInput, accounts) => {
        let filteredAccounts = accounts.filter(account => account.fullName.toLowerCase().includes(localSearchInput.toLowerCase()) || account.email.toLowerCase().includes(localSearchInput.toLowerCase()));
        setFilteredAccounts(filteredAccounts);
    };

    const openAddAccountPopUp = () => {
        setIsAddAccountPopUpShowed(true);
    };

    const closeAddAccountPopUp = () => {
        setIsAddAccountPopUpShowed(false);
    };

    const openDeleteAccountPopUp = (e) => {
        setIsDeleteAccountPopUpShowed(true);
        let accountGroupOnDeletionIndex = e.target.parentNode.parentNode.id;
        let accountGroupOnDeletion = filteredAccounts[accountGroupOnDeletionIndex];
        setAccountOnDeletion(accountGroupOnDeletion);
    };

    const closeDeleteAccountPopUp = () => {
        setIsDeleteAccountPopUpShowed(false);
        setAccountOnDeletion({});
    };

    const editAccount = (e) => {
        let accountOnEditionIndex = e.target.parentNode.parentNode.id;
        let accountOnEdition = filteredAccounts[accountOnEditionIndex];
        // console.log(accountOnEdition.id);
        navigate(`/profile/admin/account?id=${accountOnEdition.id}`);
    };

    return (
        <div>
            <Header/>
            {isAddAccountPopUpShowed &&
                <AddAccountPopUp closePopUp={closeAddAccountPopUp} updateAccounts={getPageData}/>}
            {isDeleteAccountPopUpShowed &&
                <DeleteAccountPopUp closePopUp={closeDeleteAccountPopUp} accountOnDeletion={accountOnDeletion}
                                    updateAccounts={getPageData}/>}
            <div className={css.adminAccounts}>
                <h1 className={css.adminAccounts__header}>Управление учетными записями</h1>
                <div className={css.accounts}>
                    <div className={css.search}>
                        <div className={css.headerContainer}>
                            <p className={css.search__header}>Группа {academicalGroup.name}</p>
                        </div>
                        <div className={css.searchField}>
                            <input className={css.searchField__input} type='text'
                                   placeholder={'Введите ФИО или e-mail пользователя'} value={searchInput}
                                   onInput={onSearchInput}/>
                            {/*<img className={css.searchField__button} src={searchIco}/>*/}
                            <input className={css.searchField__button} type='submit' value=''/>
                        </div>
                    </div>
                    <h1 className={css.accounts__header}>Найденные учетные записи</h1>
                    {filteredAccounts.length === 0 &&
                        <p className={css.accounts__placeholder}>Учетные записи не найдены</p>}
                    {filteredAccounts.sort((a, b) => new Date(b.verificationDate).getTime() - new Date(a.verificationDate).getTime())
                        .map((account, index) => {
                            return (
                                <div id={index} key={index} className={css.accountsNode}>
                                    <div className={css.accountsNode__header}>
                                        <p className={css.accountsNode__description}><b>{account.fullName}</b></p>
                                        <p className={css.accountsNode__description}>{account.email}</p>
                                        <p className={css.accountsNode__description}>{RoleTranslator.getRoleName(account.role)}</p>
                                        {account.academicGroup &&
                                            <p className={css.accountsNode__description}>
                                                <b>{account.academicGroup.name}</b></p>
                                        }
                                    </div>
                                    <div className={css.accountsNode__buttons}>
                                        {account.role !== Roles.ADMIN && <button
                                            className={`${css.search__button} ${css.search__button_edit}`}
                                            onClick={editAccount}>Изменить</button>}
                                        {account.role !== Roles.ADMIN && <button
                                            className={`${css.search__button} ${css.search__button_remove}`}
                                            onClick={openDeleteAccountPopUp}>Удалить</button>}
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className={css.downloadCsv}>
                    <div className={`${css.search__button} ${css.search__button_add}`}
                         onClick={openAddAccountPopUp}>
                        <p>Добавить пользователя</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}