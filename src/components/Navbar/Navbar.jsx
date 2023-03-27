// Home, Search, Message, Profile, LogOut, Report A Problem,... React-icons
//Import React
import React, { useState } from "react";
import { Link , Navigate , useNavigate } from "react-router-dom";
// Import css
import "./navbar.css";
// Import Components
import { NavbarData } from "./NavbarData";
import NewPost from "../../components/NewPost/NewPost.jsx";
import { signOut } from '../../services/userApi.js'

function Navbar({setToggle, toggle}) {
  const [showNewPost, setShowNewPost] = useState(false);
  const [open, setOpen] = React.useState(false);
  // Scroll up when clicking on the logo
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  // Deconstruct useAuthContext to pull dispatch
  const navigate = useNavigate()

  let username = window.localStorage.getItem('username')

  return (
    <>
      <aside className="navbar">
        <div className="navbar-header">
          <img
            onClick={handleLogoClick}
            className="navbar-logo"
            src="./image/logo.png"
          />
          <span className="navbar-logo-text">Hello, {username} </span>
        </div>
        <div className="navbar-menu">
          {NavbarData.map((item, index) => {
            if (item.type === "popup-new-post") {
              return (
                <NewPost
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  className="navbar-menu__item"
                  setToggle={setToggle}
                  toggle={toggle}
                />
              );
            }
            if (item.type === "home") {
              // console.log(item);
              return (
                <Link
                  key={index}
                  className="navbar-menu__item"
                  to={item.path}
                  onClick={() => {
                    if (item.title === "Home") {
                      // setShowNewPost(!showNewPost);
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
                      // setShowNewPost(!showNewPost);
                      setOpen(true);
                    }
                    if (item.title === "Sign Out") {
                      signOut()
                      // console.log("Logged Out")
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
