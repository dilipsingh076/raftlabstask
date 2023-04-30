import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {FirebaseContext,UserContext} from '../Context/firebase';
// import * as ROUTES from '../constants/routes';
import { DEFAULT_IMAGE_PATH } from '../Constants/paths';
import useUser from '../hooks/use-user';

export default function Header() {
  const { user: loggedInUser } = useContext(UserContext) || {};
  const { user } = useUser(loggedInUser?.uid);
  const { firebase } = useContext(FirebaseContext)|| {};
  const navigate = useNavigate()

  return (
    <header>
        <div className='navbarDiv' >
          <div>
            <h1 >
              <NavLink className={'navLinkDiv'}  to={"/"} >
               RaftLabs
              </NavLink>
            </h1>
          </div>
          <div>
            {loggedInUser ? (
              <>
                <button
                className='allButton'
                  type="button"
                  title="Sign Out"
                  onClick={() => {
                    firebase.auth().signOut();
                    navigate("/login")
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      firebase.auth().signOut();
                      navigate("/login")
                    }
                  }}
                >Log out
                </button>
                {user && (
                  <div>
                    <NavLink className={'navLinkDiv'} to={`/p/${user?.username}`}>
                      <img 
                      style={{ width:"80px", height:'70px',borderRadius:"50%"}}
                        src={`/images/avatars/${user?.username}.jpg`}
                        alt={`${user?.username} profile`}
                        onError={(e) => {
                          e.target.src = DEFAULT_IMAGE_PATH;
                        }}
                      />
                    </NavLink>
                  </div>
                )}
              </>
            ) : (
              <>
                <NavLink className={'navLinkDiv'} to={"/login"}>
                  <button
                  className='allButton'
                    type="button"
                  >
                    Log In
                  </button>
                </NavLink>
                <NavLink className={'navLinkDiv'} to={"/signup"}>
                  <button
                  className='allButton'
                    type="button"
                  >
                    Sign Up
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>
    </header>
  );
}
