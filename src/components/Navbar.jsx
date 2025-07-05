import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: 'pink',
    color: 'white',
    padding: '1rem 0',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    fontFamily: "'Jua', sans-serif"
  };

  const ulStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0,
    fontWeight: '600',
    fontSize: '1.1rem',
  };

  const liStyle = {
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = '#facc15';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = 'white';
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Gallery</Link>
        </li>
        <li style={liStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
        </li>
        <li style={liStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to="/gallery" style={{ textDecoration: 'none', color: 'inherit' }}>Info</Link>
        </li>
        <li style={liStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
