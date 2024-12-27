import { NavLink } from "react-router-dom";
import './Navbar.css'
import  logo  from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <header className='header '>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-10 h-10 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium '>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-yellow-400 nav-link" : "text-white nav-link"}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-yellow-400 nav-link" : "text-white nav-link"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-yellow-400 nav-link" : "text-white nav-link"}>
          Contact me
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
