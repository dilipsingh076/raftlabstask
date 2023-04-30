import { useState, useContext, useEffect } from 'react';
import { Link, NavLink, useHistory, useNavigate } from 'react-router-dom';
import {FirebaseContext} from '../Context/firebase';
// import * as ROUTES from '../constants/routes';

export default function Login() {
  // const history = useHistory();
  const navigate = useNavigate()
  const { firebase } = useContext(FirebaseContext)|| {};

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      navigate("/")
      // history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div className='loginDiv' >
      <div>
        <img style={{height:"100%", width:"100%"}} src="https://uploads-ssl.webflow.com/60d5a97381523ace9d3c87bb/60eee9be5628ed5700176501_Webp.net-resizeimage(1).png" alt="iPhone with Instagram app" />
      </div>
      <div>
        <div className='formDiv' >
          <h1>RaftLabs
          </h1>

          {error && <p>{error}</p>}

          <form onSubmit={handleLogin} method="POST">
            <input
              type="text"
              placeholder="Email address"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            /><br/>
            <input
              type="password"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            /><br/>
            <button
              disabled={isInvalid}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
        <div>
          <p className="text-sm">
            Don't have an account?{` `}
            <NavLink className={'navLinkDiv'} to={'/signup'}>
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
