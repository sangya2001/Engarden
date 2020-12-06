import React from "react";
import "./style.css";
import Logo from "../../Assets/Logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLogo">
        <Link to="/">
          <img src={Logo} alt="Engarden Logo" /> <span className="logoTitle">Engarden</span>
        </Link>
      </div>

      <div className="navbarList">
        <ul>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
