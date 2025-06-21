import { NavLink } from "react-router-dom";
import './Navbar.css';
import logo from "../../assets/images/logo.png";
import {Brain, BrainCircuit, House} from "lucide-react"
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
    <header className='fixed top-0 header z-50 bg-black/60 backdrop-blur-xl  outline-white w-full   flex  items-center justify-between px-4 py-2'>
      <NavLink to='/' className="flex gap-2">
        <BrainCircuit className="h-8 w-8 font-extrabold text-cyan-300 "/>
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent tracking-wide">
    the.Developer
  </h1>
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
