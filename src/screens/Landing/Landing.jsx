import React from "react";
import "./landing.css";
import Button from "@mui/material/Button";
import { useAuthContext } from "../../Hooks/useAuthContext.js"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../Context/AuthContexts.js";

function Landing() {
  const { dispatch } = useAuthContext()
  const [user, setUser] = useState('')
  const navigate = useNavigate();
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [valid, setValid] = useState("")

  const handleSubmit = (e) => {
    // Prevent Page from Reloading
    e.preventDefault()
    // Update User with Values
    console.log(`Username: ${username}, Password: ${password}`)
    loginUser(username, password)
    
    //Send payload (username)
    dispatch({ type: "LOGIN", payload: {username, password} })
    //Reset values to ''
    setUserName('')
    setPassword('')
    setValid('')

    navigate("/home")
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
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="SigninLogo">Sign In</h1>
            <input
              className="username"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e)=> setUserName(e.target.value)}
            />
            <input 
              id="pw" 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            {/* <input
             id="pwConfirm"
             type="password"
             placeholder="Confirm Password"
           /> */}
            <button id="submitCredentials" type="submit" value="submit">
              Login
            </button>
            {/* <button id="submitCredentials" type="submit" value="submit">
              Sign Up
            </button> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Landing;
