import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'active' : ''}
        end
      >
        Home
      </NavLink>
      <NavLink 
        to="/menu" 
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Menu
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        About
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;