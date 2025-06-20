import { NavLink } from "react-router-dom";
import './Navbar.css';
import logo from "../../assets/images/logo.png";
import {House} from "lucide-react"
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <header className='header z-50 bg-gradient-to-br from-black/30 to-black/30  outline-white w-full   flex  items-center justify-between px-4 py-2'>
      <NavLink to='/'>
        <House className="h-8 w-8 text-white font-medium"/>
      </NavLink>
      <button
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`menu ${isMenuOpen ? "active" : ""} font-semibold`}>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            `${isActive ? "text-yellow-400" : "text-white"} ${
              !isSmallScreen ? "nav-link" : ""
            } md:nav-link`
          }
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            `${isActive ? "text-yellow-400" : "text-white"} ${
              !isSmallScreen ? "nav-link" : ""
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            `${isActive ? "text-yellow-400" : "text-white"} ${
              !isSmallScreen ? "nav-link" : ""
            }`
          }
        >
          Contact me
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
