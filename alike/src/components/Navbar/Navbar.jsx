import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";

function Navbar() {
  return (
    <section className="navbar-container">
      <ul>
        {NavbarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon} <span>{item.title}</span>
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
