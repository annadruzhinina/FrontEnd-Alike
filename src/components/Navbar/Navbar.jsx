import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";

function Navbar() {
  return (
    <section className="navbar-container">
      <div className="navbar-header">
        <img
          className="navbar-logo"
          src="./image/logo_transparent_bg_new.png"
        />
        <h3>Alike</h3>
      </div>

      <ul>
        {NavbarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <div className="react-icon">
                  {item.icon}{" "}
                  <span className="react-icon-text">{item.title}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Navbar;

// Home, Search, Message, Profile, LogOut, Report A Problem,... React-icons
