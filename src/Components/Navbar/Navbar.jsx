// import React from 'react'
// import UseAuth from '../customhooks/UseAuth'
// import {Link,NavLink} from 'react-router-dom'
// export default function Navbar() {
//     const currentUser = UseAuth();
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <NavLink to="/login" activeClassName="active">
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact" activeClassName="active">
//             Contact
//           </NavLink>
//         </li>
//         <li>
//             <span>{currentUser?currentUser?.email:"person"}</span>
//         </li>
//       </ul>
//     </nav>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';

function Navbar() {
  const user = useSelector(state => state.user);

  const handleSignOut = () => {
    auth.signOut();
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to={`/profile/${user.uid}`}>Profile</Link>
            </li>
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
