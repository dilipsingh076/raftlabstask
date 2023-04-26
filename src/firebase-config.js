// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBK2lJVp53qK0MHlEhUH2cOv5Zjqmu0BxE",
  authDomain: "raftlabstask.firebaseapp.com",
  projectId: "raftlabstask",
  storageBucket: "raftlabstask.appspot.com",
  messagingSenderId: "332533427556",
  appId: "1:332533427556:web:d01a6cace68eb809ee1e71",
  measurementId: "G-RX2GGGZEZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app)
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();
