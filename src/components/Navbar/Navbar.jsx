import React, { useState } from "react";
import "./Navbar.css";
import logo from "./img/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("EN");

  const options = ["EN", "UZ", "RU"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const menu = () => {
    let men = document.getElementById('menu');
    men.classList.replace('hidden')
  }

  return (
    <div className="Navbar">
      <ul>
        <a href="#">
          <img src={logo} alt="logo" className="logo" />
        </a>
      </ul>

      <button className="menu" id="menu">
        <div></div>
        <div></div>
        <div></div>
      </button>

      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Questions</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>

      <ul>
        <li>
          <div className="dropdown">
            <a onClick={toggleDropdown} className="dropdown-button">
              {selected} <span>{isOpen ? "▲" : "▼"}</span>
            </a>

            {isOpen && (
              <div className="dropdown-menu">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="dropdown-item"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </li>
        <li><a href="#">Share</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
