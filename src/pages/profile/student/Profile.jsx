import css from './Profile.module.css';
import Header from "../../../components/header/Header.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import React from "react";
import {useLocation} from "react-router-dom";
import Verilog from "./verilog/Verilog.jsx";
import EditProfile from "./edit/EditProfile.jsx";
import Menu from "./menu/Menu.jsx";

export default function Profile() {
    const location = useLocation();

    return (
        <div>
            <Header/>
            <Menu/>
            {location.pathname === '/profile/edit' && <EditProfile/>}
            {location.pathname === '/profile/list' && <Verilog/>}
            <Footer/>
        </div>
    );
}