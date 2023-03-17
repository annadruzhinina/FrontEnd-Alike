//Import react
import React, { useState } from "react";
//Import css
import "./landing.css";

//import components
import SignUp from "../../components/SignUp/SignUp";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Context/AuthContexts.js";

function Landing() {
  const [userData, setUserData] = useState({
    username: "",
    password: null,
    message: "",
  });
  const navigate = useNavigate();

  //CHECK MERGE
  function handleSignUpClick() {
    navigate(`/sign-up`);
  }

  const handleSubmit = async (e) => {
    // Prevent Page from Reloading
    e.preventDefault();
    // Update User with Values
    // console.log(`Username: ${username}, Password: ${password}`);
    if (userData.password === "") {
      setUserData((prev) => ({
        ...prev,
        message: "Please Enter a valid password",
      }));
    } else {
      try {
        await loginUser(userData);
  
        let response = await getUser()
        setUser(response)
        navigate("/home");
      } catch (error) {
        setUserData((prev) => ({
          ...prev,
          message: "Please Enter a valid username",
        }));
      }
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target

    setUserData(prev => ({
        ...prev,
        [name]: value
    }))
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
              value={userData.username}
              onChange={handleChange}
            />
            <input
              id="pw"
              type="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
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
          <div className="loginErrorMessage">{userData.message}</div>
        </div>
      </div>
    </>
  );
}

export default Landing;
