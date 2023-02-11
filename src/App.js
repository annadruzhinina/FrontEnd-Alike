//import React
import { Route, Routes } from "react-router-dom";
// import CSS file for App.jsx
import "./App.css";

//Importing Screens
import Landing from "./screens/Landing/Landing.jsx";
import Profile from "./screens/Profile/Profile.jsx";
import Home from "./screens/Home/Home.jsx";
import RightNavbar from "./components/RightNavbar/RightNavbar.jsx";

// Import React
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Landing />} />
        <Route path="/r-navbar" element={<RightNavbar />} />
        {/* <Route path="/" element={<Profile />} /> */}
      </Routes>
    </>
  );
}

export default App;
