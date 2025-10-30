import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="section-title">
            <span className="arrow-icon">▶</span> Let’s Build Something Extraordinary Together</h2>
          <p className="section-description">
            Reach out to us anytime — we’d love to hear from you!
          </p>
        </div>

        {/* Contact Info Boxes */}
        <div className="contact-boxes">
          <div className="contact-box">
            <div className="icon-wrapper">
              <FaEnvelope className="contact-icon" />
            </div>
            <h3>Email</h3>
            <p>info@nuhvinglobal.com</p>
            <p>support@nuhvinglobal.com</p>
          </div>

          <div className="contact-box">
            <div className="icon-wrapper">
              <FaPhoneAlt className="contact-icon" />
            </div>
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
            <p>+91 91234 56789</p>
          </div>

          <div className="contact-box">
            <div className="icon-wrapper">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <h3>Location</h3>
            <p>Hyderabad, Telangana</p>
            <p>India - 500001</p>
          </div>
        </div>
      </div>
    </section>
  );
}
