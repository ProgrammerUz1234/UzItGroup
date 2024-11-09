import React, { useState } from "react";
import "./Navbar.css";
import logo from './img/logo.png'

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">About Us</a>
        </li>
        <li>
          <a href="#about">Team</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#questions">Questions</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <a href="#more">Language</a>
          {dropdown && (
            <ul className="dropdown-menu">
              <li>
                <a href="#en">EN</a>
              </li>
              <li>
                <a href="#ru">RU</a>
              </li>
              <li>
                <a href="#uz">UZ</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#share">Share</a>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={() => setDropdown(!dropdown)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
