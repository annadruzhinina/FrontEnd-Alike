import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="navbar">
      <Link to="/sign-in" className="sign-in">
        Sign-in
      </Link>
      <Link to="/" className="profile">
        Profile
      </Link>
    </section>
  );
}

export default Navbar;

// Home, Search, Message, Profile, LogOut, Report A Problem,... React-icons
