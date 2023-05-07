import React from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate, Routes, Outlet } from 'react-router-dom';
import * as ROUTES from '../Constants/routes';

export default function ProtectedRoute({ user, children, ...rest }) {

      if (user) {
          return <Outlet /> ;
        }
        else {
          return  <Navigate
                      to={{
                        pathname: ROUTES.LOGIN,
                        // state: { from: location }
                      }}
                    />
        }

  // return (
    
  //   <Route
  //     {...rest}
  //     render={({ location }) => {
  //       if (user) {
  //         return React.cloneElement(children, { user });
  //       }

  //       if (!user) {
  //         return (
  //           <Navigate
  //             to={{
  //               pathname: ROUTES.LOGIN,
  //               state: { from: location }
  //             }}
  //           />
  //         );
  //       }

  //       return null;
  //     }}
  //   />
  // );
}

// ProtectedRoute.propTypes = {
//   user: PropTypes.object,
//   children: PropTypes.object.isRequired
// };
