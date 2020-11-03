import React, { useEffect, useState } from "react";
import "../css/Header.css";
import { auth } from "../firebase/firebase";

function Header({ user }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const handleClick = (e) => {
    auth.signOut();
  };

  return (
    <div
      className={`header ${hasScrolled ? "header--black" : "header--normal"}`}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
        className="header__logo"
      ></img>
      {user && (
        <img
          className="header__avatar"
          src={user.photoURL}
          alt="Netflix Avatar"
        ></img>
      )}
      {user && (
        <button className="header__logout" onClick={handleClick}>
          Log Out
        </button>
      )}
    </div>
  );
}

export default Header;
