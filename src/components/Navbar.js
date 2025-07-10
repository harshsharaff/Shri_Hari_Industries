import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Shri Hari Industries</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/machinery">Machinery</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/quality">Quality</Link>
        <Link to="/sustainability">Sustainability</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;