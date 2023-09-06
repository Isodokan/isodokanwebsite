// import React from "react";
import "../css/index.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div>
        <nav className='navbar'>
          <li className='logo'>
            <img src={logo} alt='no-image' />
          </li>
          <ul>
            <li>
              <Link to='/' className='navbar-items'>
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
              <Link to='projects' className='navbar-items'>
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
