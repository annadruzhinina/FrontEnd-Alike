//import React
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
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

function App() {
    const [user, setUser] = useState(null)
    const [toggle, setToggle] = useState(false);
    
    useEffect(()=>{
        const fetchUser = async () => {
            let response = await getUser()
            setUser(response)
        }
        fetchUser()
    }, [])
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home user={user} toggle={toggle} setToggle={setToggle}/>} />
                <Route path="/" element={<Landing  setUser={setUser} />} />
                <Route path="/sign-up" element={<SignUp setUser={setUser} user={user}/>} />
                <Route path="/profile" element={<Profile user={user} toggle={toggle} setToggle={setToggle}/>} />
                <Route path="/newrightnavbar" element = {<NewRightNavbar/>} />
            </Routes>
        </>
    );
}

export default App;
