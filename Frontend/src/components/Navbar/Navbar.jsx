import { NavLink } from "react-router-dom";
import './Navbar.css';
import logo from "../../assets/images/logo.png";
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
    <header className='header flex items-center justify-between px-4 py-2'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-10 h-10 object-contain' />
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
      <nav className={`menu ${isMenuOpen ? "active" : ""}`}>
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
