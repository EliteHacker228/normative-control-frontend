import {Navigate, useLocation} from "react-router-dom";
import React, {useState} from "react";
import AuthService from "../../services/auth/AuthService.js";
import StudentProfile from "./student/StudentProfile.jsx";
import NormocontrollerProfile from "./normocontroller/NormocontrollerProfile.jsx";


export default function Profile() {
    const [userRole, setUserRole] = useState(AuthService.getUserRole);

    if (userRole === 'STUDENT')
        return <StudentProfile/>;
    else if (userRole === 'NORMOCONTROLLER')
        return <NormocontrollerProfile/>;
    else
        return <Navigate to={'/'}/>
}