import React from "react";
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img id="colored_logo" src='/colored_logo.png' alt="logo"></img>
                <a href="/" className="logo-text">Stack<span> Exchange</span></a>
            </div>

            <ul className="nav-links">
                <li><a href="/tour">Tour</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/meta">Meta</a></li>
            </ul>
            <div className="navbar-right">
                <div className="navbar-search">

                    <i src='/search_icon.png'></i>
                    <input type="text" placeholder="Search all sites" ></input>
                    
                </div>
            </div>
            <div className="navbar-logo">
                <img id="logo"src="/logo.png" alt = "logo"></img>
            </div>
        </nav>
    );
}

export default Navbar;