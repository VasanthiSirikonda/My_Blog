import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaGithub, FaTwitter, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import { HiHome, HiBookOpen, HiUser, HiInformationCircle, HiMail } from 'react-icons/hi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Main Social Icons Row */}
          <div className="social-icons">
            <a 
              href="https://wa.me/7993328292" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon-box" 
              aria-label="WhatsApp" 
              style={{ "--brand-color": "#25D366" } as React.CSSProperties}
            >
              <FaWhatsapp />
            </a>
            <a 
              href="https://vasanthi-sirikonda-portfolio.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon-box" 
              aria-label="Portfolio" 
              style={{ "--brand-color": "#6366f1" } as React.CSSProperties}
            >
              <FaGlobe />
            </a>
            <a 
              href="https://x.com/VasanthiS32995" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon-box" 
              aria-label="Twitter" 
              style={{ "--brand-color": "#1DA1F2" } as React.CSSProperties}
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.linkedin.com/in/vasanthisirikonda/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon-box" 
              aria-label="LinkedIn" 
              style={{ "--brand-color": "#0A66C2" } as React.CSSProperties}
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://github.com/VasanthiSirikonda" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon-box" 
              aria-label="GitHub" 
              style={{ "--brand-color": "#ffffff" } as React.CSSProperties}
            >
              <FaGithub />
            </a>
          </div>

          {/* Navigation Icons with Tooltip Labels */}
          <nav className="footer-nav-icons">
            <a href="/" data-label="Home"><HiHome /></a>
            <a href="/blog" data-label="Blog"><HiBookOpen /></a>
            <a href="/personal" data-label="Personal"><HiUser /></a>
            <a href="/about" data-label="About"><HiInformationCircle /></a>
            <a href="/contact" data-label="Contact"><HiMail /></a>
          </nav>
          
          <div className="footer-divider"></div>
          
          <h4 className="footer-name">Vasanthi Sirikonda</h4>
          <p className="copyright">
            © {currentYear} All rights reserved. Made with <span className="heart">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;