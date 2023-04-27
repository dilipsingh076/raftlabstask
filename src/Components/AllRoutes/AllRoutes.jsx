// import React from 'react'
// import {Routes,Route} from "react-router-dom"
// import Login from '../Login/Login'
// export default function AllRoutes() {
//   return (
//     <>
//     <Routes>
//         <Route exact path="/home" component={<Login/>}/>
//         <Route path="/login" component={<Login/>} />
//         <Route path="/signup" component={<Login/>} />
//     </Routes>
      
//     </>
//   )
// }

import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
// import Explore from '../Pages/Explore.js';
import UserProfile from '../Pages/UserProfile';

function AppRouter() {
  return (
    <Routes>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/explore" component={Explore} /> */}
        <Route exact path="/profile/:userId" component={UserProfile} />

    </Routes>
  );
}

export default AppRouter;
