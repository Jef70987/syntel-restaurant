import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'hamburger--active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Menu */}
      <nav className={`nav ${isMenuOpen ? 'nav--active' : ''}`}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={closeMenu}
          end
        >
          Home
        </NavLink>
        <NavLink 
          to="/menu" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={closeMenu}
        >
          Menu
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </nav>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div className="nav-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Navigation;