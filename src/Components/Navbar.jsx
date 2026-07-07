import React, { useState } from "react";
import logo from "../assets/logo.png";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("home");



  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm py-2">
        <div className="container d-flex justify-content-between align-items-center">

          {/* Logo */}
          <div className="d-flex align-items-center">
            <img src={logo} alt="Readify Logo" className="logo-img" />
              <h4 className="brand-title mb-0 ms-2">Readify</h4>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <Link className="btn btn-primary button-primary" to="/login">Login</Link>
            <Link className="btn btn-primary button-primary" to="/signup">Sign Up</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;