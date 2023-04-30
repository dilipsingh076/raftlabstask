import React from 'react'
import UseAuth from '../customhooks/UseAuth'
import {Link,NavLink} from 'react-router-dom'
import styled from "./Navbar.module.css"
// import {firebase, auth, provider,db} from '../../lib/firebase';
// import { signOut } from 'firebase/auth';

export default function Navbar() {
    const currentUser = UseAuth();

      // Logout
    const Logout = async ()=>{
        try {
            // signOut(auth)
            alert("logout")
        } catch (error) {
            console.log("error",error)
        }

    }
  return (
    <nav className={styled.navbar} >
      <ul  className={styled.navbar}>
        <li>
          <NavLink  to="/">Home</NavLink>
        </li>
        <li>
        {
          currentUser == null ?( <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>) : ( <NavLink to="/" onClick={()=>Logout()} >
            Logout
          </NavLink>)
        }
         
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
            <span>{currentUser?currentUser?.email:"person"}</span>
        </li>
      </ul>
    </nav>
  )
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { auth } from '../../firebase-config';

// function Navbar() {
//   const user = useSelector(state => state.user);

//   const handleSignOut = () => {
//     auth.signOut();
//   }

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/explore">Explore</Link>
//         </li>
//         {user ? (
//           <>
//             <li>
//               <Link to={`/profile/${user.uid}`}>Profile</Link>
//             </li>
//             <li>
//               <button onClick={handleSignOut}>Sign Out</button>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link to="/login">Log In</Link>
//             </li>
//             <li>
//               <Link to="/signup">Sign Up</Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
