//import React
import { Route, Routes } from "react-router-dom";
// import CSS file for App.jsx
import "./App.css";

//Importing Screens
import Landing from "./screens/Landing/Landing.jsx";
import Profile from "./screens/Profile/Profile.jsx";
import Home from "./screens/Home/Home.jsx";
import RightNavbar from "./components/RightNavbar/RightNavbar.jsx";
// import SignUp from "./components/SignOut/SignIn";
import SignUp from "./components/SignUp/SignUp.jsx";

// Import React
import { useEffect, useState } from "react";
import Signin from "./components/SignUp/SignUp";

function App() {
  return (
    <section className="app">
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/sign-in" element={<Signin />} /> */}
        <Route path="/sign-up" element={<Landing/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/r-navbar" element={<RightNavbar />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </section>
  );
}

export default App;
