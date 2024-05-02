import {useEffect} from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

// import Welcome from "./legacy/pages/welcome/Welcome.jsx";
// import Progress from "./legacy/pages/uploading/Progress.jsx";
// import Result from "./legacy/pages/result/Result.jsx";
// import Faq from "./legacy/pages/faq/Faq.jsx";
// import Profile from "./legacy/pages/profile/Profile.jsx";
// import AuthService from "./legacy/services/auth/AuthService.js";

import Welcome from "./actual/pages/common/welcome/Welcome.jsx"
import Login from "./actual/pages/common/auth/login/Login.jsx";
import Registration from "./actual/pages/common/auth/registration/Registration.jsx";
import StudentProfilePersonal from "./actual/pages/student/profile/StudentProfilePersonal.jsx";
import StudentProgress from "./actual/pages/student/progress/StudentProgress.jsx";
import Error403 from "./actual/pages/common/errors/Error403.jsx";
import Error404 from "./actual/pages/common/errors/Error404.jsx";
import Error500 from "./actual/pages/common/errors/Error500.jsx";
import StudentResult from "./actual/pages/student/result/StudentResult.jsx";
import StudentProfileDocuments from "./actual/pages/student/profile/StudentProfileDocuments.jsx";
import Faq from "./actual/pages/normocontroller/Faq.jsx";
import NormocontrollerProfilePersonal from "./actual/pages/normocontroller/NormocontrollerProfilePersonal.jsx";
import NormocontrollerProfileDocuments from "./actual/pages/normocontroller/NormocontrollerProfileDocuments.jsx";
import NormocontrollerProfileDocument from "./actual/pages/normocontroller/NormocontrollerProfileDocument.jsx";

function App() {
    useEffect(() => {
        // AuthService.generateAndSetFingerprintIfUserIfAbsent();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path='/legacy' element={<WelcomeLegacy/>}/>*/}
                {/*<Route path='/legacy/welcome' element={<WelcomeLegacy/>}/>*/}
                {/*<Route path='/legacy/uploading' element={<Progress/>}/>*/}
                {/*<Route path='/legacy/result' element={<Result/>}/>*/}
                {/*<Route path='/legacy/profile/*' element={<Profile/>}/>*/}
                {/*<Route path='/legacy/faq' element={<Faq/>}/>*/}

                <Route path='/' element={<Welcome/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/faq' element={<Faq/>}/>

                <Route path='/profile/student/personal' element={<StudentProfilePersonal/>}/>
                <Route path='/profile/student/documents' element={<StudentProfileDocuments/>}/>
                <Route path='/progress' element={<StudentProgress/>}/>
                <Route path='/result' element={<StudentResult/>}/>

                <Route path='/profile/normocontroller/personal' element={<NormocontrollerProfilePersonal/>}/>
                <Route path='/profile/normocontroller/documents' element={<NormocontrollerProfileDocuments/>}/>
                <Route path='/profile/normocontroller/document' element={<NormocontrollerProfileDocument/>}/>

                <Route path='/errors/403' element={<Error403/>}/>
                <Route path='/*' element={<Navigate to='/errors/404'/>}/>
                <Route path='/errors/404' element={<Error404/>}/>
                <Route path='/errors/500' element={<Error500/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
