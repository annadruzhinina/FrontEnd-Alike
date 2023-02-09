// import CSS file for App.jsx
import "./App.css";
import Landing from "./screens/Landing/Landing";



//Importing Screens
import Landing from './screens/Landing/Landing.jsx'
import Profile from './screens/Profile/Profile.jsx'
import Home from './screens/Home/Home.jsx'

import {Route, Routes} 'react-router-dom'

// Import React
import { useEffect, useState, } from "react";

function App() {
  return(
    <section className="app">
      <Routes>
        <Route path="/sign-in" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </section>
  );
}

export default App;
