import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({darkMode, setDarkMode}) => {
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <Link to ="/stitches" style={{ textDecoration: 'none', color: '#FF69B4'}}>
      <h1>Crypto Tracker</h1>
      </Link>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
