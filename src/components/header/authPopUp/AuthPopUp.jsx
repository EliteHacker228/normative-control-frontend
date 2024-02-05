import Login from "./login/Login.jsx";
import Registration from "./registration/Registration.jsx";

export default function AuthPopUp({selectedAuthType}) {
    if (selectedAuthType === 'login')
        return <Login/>;
    else
        return <Registration/>;
}