import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About TechBlog</h3>
          <p>A platform for sharing insights on modern web development, design, and technology.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/personal">Personal</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://x.com/VasanthiS32995" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
            <a href="https://www.linkedin.com/in/vasanthisirikonda/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://github.com/VasanthiSirikonda" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} TechBlog. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
