import React from "react";
import firebase, { auth } from "../firebase/firebase";
import "../css/Login.css";

function Login() {
  const handleOnClick = (e) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div className="loginContainer">
      <h1>You can log in with Google by clicking the button below</h1>
      <button className="loginContainer__button" onClick={handleOnClick}>
        Login with Google
      </button>
      <div className="loginContainer__gradient"></div>
    </div>
  );
}

export default Login;
