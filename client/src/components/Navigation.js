import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
    // State variable is isActive

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      <Link to="/" className="navbar-item">
          Your Logo
        </Link>
        <Link
          to="#"
          onClick={toggleMenu}
          role="button"
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <Link to="/games" className="navbar-item">
            Games
          </Link>
          <Link to="/contact" className="navbar-item">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
