import {useEffect} from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

// import Welcome from "./legacy/pages/welcome/Welcome.jsx";
// import Progress from "./legacy/pages/uploading/Progress.jsx";
// import Result from "./legacy/pages/document/Result.jsx";
// import Faq from "./legacy/pages/faq/Faq.jsx";
// import Profile from "./legacy/pages/profile/Profile.jsx";
// import AuthService from "./legacy/services/auth/AuthService.js";

import Welcome from "./actual/pages/common/welcome/Welcome.jsx"
import Login from "./actual/pages/common/auth/login/Login.jsx";
import Registration from "./actual/pages/common/auth/registration/Registration.jsx";
import StudentProfilePersonal from "./actual/pages/student/profile/personal/StudentProfilePersonal.jsx";
import StudentProgress from "./actual/pages/student/profile/progress/StudentProgress.jsx";
import Error403 from "./actual/pages/common/errors/Error403.jsx";
import Error404 from "./actual/pages/common/errors/Error404.jsx";
import Error500 from "./actual/pages/common/errors/Error500.jsx";
import StudentDocument from "./actual/pages/student/profile/document/StudentDocument.jsx";
import StudentProfileDocuments from "./actual/pages/student/profile/documents/StudentProfileDocuments.jsx";
import Faq from "./actual/pages/common/faq/Faq.jsx";
import NormocontrollerProfilePersonal
    from "./actual/pages/normocontroller/profile/personal/NormocontrollerProfilePersonal.jsx";
import NormocontrollerProfileDocuments
    from "./actual/pages/normocontroller/profile/documents/NormocontrollerProfileDocuments.jsx";
import NormocontrollerProfileDocument
    from "./actual/pages/normocontroller/profile/document/NormocontrollerProfileDocument.jsx";
import AuthService from "./actual/services/AuthService.js";
import Roles from "./actual/domain/users/Roles.js";
import GiveFeedbackPopUp from "./actual/popups/giveFeedback/GiveFeedbackPopUp.jsx";
import FeedbackService from "./actual/services/FeedbackService.js";

function App() {
    return (
        <div>
            {AuthService.isUserLocallyAuthenticated() && !FeedbackService.isFeedbackShowedBefore() && <GiveFeedbackPopUp/>}
            <BrowserRouter>
                <Routes>
                    {/*<Route path='/legacy' element={<WelcomeLegacy/>}/>*/}
                    {/*<Route path='/legacy/welcome' element={<WelcomeLegacy/>}/>*/}
                    {/*<Route path='/legacy/uploading' element={<Progress/>}/>*/}
                    {/*<Route path='/legacy/document' element={<Result/>}/>*/}
                    {/*<Route path='/legacy/profile/*' element={<Profile/>}/>*/}
                    {/*<Route path='/legacy/faq' element={<Faq/>}/>*/}

                    <Route path='/' element={
                        <UnauthedRoute>
                            <Welcome/>
                        </UnauthedRoute>
                    }/>

                    <Route path='/login' element={
                        <UnauthedRoute>
                            <Login/>
                        </UnauthedRoute>
                    }/>

                    <Route path='/registration' element={
                        <UnauthedRoute>
                            <Registration/>
                        </UnauthedRoute>
                    }/>


                    <Route path='/faq' element={<Faq/>}/>

                    <Route path='/profile/student/personal' element={
                        <RoleSecuredRoute targetRole={Roles.STUDENT}>
                            <StudentProfilePersonal/>
                        </RoleSecuredRoute>
                    }/>
                    <Route path='/profile/student/documents' element={
                        <RoleSecuredRoute targetRole={Roles.STUDENT}>
                            <StudentProfileDocuments/>
                        </RoleSecuredRoute>
                    }/>
                    <Route path='/profile/student/progress' element={
                        <RoleSecuredRoute targetRole={Roles.STUDENT}>
                            <StudentProgress/>
                        </RoleSecuredRoute>
                    }/>
                    {/*TODO: Перенести в /document*/}
                    <Route path='/profile/student/document' element={
                        <RoleSecuredRoute targetRole={Roles.STUDENT}>
                            <StudentDocument/>
                        </RoleSecuredRoute>
                    }/>

                    <Route path='/profile/normocontroller/personal' element={
                        <RoleSecuredRoute targetRole={Roles.NORMOCONTROLLER}>
                            <NormocontrollerProfilePersonal/>
                        </RoleSecuredRoute>

                    }/>
                    <Route path='/profile/normocontroller/documents' element={
                        <RoleSecuredRoute targetRole={Roles.NORMOCONTROLLER}>
                            <NormocontrollerProfileDocuments/>
                        </RoleSecuredRoute>

                    }/>
                    {/*TODO: Перенести в /document*/}
                    <Route path='/profile/normocontroller/document' element={
                        <RoleSecuredRoute targetRole={Roles.NORMOCONTROLLER}>
                            <NormocontrollerProfileDocument/>
                        </RoleSecuredRoute>

                    }/>

                    <Route path='/errors/403' element={<Error403/>}/>
                    <Route path='/*' element={<Navigate to='/errors/404' replace/>}/>
                    <Route path='/errors/404' element={<Error404/>}/>
                    <Route path='/errors/500' element={<Error500/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function UnauthedRoute({children}) {
    if (!AuthService.isUserLocallyAuthenticated()) {
        return children;
    } else {
        return <Navigate to={`/profile/${AuthService.getLocalUserData().role.toLowerCase()}/documents`}/>;
    }
}

function RoleSecuredRoute({targetRole, children}) {
    if (AuthService.isUserLocallyAuthenticated() && targetRole === AuthService.getLocalUserData().role) {
        return children;
    } else {
        return <Navigate to={'/errors/403'} replace/>;
    }
}

export default App
