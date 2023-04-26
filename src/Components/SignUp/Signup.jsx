import React from 'react';
import firebase from '../firebaseConfig';
const SignUp = () => {
    const handleSignUp = async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
  
      try {
        await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
        console.log('User created successfully!');
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <label>
            Email:
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password:
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  };
  
  export default SignUp;
  