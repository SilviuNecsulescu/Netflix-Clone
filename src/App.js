import React from "react";
import "./App.css";
import Header from "./components/Header";
import { auth } from "./firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import HomePage from "./components/HomePage";
import Login from "./components/Login";

function App() {
  const [user] = useAuthState(auth);
  //console.log(user);

  return (
    <div className="app">
      <Header user={user} />
      {user && user ? <HomePage /> : <Login />}
    </div>
  );
}

export default App;
