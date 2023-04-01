// Home, Search, Message, Profile, LogOut, Report A Problem,... React-icons
//Import React
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
// Import css
import "./navbar.css";
// Import Components
import { NavbarData } from "./NavbarData";
import NewPost from "../../components/NewPost/NewPost.jsx";
import { signOut } from "../../services/userApi.js";

function Navbar({ setToggle, toggle }) {
  const [showNewPost, setShowNewPost] = useState(false);
  const [open, setOpen] = React.useState(false);
  // Scroll up when clicking on the logo
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  // Deconstruct useAuthContext to pull dispatch
  const navigate = useNavigate();

  let username = window.localStorage.getItem("username");

  const openNewPost = () => {
    setShowNewPost(true);
  };

  const closeNewPost = () => {
    setShowNewPost(false);
  };

  return (
    <>
      <aside className="navbar">
        <div className="navbar-header">
          <img
            onClick={handleLogoClick}
            className="navbar-logo"
            src="./image/logo.png"
            alt="Alike Logo"
          />
          <span className="navbar-logo-text">Hello, {username} </span>
        </div>
        <div className="navbar-menu">
          {NavbarData.map((item, index) => {
            if (item.type === "popup-new-post") {
              return (
                <React.Fragment key={index}>
                  <Link
                    key="new-post"
                    className="navbar-menu__item"
                    onClick={openNewPost}
                  >
                    {item.icon}
                    <span className="navbar-menu__text">{item.title}</span>
                  </Link>
                  {showNewPost && <NewPost onClose={closeNewPost} />}
                </React.Fragment>
              );
            }
            if (item.type === "home") {
              return (
                <Link
                  key={index}
                  className="navbar-menu__item"
                  to={item.path}
                  onClick={() => {
                    if (item.title === "Home") {
                      handleLogoClick();
                    }
                  }}
                >
                  {item.icon}
                  <span className="navbar-menu__text">{item.title}</span>
                </Link>
              );
            } else {
              return (
                <Link
                  key={index}
                  className="navbar-menu__item"
                  to={item.path}
                  onClick={() => {
                    if (item.title === "New Post") {
                      setOpen(true);
                    }
                    if (item.title === "Sign Out") {
                      signOut();
                    }
                  }}
                >
                  {item.icon}
                  <span className="navbar-menu__text">{item.title}</span>
                </Link>
              );
            }
          })}
        </div>
      </aside>
    </>
  );
}

export default Navbar;
