import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaSearch, FaHeart, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import logo from '../assets/images/logo-tr.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="ECS Logo TR" className="logo-image" />
        </Link>

        {/* Nav Links - Yeni menü yapısı */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/erkek">Erkek</Link>
          <Link to="/kadin">Kadın</Link>
          <Link to="/cocuk">Çocuk</Link>
        </div>

        {/* Sağ taraftaki ikonlar */}
        <div className={`nav-right ${isMenuOpen ? 'active' : ''}`}>
          <div className="search-container">
            <input type="text" placeholder="Ara..." />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
          <div className="nav-icons">
            <Link to="/favorites" className="icon-btn">
              <FaHeart />
            </Link>
            <Link to="/profile" className="icon-btn">
              <FaUser />
            </Link>
            <Link to="/cart" className="icon-btn">
              <FaShoppingCart />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar; 