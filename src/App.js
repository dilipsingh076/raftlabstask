// import logo from './logo.svg';
import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import ReactLoader from './Components/loader';
import * as ROUTES from './Constants/routes';
import { UserContext } from './Context/firebase';
import useAuthListener from './hooks/use-auth-listener';

import ProtectedRoute from './helpers/protected-route';


import Login from './Pages/login';
import Signup from "./Pages/sign-up"
import Profile from './Pages/profile';
import NotFound from './Pages/not-found';
import Dashboard from './Pages/dashboard';
// const Login = lazy(() => import('./Pages/login.js'));
// const SignUp = lazy(() => import('./Pages/sign-up'));
// const Dashboard = lazy(() => import('./Pages/dashboard'));
// const Profile = lazy(() => import('./Pages/profile'));
// const NotFound = lazy(() => import('./Pages/not-found'));

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Routes>
        {/* <Suspense fallback={<ReactLoader />}> */}
        {/* <Switch> */}
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGN_UP} element={<Signup />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact />
          }
        >
          <Route index element={<Dashboard user={user} />} />
        </Route>
        <Route element={<NotFound />} />
        {/* </Switch> */}
        {/* </Suspense> */}
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
