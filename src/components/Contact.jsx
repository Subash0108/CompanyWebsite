import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const openMap = () => {
    window.open(
      "https://www.google.com/maps/place/Nuhvin+Global+Services+Pvt+Ltd/@17.4003603,78.3626679,17z/data=!3m1!4b1!4m6!3m5!1s0x24ae90656e17c143:0xd3c837b594166d2f!8m2!3d17.4003603!4d78.3652428!16s%2Fg%2F11vwn7b1vn?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">
            <span className="arrow-icon">▶</span> Let’s Build Something Extraordinary Together
          </h2>
          <p className="contact-description">
            Reach out to us anytime — we’d love to hear from you!
          </p>
        </div>

        {/* Contact Info Boxes */}
        <div className="contact-boxes">
          {/* Email Box */}
          <div className="contact-box">
            <div className="icon-wrapper">
              <FaEnvelope className="contact-icon" />
            </div>
            <h3>Email</h3>
            <p>
              <a href="mailto:hrinfo@nuhvin.com" className="contact-link">
                hrinfo@nuhvin.com
              </a>
            </p>
            <p>
              <a href="mailto:ngsinfo@nuhvin.com" className="contact-link">
                ngsinfo@nuhvin.com
              </a>
            </p>
          </div>

          {/* Phone Box */}
          <div className="contact-box">
            <div className="icon-wrapper">
              <FaPhoneAlt className="contact-icon" />
            </div>
            <h3>Phone</h3>
            <p>
              <a href="tel:+919392296850" className="contact-link">
                +91 93922 96850
              </a>
            </p>
            <p>
              <a href="tel:+917729074144" className="contact-link">
                +91 77290 74144
              </a>
            </p>
          </div>

          {/* Location Box (Clickable) */}
          <div className="contact-box" onClick={openMap} style={{ cursor: "pointer" }}>
            <div className="icon-wrapper">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <h3>Location</h3>
            <p>4th Floor, Sankepalle Empire,</p>
            <p>Puppalguda, Manikonda,</p>
            <p>Hyderabad, Telangana-500089</p>
          </div>
        </div>

        {/* Bottom Orange Banner */}
        <div className="service-bottom-banner">
          <div className="banner-arrow">→</div>
          <p className="banner-text">
            We don’t just follow technology trends. We set them.{" "}
            <a href="https://www.nuhvin.com/contact" className="banner-link">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
