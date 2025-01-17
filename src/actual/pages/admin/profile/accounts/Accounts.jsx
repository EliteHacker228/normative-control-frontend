import {NavLink, useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import Roles from "../../../../domain/users/Roles.js";
import DocumentsService from "../../../../services/DocumentsService.js";
import AcademicalGroupsService from "../../../../services/AcademicalGroupsService.js";
import AuthService from "../../../../services/AuthService.js";
import CsvDocumentsListDownloader from "../../../../utils/Downloaders/CsvDocumentsListDowloader.js";
import Header from "../../../../commonComponents/header/Header.jsx";
import css from "./Accounts.module.css";
import DocumentVerdictTranslators from "../../../../utils/Translators/DocumentVerdictTranslators.js";
import whiteDownloadIco from "./static/downloadIcoWhite.svg";
import Footer from "../../../../commonComponents/footer/Footer.jsx";
import RoleTranslator from "../../../../utils/Translators/RoleTranslator.js";
import AccountsService from "../../../../services/AccountsService.js";
import AddAccountPopUp from "./components/popups/addAccountPopUp/AddAccountPopUp.jsx";
import DeleteAccountPopUp from "./components/popups/deleteAccountPopUp/DeleteAccountPopUp.jsx";

export default function Accounts() {
    const navigate = useNavigate();

    const [accounts, setAccounts] = useState([]);
    const [filteredAccounts, setFilteredAccounts] = useState([]);

    const [searchInput, setSearchInput] = useState('');

    const [academicalGroups, setAcademicalGroups] = useState([]);
    const [selectedGroups, setSelectedGroups] = useState(new Set([]));

    const roles = [Roles.STUDENT, Roles.NORMOCONTROLLER, Roles.ADMIN];
    const [selectedRoles, setSelectedRoles] = useState(new Set([]));

    const [isAddAccountPopUpShowed, setIsAddAccountPopUpShowed] = useState(false);
    const [isDeleteAccountPopUpShowed, setIsDeleteAccountPopUpShowed] = useState(false);

    const [accountOnDeletion, setAccountOnDeletion] = useState({});

    useEffect(() => {
        getInitPageData();

        let intervalId = setInterval(getPageData, 2000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        updateFilteredAccounts(accounts, academicalGroups, searchInput, selectedRoles, selectedGroups);
    }, [accounts, academicalGroups, searchInput, selectedRoles, selectedGroups, accounts]);

    const getInitPageData = async () => {
        let accounts = await AccountsService.getAccounts();
        setAccounts(accounts);
        setFilteredAccounts(accounts);
        let groups = await AcademicalGroupsService.getAcademicalGroups();
        let collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
        groups = groups.sort((a, b) => collator.compare(a.name, b.name));
        setAcademicalGroups(groups);
    }

    const getPageData = async () => {
        // console.log('Обновляем данные по аккаунтам (админ)');
        let accounts = await AccountsService.getAccounts();
        setAccounts(accounts);
        let groups = await AcademicalGroupsService.getAcademicalGroups();
        let collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
        groups = groups.sort((a, b) => collator.compare(a.name, b.name));
        setAcademicalGroups(groups);
    }

    const onSearchInput = (e) => {
        let newSearchInput = e.target.value;
        setSearchInput(newSearchInput);
    };

    const onGroupSelect = (e) => {
        let groupId = e.target.id;
        let updatedGroups = selectedGroups;
        if (selectedGroups.has(groupId)) {
            selectedGroups.delete(groupId);
            setSelectedGroups(new Set(selectedGroups));
        } else {
            selectedGroups.add(groupId);
            setSelectedGroups(new Set(updatedGroups));
        }
    };

    const onRoleSelect = (e) => {
        let role = e.target.id;
        let updatedRoles = selectedRoles;
        if (selectedRoles.has(role)) {
            updatedRoles.delete(role);
            setSelectedRoles(new Set(updatedRoles));
        } else {
            updatedRoles.add(role);
            setSelectedRoles(new Set(updatedRoles));
        }
    };

    const updateFilteredAccounts = (localAccounts, localAcademicalGroups, localSearchInput, localSelectedRoles, localSelectedGroups) => {
        let filteredAccounts = localAccounts.filter(account => account.fullName.toLowerCase().includes(localSearchInput.toLowerCase()) || account.email.toLowerCase().includes(localSearchInput.toLowerCase()));
        if (localSelectedRoles.size > 0) {
            filteredAccounts = filteredAccounts.filter(account => localSelectedRoles.has(account.role));
        }
        if (localSelectedGroups.size > 0) {
            let mapped = localAcademicalGroups.filter(academicalGroup => localSelectedGroups.has(academicalGroup.name) && academicalGroup.normocontroller).map(academicalGroup => academicalGroup.normocontroller.email);
            filteredAccounts = filteredAccounts.filter(account => (account.academicGroup && localSelectedGroups.has(account.academicGroup.name)) || mapped.includes(account.email));
        }
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
                <DeleteAccountPopUp closePopUp={closeDeleteAccountPopUp} accountOnDeletion={accountOnDeletion} updateAccounts={getPageData}/>}
            <div className={css.adminAccounts}>
                <div className={css.controls}>
                    <div className={css.filters}>
                        <div className={css.search}>
                            <div className={css.headerContainer}>
                                <h1 className={css.search__header}>Поиск</h1>
                            </div>
                            <div className={css.searchField}>
                                <input className={css.searchField__input} type='text'
                                       placeholder={'Введите ФИО или e-mail пользователя'} value={searchInput}
                                       onInput={onSearchInput}/>
                                {/*<img className={css.searchField__button} src={searchIco}/>*/}
                                <input className={css.searchField__button} type='submit' value=''/>
                            </div>
                        </div>
                        <h1 className={css.filters__header}>Фильтры подбора</h1>
                        <div className={css.filtersGroup}>
                            <h1 className={css.filtersGroup__header}>Группы</h1>
                            <div className={css.filtersGroup__content}>
                                {academicalGroups.length === 0 &&
                                    <p className={css.filtersGroup__placeholder}>Вам пока не назначены группы</p>}
                                {academicalGroups.map((academicalGroup, index) => {
                                    return (
                                        <div className={css.filterCheckbox} key={index}>
                                            <input className={css.filterCheckbox__input} id={academicalGroup.name}
                                                   type='checkbox' checked={selectedGroups.has(academicalGroup.name)}
                                                   onChange={onGroupSelect}/>
                                            <label className={css.filterCheckbox__label}
                                                   htmlFor={academicalGroup.name}>{academicalGroup.name}</label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={css.filtersGroup}>
                            <h1 className={css.filtersGroup__header}>Роли</h1>
                            {roles.map((role, index) => {
                                return (
                                    <div className={css.filterCheckbox} key={index}>
                                        <input className={css.filterCheckbox__input} id={role} type='checkbox'
                                               checked={selectedRoles.has(role)} onChange={onRoleSelect}/>
                                        <label className={css.filterCheckbox__label}
                                               htmlFor={role}>{RoleTranslator.getRoleName(role)}</label>
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
                </div>
                <div className={css.accounts}>
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
            </div>
            <Footer/>
        </div>
    );
}