import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {FirebaseContext} from "./Context/firebase"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {firebase,FieldValue} from "./lib/firebase"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <FirebaseContext.Provider value={{firebase,FieldValue}}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </FirebaseContext.Provider>
  </React.StrictMode>
);

reportWebVitals();
