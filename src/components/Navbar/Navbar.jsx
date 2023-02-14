// // Home, Search, Message, Profile, LogOut, Report A Problem,... React-icons
import React, { useState } from "react";
import "./navbar.css";
import { Link , Navigate , useNavigate } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import NewPost from "../../components/NewPost/NewPost.jsx";
import { useAuthContext } from "../../Hooks/useAuthContext.js";

function Navbar() {
  const [showNewPost, setShowNewPost] = useState(false);
  const [open, setOpen] = React.useState(false);
    // Deconstruct useAuthContext to pull dispatch
    const { dispatch } = useAuthContext()
    const { user } = useAuthContext()
    const navigate = useNavigate()


  return (
    <>
      <aside className="navbar">
        <div className="navbar-header">
          <img
            className="navbar-logo"
            src="./image/logo_transparent_bg_new.png"
          />
          <span className="navbar-logo-text">Alike</span>
        </div>
        <div className="navbar-menu">
          {NavbarData.map((item, index) => {
            if (item.type === "popup-new-post") {
              return (
                <NewPost
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  className="navbar-menu__item"
                />
              );
            } else {
              return (
                <Link
                  key={index}
                  className="navbar-menu__item"
                  to={item.path}
                  onClick={() => {
                    if (item.title === "New Post") {
                      // setShowNewPost(!showNewPost);
                      setOpen(true);
                    }
                    if (item.title === "Sign Out") {
                      dispatch({ type: "LOGOUT", payload: null })
                      console.log("Logged Out")
                    }
                  }}
                >
                  {item.icon}
                  <span className="navbar-menu__text">{item.title}</span>
                </Link>
              );
            }
          })}
        </div>
      </aside>
    </>
  );
}

export default Navbar;


// function Navbar() {
//   return (
//     <aside className="navbar">
//       <div className="navbar-header">
//         <img
//           className="navbar-logo"
//           src="./image/logo_transparent_bg_new.png"
//         />
//         <span className="navbar-logo-text">Alike</span>
//       </div>
//       <div className="navbar-menu">
//         {NavbarData.map((item, index) => {
//           return (
//             <Link key={index} className="navbar-menu__item" to={item.path}>
//               {item.icon}
//               <span className="navbar-menu__text">{item.title}</span>
//             </Link>
//           );
//         })}
//       </div>
//     </aside>
//   );
// }

// export default Navbar;