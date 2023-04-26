import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../Login/Login'
export default function AllRoutes() {
  return (
    <>
    <Routes>
        <Route exact path="/home" component={<Login/>}/>
        <Route path="/login" component={<Login/>} />
        <Route path="/signup" component={<Login/>} />
    </Routes>
      
    </>
  )
}
