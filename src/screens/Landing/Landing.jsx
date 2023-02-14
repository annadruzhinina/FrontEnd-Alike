import React from "react";
import "./landing.css";
import Button from "@mui/material/Button";

function Landing() {
  return (
    <>
      <div className="landing-home-header">
        <img
          className="landing-home-header-image"
          // src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          src="./image/logo_transparent_bg_new.png"
        />
        <span>Alike</span>
      </div>
      <div className="landing">
        <div className="landig-content">
          <h2 className="landing-title">
            Social Me​dia Is Better When You Can Relate{" "}
          </h2>
          <form className="form">
            <h1 className="SigninLogo">Sign In</h1>
            <input
              className="username"
              id="username"
              type="text"
              placeholder="Username"
            />
            <input id="pw" type="password" placeholder="Password" />
            {/* <input
             id="pwConfirm"
             type="password"
             placeholder="Confirm Password"
           /> */}
            <button id="submitCredentials" type="submit" value="submit">
              Login
            </button>
            <button id="submitCredentials" type="submit" value="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Landing;
