import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* 가운데 정렬용 wrapper 안에 제목 */}
        <div className="navbar-title-wrapper">
          <Link to="/" className="navbar-title rainbow-text" onClick={() => setIsOpen(false)}>
            예나지금이나
          </Link>
        </div>

        {/* 오른쪽 여백용 spacer */}
        <div className="spacer" />
      </nav>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="sidebar-links">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>Info</Link></li>
          <li><Link to="/album" onClick={() => setIsOpen(false)}>Album</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
