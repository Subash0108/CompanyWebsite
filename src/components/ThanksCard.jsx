import React from "react";
import "./ThanksCard.css";

export default function ThanksCard() {
  return (
    <section className="thanks-card">
      <h2 className="thanks-title">Thank You!</h2>
      <p className="thanks-message">
        The Future Starts with Us — Today.{" "}
        <a href="https://www.nuhvin.com/" className="thanks-link">
          @Nuhvin
        </a>
      </p>
    </section>
  );
}
