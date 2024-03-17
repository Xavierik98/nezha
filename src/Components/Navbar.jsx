import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="menu">
      <a href="#" className="logo">Nezha LARHRISSI</a>
      <ul className="menu-list">
        <li className="menu-item"><Link to="/" className="menu-link">Home</Link></li>
        <li className="menu-item"><Link to="/about" className="menu-link">About</Link></li> 
        <li className="menu-item"><Link to="projects" className="menu-link">Projects</Link></li>
        <li className="menu-item"><Link to="career" className="menu-link">Career</Link></li>
        <li className="menu-item"><Link to="intuition" className="menu-link">Intuition</Link></li>
        <li className="menu-item"><Link to="#" className="menu-link">xxxxxxxx</Link></li>
      </ul>
      <button className="btn"><Link to="/contact" className="menu-link">Contact</Link></button>
      
    </nav>
  );
}

export default Navbar;
