import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";

const Navbar = () => {
  const handleLogout = async () => {
    await logout();
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/add-product">Add Product</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
