// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth,GoogleAuthProvider} from "firebase/auth"
// import {getFirestore} from 'firebase/firestore'
// import firebase from "firebase/app"
// import { getStorage } from "firebase/storage";
// const firebaseConfig = {
//   apiKey: "AIzaSyBK2lJVp53qK0MHlEhUH2cOv5Zjqmu0BxE",
//   authDomain: "raftlabstask.firebaseapp.com",
//   projectId: "raftlabstask",
//   storageBucket: "raftlabstask.appspot.com",
//   messagingSenderId: "332533427556",
//   appId: "1:332533427556:web:d01a6cace68eb809ee1e71",
//   measurementId: "G-RX2GGGZEZ8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// // const storage = getStorage(app)

// export const auth = getAuth(app)
// export const db = getFirestore(app)
// export const provider = new GoogleAuthProvider();
// export const storage = getStorage(app)



// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
  apiKey: "AIzaSyBK2lJVp53qK0MHlEhUH2cOv5Zjqmu0BxE",
  authDomain: "raftlabstask.firebaseapp.com",
  projectId: "raftlabstask",
  storageBucket: "raftlabstask.appspot.com",
  messagingSenderId: "332533427556",
  appId: "1:332533427556:web:d01a6cace68eb809ee1e71",
  measurementId: "G-RX2GGGZEZ8"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };

