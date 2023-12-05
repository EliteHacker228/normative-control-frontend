import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import css from './App.module.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Default from "./pages/default/Default.jsx";
import Welcome from "./pages/welcome/Welcome.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/*<Route path='' element={<Default/>}/>*/}
          <Route path='' element={<Welcome/>}/>
          <Route path='/welcome' element={<Welcome/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
