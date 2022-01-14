import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/screens/Home/Home';
import Layout from './components/Layout/Layout';
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';








// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQqSiTu3FW_DfBLgHdijfh1zFX1jNDk80",
  authDomain: "react-todolist-8c2a3.firebaseapp.com",
  projectId: "react-todolist-8c2a3",
  storageBucket: "react-todolist-8c2a3.appspot.com",
  messagingSenderId: "978592417047",
  appId: "1:978592417047:web:ef0b20e349aeb6421da352"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export const Context = createContext(null)
const firestore = app.firestore();

ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value ={{ firebase, firestore }}>
        <Layout>
            <Home />
        </Layout>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

