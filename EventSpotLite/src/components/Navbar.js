import React from 'react';
import './navbar.css';

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">EventSpot Lite</h1>
      <input
        className="search-input"
        placeholder="Search events..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;
