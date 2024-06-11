import {Navigate, useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import AccountsService from "../../../../services/AccountsService.js";
import EditNormocontrollerAccount from "./normocontroller/EditNormocontrollerAccount.jsx";
import Roles from "../../../../domain/users/Roles.js";
import EditStudentAccount from "./student/EditStudentAccount.jsx";
import AccessForbiddenError from "../../../../errors/AccessForbiddenError.js";
import NotFoundError from "../../../../errors/NotFoundError.js";
import InternalServerError from "../../../../errors/InternalServerError.js";
import AuthService from "../../../../services/AuthService.js";

export default function EditAccount() {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    // const [accountId, setAccountId] = useState('');
    const [account, setAccount] = useState(undefined);

    useEffect(() => {
        getAccountData();
    }, []);

    const getAccountData = async () => {
        let account;
        try {
            let accountId = searchParams.get('id');
            account = await AccountsService.getAccountDataById(accountId);
        } catch (e) {
            switch (e.constructor) {
                case AccessForbiddenError:
                    navigate('/errors/403', {replace: true});
                    break;
                case NotFoundError:
                    navigate('/errors/404', {replace: true});
                    break;
                case InternalServerError:
                    navigate('/errors/500', {replace: true});
                    break;
                default:
                    console.log('Unknown error');
                    break;
            }
            return;
        }
        setAccount(account);
    };

    return (
        <div>
            {account !== undefined && account.role === Roles.STUDENT && <EditStudentAccount accountId={account.id}/>}
            {account !== undefined && account.role === Roles.NORMOCONTROLLER && <EditNormocontrollerAccount accountId={account.id}/>}
            {account !== undefined && account.role === Roles.ADMIN && account.id === AuthService.getLocalUserData().id &&
                <Navigate to={'/profile/admin/personal'}/>}
        </div>
    );
}