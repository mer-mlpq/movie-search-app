import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <h1>LOGO</h1>
        </NavLink>
      </div>
      <div className="pages">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
