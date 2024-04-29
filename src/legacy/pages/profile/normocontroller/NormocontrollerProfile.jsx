import {useLocation} from "react-router-dom";
import Header from "../../../components/header/Header.jsx";
import Menu from "../commonComponents/menu/Menu.jsx";
import EditProfile from "../commonComponents/edit/EditProfile.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import React from "react";
import SearchVerifyingResults from "./search/SearchVerifyingResults.jsx";

export default function NormocontrollerProfile() {
    const location = useLocation();

    const getNormocontrollersPath = () => {
        let normocontrollersLastSearchQuery = localStorage.getItem('normocontrollersLastSearchQuery');
        if (normocontrollersLastSearchQuery) {
            return `/profile/search?query=${normocontrollersLastSearchQuery}`;
        }
        return '/profile/search';
    };

    const menuElements = [
        {
            title: 'Изменить личные данные',
            path: '/profile/edit'
        },
        {
            title: 'Поиск студенческих работ',
            path: getNormocontrollersPath()
        }
    ];

    return (
        <div>
            <Header/>
            <Menu elements={menuElements}/>
            {menuElements[0].path === location.pathname && <EditProfile/>}
            {(menuElements[1].path.startsWith(location.pathname) || '/profile' === location.pathname) &&
                <SearchVerifyingResults/>}
            <Footer/>
        </div>
    );
}