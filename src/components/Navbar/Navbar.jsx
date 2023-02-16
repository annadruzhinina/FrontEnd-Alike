import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import NewPost from "../../components/NewPost/NewPost.jsx";

function Navbar() {
  const [showNewPost, setShowNewPost] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <aside className="navbar">
        <div className="navbar-header">
          <img
            onClick={handleLogoClick}
            className="navbar-logo"
            src="./image/logo.png"
          />
          <span className="navbar-logo-text">Hello, </span>
        </div>
        <div className="navbar-menu">
          {NavbarData.map((item, index) => {
            if (item.type === "popup-new-post") {
              return (
                <NewPost
                  icon={item.icon}
                  title={item.title}
                  className="navbar-menu__item"
                />
              );
            }
            if (item.type === "home") {
              console.log(item);
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
