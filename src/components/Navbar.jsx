// import React from "react";
import "../css/index.css";
import "../css/navmobile.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div>
        <div className='logo-container'>
          <li className='small-logo'>
            <img src={logo} alt='no-image' />
          </li>
        </div>

        <div className='menu-container'>
          <button
            className={`menu-toggle ${menuVisible ? "active" : ""}`}
            onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
        <nav className={`navbar ${menuVisible ? "show" : ""}`}>
          <li className='logo'>
            <img src={logo} alt='no-image' />
          </li>
          <ul>
            <li>
              <Link to='/' className='navbar-items active'>
                Home
              </Link>
            </li>

            <li>
              {" "}
              <Link to='/about' className='navbar-items'>
                About
              </Link>
            </li>
            <li>
              <Link to='/our-partners' className='navbar-items'>
                Our Partners
              </Link>
            </li>
            <li>
              <Link to='/projects' className='navbar-items'>
                Projects
              </Link>
            </li>

            <li>
              <Link to='/civil-engagement' className='navbar-items'>
                Civil Engagement
              </Link>
            </li>

            <li>
              {" "}
              <Link to='/contact-us' className='navbar-items'>
                Contact Us
              </Link>
            </li>

            <button className='btn'>Donate</button>
          </ul>
        </nav>
      </div>
    </>
  );
}
