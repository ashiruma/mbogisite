import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => (
  <nav style={{ display: "flex", alignItems: "center", padding: "1rem" }}>
    <span style={{ fontWeight: "bold", marginRight: "2rem" }}>Mbogiwood</span>
    <NavLink to="/" style={{ margin: "0 1rem" }}>Home</NavLink>
    <NavLink to="/blog" style={{ margin: "0 1rem" }}>Blog</NavLink>
    <NavLink to="/contact" style={{ margin: "0 1rem" }}>Contact</NavLink>
    <NavLink to="/newsletter" style={{ margin: "0 1rem" }}>Newsletter</NavLink>
    <NavLink to="/admin" style={{ margin: "0 1rem" }}>Admin</NavLink>
    <NavLink to="/profile" style={{ margin: "0 1rem" }}>Profile</NavLink>
    <NavLink to="/login" style={{ margin: "0 1rem" }}>Login</NavLink>
    <SearchBar />
    <DarkModeToggle />
  </nav>
);

export default Navbar;