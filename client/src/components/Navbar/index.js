import React from "react";
import "./index.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Booking Application - MERN</span>
                <div className="navItems">
                    <button className="navButtons">Register</button>
                    <button className="navButtons">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
