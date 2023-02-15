//import react
import React from "react";
// import css
import "./signup.css";
// redirect to new path
import { useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate();
  function handleSignInClick() {
    let path = `/`;
    navigate(path);
  }
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
            <h1 className="SigninLogo">Sign Up</h1>
            <input
              className="username"
              id="username"
              type="text"
              placeholder="Username"
            />
            <input id="pw" type="password" placeholder="Password" />
            <input
              id="pwConfirm"
              type="password"
              placeholder="Confirm Password"
            />
            <button
              onClick={handleSignInClick}
              id="submitCredentials"
              type="submit"
              value="submit"
            >
              Back
            </button>
            <button id="submitCredentials" type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
