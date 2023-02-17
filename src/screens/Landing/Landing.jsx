//Import react
import React, { useState } from "react";
//Import css
import "./landing.css";

//import components
import SignUp from "../../components/SignUp/SignUp";
import Button from "@mui/material/Button";

import { useAuthContext } from "../../Hooks/useAuthContext.js";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Context/AuthContexts.js";

function Landing() {
  const { dispatch } = useAuthContext();
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState("");

  //CHECK MERGE
  function handleSignUpClick() {
    let path = `/sign-up`;
    navigate(path);
  }

  const handleSubmit = (e) => {
    // Prevent Page from Reloading
    e.preventDefault();
    // Update User with Values
    console.log(`Username: ${username}, Password: ${password}`);
    loginUser(username, password);

    //Send payload (username)
    dispatch({ type: "LOGIN", payload: { username, password } });
    //Reset values to ''
    setUserName("");
    setPassword("");
    setValid("");

    navigate("/home");
  };

  return (
    <>
      <div className="landing-home-header">
        <img className="landing-home-header-image" src="./image/logo.png" />
        <span>Alike</span>
      </div>
      <div className="landing">
        <div className="landig-content">
          <h2 className="landing-title">
            We believe that motivation is the key to success
          </h2>
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="SigninLogo">Sign In</h1>
            <input
              className="username"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              id="pw"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button id="submitCredentials" type="submit" value="submit">
              Login
            </button>
            <button
              onClick={handleSignUpClick}
              id="submitCredentials"
              value="submit"
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Landing;
