import React from "react";
import "./landing.css";

function Landing() {
  return (
    <section className="landing">
      <div className="landing-container">
        <div className="landing-left">
          <img src="./image/logo_transparent_bg.png" alt="" />
          <p>Social Me​dia Is Better When You Can Relate </p>
        </div>
        <div className="landing-right">
        <form className="form">
        <h1 className="SigninLogo">Sign Up</h1>
        <input className="username"
          id="username"
          type="text" 
          placeholder="username" 
        />
        <input 
          id="pw"
          type="password" 
          placeholder="password"
        />
        <input 
          id="pwConfirm"
          type="password" 
          placeholder="confirm password"
        />
        <button
          id="submitCredentials"
          type="submit" 
          value="submit">Login 
        </button>
        <button
          id="submitCredentials"
          type="submit" 
          value="submit">Sign Up
        </button>
      </form>
        </div>
      </div>
    </section>
  );
}

export default Landing;
