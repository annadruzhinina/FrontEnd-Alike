// import CSS file for App.jsx
import "./App.css";

//Importing Screens
import Landing from './screens/Landing/Landing.jsx'
import Profile from './screens/Profile/Profile.jsx'
import Home from './screens/Home/Home.jsx'

import {Route, Routes} 'react-router-dom'

// Import React
import { useEffect, useState, } from "react";

function App() {
  return (
    <section className="app">
      <img
        src="./image/logo_transparent_bg.png"
        className="logo_image"
        alt=""
      />
      <img src="./image/logo.png" className="logo_image" alt="" />
      <h1>
        Hello team! Don't worry, this is just an example from which we can
        establish the principles of our development process.{" "}
      </h1>
      <h5>Let's do it! </h5>
      <h2>Alike</h2>

      <div className="container services_container ">
        <article className="service">
          <div className="service_head">
            <h3>Test</h3>
          </div>
          <ul className="service_list">
            <li>
              <p>Test p</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default App;
