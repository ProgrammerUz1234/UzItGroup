import React, { useState } from "react";
import "./Navbar.css";
import logo from "./img/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-fluid c">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <button
            className="navbar-toggler link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>☰</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 list">
              <li className="nav-item">
                <a className="link" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="link" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="link" href="#">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="link" href="#">
                  Questions
                </a>
              </li>
              <li className="nav-item">
                <a className="link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex gap-5" role="search">
              <li className="nav-item dropdown">
                <a
                  className="link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Languages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#uz">
                      UZ
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#ru">
                      RU
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item m-8" href="#en">
                      EN
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Share
                </a>
                <ul className="dropdown-menu d">
                  <li>
                    <a className="dropdown-item" href="#">
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Instagram
                    </a>
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
