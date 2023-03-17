//import React
import { Route, Routes } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";
import { getUser } from './services/userApi.js';
// import CSS file for App.jsx
// import "./App.css";

//Importing Screens
import Landing from "./screens/Landing/Landing.jsx";
import Profile from "./screens/Profile/Profile.jsx";
import Home from "./screens/Home/Home.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
// importing newrightnavbar temporarily so it can be worked on
import NewRightNavbar from "./components/NewRightNavbar/NewRightNavbar.jsx";

export const UserContext = React.createContext()
const [user, setUser] = useState(null)

useEffect(()=>{
    const fetchUser = async () => {
        let response = await getUser()
        setUser(response)
    }

    fetchUser()
}, [])


function App() {
  let data = ""
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newrightnavbar" element = {<NewRightNavbar/>} />
      </Routes>
    </>
  );
}

export default App;
