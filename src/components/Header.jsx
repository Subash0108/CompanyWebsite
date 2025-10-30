import React, { useState, useEffect } from "react";
import "./Header.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
  FaMapMarkedAlt,
} from "react-icons/fa";

export default function Header({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌙 Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* === Logo === */}
      <a
        href="https://www.nuhvin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/logo.png" alt="Nuhvin Logo" className="header-logo" />
      </a>

      {/* === Social Icons === */}
      <div className="social-icons">
        <a href="https://www.nuhvin.com/" title="Contact Us">
          <FaEnvelope />
        </a>
        <a href="https://www.nuhvin.com/" title="Contact Us">
          <FaPhoneAlt />
        </a>
        <a href="https://www.nuhvin.com/" title="Contact Us">
          <FaWhatsapp />
        </a>
        <a href="https://www.nuhvin.com/" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://www.nuhvin.com/" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.nuhvin.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.nuhvin.com/" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.nuhvin.com/" target="_blank" rel="noreferrer">
          <FaMapMarkedAlt />
        </a>

        {/* === 🌗 Theme Switch === */}
        <label className="theme-switch">
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>
    </header>
  );
}
