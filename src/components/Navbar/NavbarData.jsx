//Import React
import React from "react";

//Import Icons
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'
import * as CgIcons from 'react-icons/cg'
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'


export const NavbarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <MdIcons.MdHomeFilled/>,
        cName: 'navbar-item'
    },
    {
        title: 'Search',
        path: '',
        icon: <BiIcons.BiSearch/>,
        cName: 'navbar-item',
    },
    {
        title: 'Create',
        path: '',
        icon: <MdIcons.MdOutlineAddToPhotos/>,
        cName: 'navbar-item',
    },
    {
        title: 'Messages',
        path: '',
        icon: <AiIcons.AiFillMessage/>,
        cName: 'navbar-item',
    },
    {
        title: 'Profile',
        path: '/',
        icon: <CgIcons.CgProfile/>,
        cName: 'navbar-item'
    },
    {
        title: 'Sign Out',
        path: '/',
        icon: <FaIcons.FaSignInAlt/>,
        cName: 'navbar-item'
    }
]

