import {useEffect} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";

// import Welcome from "./legacy/pages/welcome/Welcome.jsx";
// import Uploading from "./legacy/pages/uploading/Uploading.jsx";
// import Result from "./legacy/pages/result/Result.jsx";
// import Faq from "./legacy/pages/faq/Faq.jsx";
// import Profile from "./legacy/pages/profile/Profile.jsx";
// import AuthService from "./legacy/services/auth/AuthService.js";

import Welcome from "./actual/pages/common/welcome/Welcome.jsx"
import Login from "./actual/pages/common/auth/login/Login.jsx";
import Registration from "./actual/pages/common/auth/registration/Registration.jsx";
import Profile from "./actual/pages/common/profile/Profile.jsx";

function App() {
    useEffect(() => {
        // AuthService.generateAndSetFingerprintIfUserIfAbsent();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path='/legacy' element={<WelcomeLegacy/>}/>*/}
                {/*<Route path='/legacy/welcome' element={<WelcomeLegacy/>}/>*/}
                {/*<Route path='/legacy/uploading' element={<Uploading/>}/>*/}
                {/*<Route path='/legacy/result' element={<Result/>}/>*/}
                {/*<Route path='/legacy/profile/*' element={<Profile/>}/>*/}
                {/*<Route path='/legacy/faq' element={<Faq/>}/>*/}

                <Route path='/' element={<Welcome/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
