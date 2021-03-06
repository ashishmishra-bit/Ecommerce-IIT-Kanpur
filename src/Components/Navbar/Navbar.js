import React, { useState } from 'react';
import { MenuList } from './MenuList';
import Logo from '../../Images/logo.png';
import './Navbar.css';
import { NavLink } from "react-router-dom"

const Navbar = () => {

    const [clicked ,setClicked] = useState(false);

    const menuList = MenuList.map(({ url , title } , index) =>{
        return(
            <li key={index}>
                <NavLink exact to ={url} activeClassName = "active">{title}</NavLink>
            </li>
        )
    });

    const handleMenuClick= () => {
        setClicked(!clicked);
    };

    return (
        <nav>
            <div className="logo">
                <img className = "logo" src={Logo} alt = "Logo" />
            </div>
            <div className="menu-icon" onClick={handleMenuClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={ clicked ? "menu-list" : "menu-list close"}>
                {menuList}
            </ul>
        </nav>
    )
}

export default Navbar
