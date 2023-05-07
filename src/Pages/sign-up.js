import { useState, useContext, useEffect } from 'react';
import {NavLink, useNavigate } from 'react-router-dom';
import {FirebaseContext} from '../Context/firebase';
// import * as ROUTES from '../constants/routes';
import { doesUsernameExist } from '../services/firebase';

export default function SignUp() {
  const navigate = useNavigate()
  // const history = useHistory();
  const { firebase } = useContext(FirebaseContext)|| {};

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleSignUp = async (event) => {
    event.preventDefault();

    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        // authentication
        // -> emailAddress & password & username (displayName)
        await createdUserResult.user.updateProfile({
          displayName: username
        });

        // firebase user collection (create a document)
        await firebase
          .firestore()
          .collection('users')
          .add({
            userId: createdUserResult.user?.uid,
            username: username.toLowerCase(),
            fullName,
            emailAddress: emailAddress.toLowerCase(),
            following: ['2'],
            followers: [],
            dateCreated: Date.now()
          });
          navigate("/login")

        // history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setFullName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      }
    } else {
      setUsername('');
      setError('That username is already taken, please try another.');
    }
  };

  useEffect(() => {
    document.title = 'Sign Up - RaftLabs';
  }, []);

  return (
    <div className="loginDiv">
      <div>
        <img  style={{height:"100%", width:"100%"}} src="https://uploads-ssl.webflow.com/60d5a97381523ace9d3c87bb/60eee9be5628ed5700176501_Webp.net-resizeimage(1).png" alt="" />
      </div>
      <div>
        <div className='formDiv' >
          <h1>RaftLabs</h1>

          {error && <p>{error}</p>}

          <form onSubmit={handleSignUp} method="POST">
            <input
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            <input
              type="text"
              placeholder="Full name"
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
            <input
              type="text"
              placeholder="Email address"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
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
              Sign Up
            </button>
          </form>
        </div>
        <div>
          <p>
            Have an account?{` `}
            <NavLink className={'navLinkDiv'} to={"/login"}>
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
