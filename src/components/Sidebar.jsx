import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      {isOpen && (
        <ul className="nav-links">
          <li><Link to="/">Gallery</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;