//import React
import { Route, Routes } from "react-router-dom";
// import CSS file for App.jsx
import "./App.css";

//Importing Screens
import Landing from "./screens/Landing/Landing.jsx";
import Profile from "./screens/Profile/Profile.jsx";
import ProfileMe from "./screens/ProfileMe/ProfileMe.jsx";
import Home from "./screens/Home/Home.jsx";
import RightNavbar from "./components/RightNavbar/RightNavbar.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
// Import React
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile-me" element={<ProfileMe />} />
        {/* <Route path="/" element={<Profile />} /> */}
      </Routes>
    </>
  );
}

export default App;
