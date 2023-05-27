import React from 'react';
import { NavLink,Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <a className="navItems" href="#">Home</a>
        <a className="navItems" href="#">About</a>
        <a className="navItems" href="#">Try Now</a>
        <a className="navItems" href="#">Contact</a>
    </div>

    </>
  )
}

export default Navbar;

