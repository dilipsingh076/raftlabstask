import React, { useState } from 'react';
import {firebase, auth, provider,db} from '../../firebase-config';
import {signInWithPopup,createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore';
const Login = () => {
    // for signUP
    const [emailSignUp,setEmailSignUp] = useState('')
    const [passwordSignUp,setPasswordSignUp] = useState('')

    // for sign in 
    const [emailSignIn,setEmailSignIn] = useState('')
    const [passwordSignIn,setPasswordSignIn] = useState('')

    // signup function 
    const Signup = async () =>{
        try {
            const email = emailSignUp;
            const password = passwordSignUp;

            const userCredential = await createUserWithEmailAndPassword(auth,email,password)
            const user = userCredential.user;

            const userCollectionRef = doc(db,'users', user.uid);
            setDoc(userCollectionRef,{email,password})

            setEmailSignUp('')
            setPasswordSignUp('')

        } catch (error) {
            console.log("error",error)
        }
        
    }

    // sign in function 
    const SignIn = async () =>{
        try {
            const email = emailSignIn;
            const password= passwordSignIn;

            const userCredential = await signInWithEmailAndPassword(auth,email,password)
            const user = userCredential.user;

            setEmailSignIn('')
            setPasswordSignIn('')
            
        } catch (error) {
            console.log("error",error)
        }

    }

    // signin with google

    const signInWithGoogle = async()=>{
        try {
          const userCredential = await signInWithPopup(auth,provider)
          const user = userCredential.user;
          const name = user.displayName;
          const email = user.email;
          const profilePic = user.photoURL

          const userCollectionRef = doc(db,'users', user.uid);
            setDoc(userCollectionRef,{email,googleAuth:true})
        } catch (error) {
            console.log("error",error)
        }
       

    }


    // Logout
    const Logout = async ()=>{
        try {
            signOut(auth)
            alert("logout")
        } catch (error) {
            console.log("error",error)
        }

    }


  return (
    <div>
    <h1>Login</h1>
    <form>
      <label>
        Email:
        <input
          type="email"
          value={emailSignIn}
          onChange={(e) => setEmailSignIn(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={passwordSignIn}
          onChange={(e) => setPasswordSignIn(e.target.value)}
        />
      </label>
      <button type="button" onClick={SignIn}>
        Sign In
      </button>
    </form>

    <h1>Sign Up</h1>
    <form>
      <label>
        Email:
        <input
          type="email"
          value={emailSignUp}
          onChange={(e) => setEmailSignUp(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={passwordSignUp}
          onChange={(e) => setPasswordSignUp(e.target.value)}
        />
      </label>
      <button type="button" onClick={Signup}>
        Sign Up
      </button>
    </form>

    <button type="button" onClick={signInWithGoogle}>
      Sign In With Google
    </button>
    </div>




  );
};

// const SignUp = () => {
//   const handleSignUp = async (event) => {
//     event.preventDefault();
//     const { email, password } = event.target.elements;

//     try {
//       await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
//       console.log('User created successfully!');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignUp}>
//         <label>
//           Email:
//           <input name="email" type="email" placeholder="Email" />
//         </label>
//         <label>
//           Password:
//           <input name="password" type="password" placeholder="Password" />
//         </label>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

export default Login;
