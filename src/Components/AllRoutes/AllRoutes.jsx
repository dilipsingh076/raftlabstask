import React from 'react'
import { lazy, Suspense } from 'react';
import { Routes,Route } from 'react-router-dom';
import ReactLoader from '../../Components/loader';
import * as ROUTES from '../../Constants/routes.js';
import {UserContext} from '../../Context/firebase.js';
import useAuthListener from '../../hooks/use-auth-listener.js';

import ProtectedRoute from '../../helpers/protected-route.js';

const Login = lazy(() => import('../../Pages/login.js'));
const SignUp = lazy(() => import('../../Pages/dashboard.js'));
const Dashboard = lazy(() => import('../../Pages/dashboard'));
const Profile = lazy(() => import('../../Pages/profile.js'));
const NotFound = lazy(() => import('../../Pages/not-found.js'));
export default function AllRoutes() {
  const { user } = useAuthListener();
  return (
    <>
  <UserContext.Provider value={{ user }}>
      <Routes>
        {/* <Suspense fallback={<ReactLoader />}> */}
          {/* <Switch> */}
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.PROFILE} component={Profile} />
            <Route
              path={ROUTES.DASHBOARD}
              element={
                <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path='*' component={NotFound} />
          {/* </Switch> */}
        {/* </Suspense> */}
      </Routes>
    </UserContext.Provider>
      
    </>
  )
}