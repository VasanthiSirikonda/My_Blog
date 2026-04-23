import { useState } from "react";
import "./FloatingContact.css";

import {
  FaWhatsapp,
  // FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaTimes
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sideWrapper">

      {/* Icons */}
      <div className={`iconContainer ${open ? "show" : ""}`}>

        <a
          href="https://wa.me/7993328292"
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
          title="WhatsApp"
        >
          <div className="iconBox whatsapp">
            <FaWhatsapp />
          </div>
        </a>

        {/* <a
          href="https://www.instagram.com/amit.boundless_/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
          title="Instagram"
        >
          <div className="iconBox instagram">
            <FaInstagram />
          </div>
        </a> */}

        <a
          href="https://vasanthi-sirikonda-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
          title="Portfolio"
        >
          <div className="iconBox portfolio">
            <FaGlobe />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/vasanthisirikonda/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
          title="LinkedIn"
        >
          <div className="iconBox linkedin">
            <FaLinkedin />
          </div>
        </a>

        <a
          href="https://github.com/VasanthiSirikonda/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
          title="GitHub"
        >
          <div className="iconBox github">
            <FaGithub />
          </div>
        </a>

      </div>

      {/* Main Button */}
      <button
        className="mainBtn"
        onClick={() => setOpen(!open)}
        aria-label="Contact Options"
      >
        {open ? <FaTimes /> : <MdSupportAgent />}
        <span className="pulse"></span>
      </button>
    </div>
  );
};

export default FloatingContact;