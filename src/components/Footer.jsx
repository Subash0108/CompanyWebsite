import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Nuhvin Global Services Pvt. Ltd. | All
          Rights Reserved.
        </p>

        <div className="footer-links">
          <a href="https://www.nuhvin.com/termsandconditions" className="footer-link">
            Terms & Conditions
          </a>
          <a href="https://www.nuhvin.com/privacypolicy" className="footer-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
