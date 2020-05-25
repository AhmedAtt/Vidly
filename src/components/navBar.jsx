import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav">
        <Link class="navbar-brand" to="/">
          Vidly
        </Link>
        <NavLink className="nav-item nav-link" to="/movies">
          Movies
        </NavLink>
        <NavLink className="nav-item nav-link" to="/customers">
          Customers
        </NavLink>
        <NavLink className="nav-item nav-link" to="/Rentals">
          Rentals
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
