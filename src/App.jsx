import {useState} from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import css from './App.module.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./pages/welcome/Welcome.jsx";
import Uploading from "./pages/uploading/Uploading.jsx";
import Result from "./pages/result/Result.jsx";
import Faq from "./pages/faq/Faq.jsx";
import Profile from "./pages/profile/Profile.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Welcome/>}/>
                <Route path='/welcome' element={<Welcome/>}/>
                <Route path='/uploading' element={<Uploading/>}/>
                <Route path='/result' element={<Result/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/faq' element={<Faq/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
