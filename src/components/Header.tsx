import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo_initials.png';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
           <img src={logo} alt="Logo" className="logo-image" />
            <span className="logo-text">Vasanthi Sirikonda</span>
          </Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/personal" className="nav-link">Personal</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
