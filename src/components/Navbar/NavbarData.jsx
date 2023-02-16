//Import React
import React from "react";

//Import Icons
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";

export const NavbarData = [
  {
    title: "Home",
    path: "/home",
    type: "home",
    icon: <MdIcons.MdHomeFilled className="navbar-menu__icon" />,
  },
  {
    title: "Search",
    path: "",
    icon: <BiIcons.BiSearch className="navbar-menu__icon" />,
  },
  {
    title: "New Post",
    path: "",
    type: "popup-new-post",
    icon: <MdIcons.MdOutlinePostAdd className="navbar-menu__icon" />,
  },
  {
    title: "Profile-me",
    path: "/profile-me",

    icon: <CgIcons.CgProfile className="navbar-menu__icon" />,
  },
  {
    title: "Sign Out",
    path: "/",
    icon: <FaIcons.FaSignInAlt className="navbar-menu__icon" />,
  },
];
