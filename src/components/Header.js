import { useState } from "react";
import { NavLink, Link } from "react-router";
import Hamburger from "../assets/icon_hamburger_menu.svg";
import basketIcon from "../assets/icon-basket.svg";
import { navLinks } from "../data/navLinks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <nav aria-label="Main Navigation">
          <div className="logo-container">
            <Link to="/" onClick={closeMenu}>
              <img src="/logo.png" alt="Little Lemon Logo" />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <ul className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  end={link.end} 
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMenu} 
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <img src={Hamburger} alt="Hamburger Menu" />
          </button>

          {/* Basket Icon (Visible on both desktop & mobile) */}
          <Link to="/order" className="header-basket-link" aria-label="Shopping Cart">
            <img src={basketIcon} alt="Basket" className="basket-icon" />
          </Link>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${isMenuOpen ? "open" : ""}`} 
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />

      {/* Mobile Drawer */}
      <div 
        className={`mobile-drawer ${isMenuOpen ? "open" : ""}`} 
        role="dialog" 
        aria-modal="true" 
        aria-label="Mobile Navigation"
      >
        <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
          &times;
        </button>
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path} 
                end={link.end} 
                className={({ isActive }) => (isActive ? "active" : "")} 
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
