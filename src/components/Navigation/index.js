import React from "react";
import { Link } from "react-router-dom";
import logo from "../../zebra-logo-png.png";

function Navigation() {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />

        <input className="mobile" type="checkbox" />
        <img className="mobile-logo" alt="menu button" />

        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
