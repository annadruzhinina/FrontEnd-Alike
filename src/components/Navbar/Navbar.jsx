import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";

function Navbar() {
  return (
    <aside className="navbar">
      <div className="navbar-header">
        <img
          className="navbar-logo"
          src="./image/logo_transparent_bg_new.png"
        />
        <span className="navbar-logo-text">Alike</span>
      </div>
      <div className="navbar-menu">
        {NavbarData.map((item, index) => {
          return (
            <Link key={index} className="navbar-menu__item" to={item.path}>
              {item.icon}
              <span className="navbar-menu__text">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

export default Navbar;

// Home, Search, Message, Profile, LogOut, Report A Problem,... React-icons
