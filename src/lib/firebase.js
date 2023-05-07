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

