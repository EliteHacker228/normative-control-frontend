import AuthService from "../../../services/AuthService.js";
import {useEffect, useState} from "react";
import Header from "../../../components/header/Header.jsx";
import AccountsService from "../../../services/AccountsService.js";
import User from "../../../domain/users/User.js";

export default function Profile() {
    const [user, setUser] = useState(new User());

    useEffect(() => {
        (async () => {
            let receivedUser = await AccountsService.getAccountDataById(AuthService.getLocalUserData().id);
            setUser(receivedUser);
        })();
    }, []);

    return (
        <div>
            <Header/>
            <p>Ваш ID: {user.id}</p>
            <p>Ваша роль: {user.role}</p>
            <p>Ваш email: {user.email}</p>
            <p>Ваша фамилия: {user.lastName}</p>
            <p>Ваше имя: {user.firstName}</p>
            <p>Ваше отчество: {user.middleName}</p>
        </div>
    );
}