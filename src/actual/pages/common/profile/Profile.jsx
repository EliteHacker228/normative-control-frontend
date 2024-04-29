import AuthService from "../../../services/AuthService.js";
import {useEffect, useState} from "react";
import UserAuthenticationDto from "../../../dto/auth/UserAuthenticationDto.js";
import Header from "../../../components/header/Header.jsx";

export default function Profile() {
    const [userData, setUserData] = useState(AuthService.getLocalUserData());

    return (
        <div>
            <Header/>
            <p>Ваш ID: {userData.id}</p>
            <p>Ваша роль: {userData.role}</p>
        </div>
    );
}