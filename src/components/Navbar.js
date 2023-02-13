import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-title">
        <img src={logo} alt="" />
        My Wiki
      </Link>
      <ul>
        <li>
          <Link to="/mywiki">Home</Link>
        </li>
        <li>
          <Link to="/mywiki/about">About</Link>
        </li>
        {/* <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
