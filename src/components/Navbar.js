import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-title">
        My Wiki
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
