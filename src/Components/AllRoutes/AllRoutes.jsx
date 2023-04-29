import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../../Pages/login.js'
import Home from "../../Pages/dashboard.js"
import SignUp from '../../Pages/sign-up.js'
export default function AllRoutes() {
  return (
    <>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/profile" element={} /> */}
        <Route path="/signup" element={<SignUp/>} />
    </Routes>
      
    </>
  )
}