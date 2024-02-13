import {useLocation} from "react-router-dom";
import Header from "../../../components/header/Header.jsx";
import Menu from "../commonComponents/menu/Menu.jsx";
import EditProfile from "../commonComponents/edit/EditProfile.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import React from "react";
import SearchVerifyingResults from "./search/SearchVerifyingResults.jsx";

export default function NormocontrollerProfile() {
    const location = useLocation();
    const menuElements = [
        {
            title: 'Изменить личные данные',
            path: '/profile/edit'
        },
        {
            title: 'Поиск студенческих работ',
            path: '/profile/search'
        }
    ];

    return (
        <div>
            <Header/>
            <Menu elements={menuElements}/>
            {location.pathname === menuElements[0].path && <EditProfile/>}
            {(location.pathname === menuElements[1].path || location.pathname === '/profile') && <SearchVerifyingResults/>}
            <Footer/>
        </div>
    );
}