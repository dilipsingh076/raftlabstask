import React from 'react'
import UseAuth from '../customhooks/UseAuth'
import {Link,NavLink} from 'react-router-dom'
export default function Navbar() {
    const currentUser = UseAuth();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
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
