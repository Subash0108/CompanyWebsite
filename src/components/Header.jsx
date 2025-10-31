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
  FaBars, // ✅ Hamburger icon
} from "react-icons/fa";

export default function Header({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  // ✅ Handle scroll + resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ✅ Close menu when clicking outside (MOBILE)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest(".social-icons") &&
        !event.target.closest(".menu-toggle")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  // ✅ Theme switch
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // ✅ Menu toggle
  const toggleMenu = () => setMenuOpen(!menuOpen);

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

      {/* === Theme toggle (mobile only) === */}
      {isMobile && (
        <label className="theme-switch">
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      )}

      {/* === Social Icons === */}
      <div className={`social-icons ${menuOpen ? "active" : ""}`}>
        {/* 🍔 Hamburger menu (mobile only) */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* === All social icons === */}
        <div className="more-icons">
          <a href="mailto:hrinfo@nuhvin.com" title="Send Email">
            <FaEnvelope />
          </a>

          <a href="tel:+919392296850" title="Call Us">
            <FaPhoneAlt />
          </a>

          <a
            href="https://wa.me/919392296850"
            target="_blank"
            rel="noreferrer"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.linkedin.com/company/nuhvin/?originalSubdomain=in"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://x.com/nuhvin"
            target="_blank"
            rel="noreferrer"
            title="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.instagram.com/ngs_pvt_ltd/"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/nuhvin/"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.google.com/maps/place/Nuhvin+Global+Services+Pvt+Ltd/"
            target="_blank"
            rel="noreferrer"
            title="Location"
          >
            <FaMapMarkedAlt />
          </a>

          {/* 🌗 Theme switch (desktop only) */}
          {!isMobile && (
            <label className="theme-switch">
              <input
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme}
              />
              <span className="slider"></span>
            </label>
          )}
        </div>
      </div>
    </header>
  );
}
