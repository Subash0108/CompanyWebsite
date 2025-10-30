import React from "react";
import "./ThanksCard.css";

export default function ThanksCard() {
  return (
    <section className="thanks-card">
      <h2 className="thanks-title">
        <span className="row-icon">▶</span>Thank You!</h2>
      <p className="thanks-message">
        We truly appreciate your interest in{" "}
        <a href="https://www.nuhvin.com/" className="thanks-link">
          Nuhvin Global Services Pvt. Ltd.
        </a>
        . Our team will reach out to you shortly to assist with your
        requirements.
      </p>
    </section>
  );
}
