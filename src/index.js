/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";

import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBxncvwUIH3asQp3HjN7wI5exouHCl0_f0",
  authDomain: "business-card-maker-54f15.firebaseapp.com",
  databaseURL: "https://business-card-maker-54f15.firebaseio.com",
  projectId: "business-card-maker-54f15",
  storageBucket: "business-card-maker-54f15.appspot.com",
  messagingSenderId: "653672960095",
  appId: "1:653672960095:web:3acce9fcc60db77bb64bea",
  measurementId: "G-WYE99E34YN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
