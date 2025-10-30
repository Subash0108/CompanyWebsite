import React from "react";
import "./Herosection.css";

export default function HeroSection() {
  // Function to scroll to next section
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      {/* Background Gradient */}
      <div className="hero-background"></div>
      {/* Background Large NGS Text */}
      <span className="hero-bg-text">NUHVIN</span>

      {/* Main Text */}
      <div className="hero-content">
        <h1 className="hero-title">
          <a
            href="https://www.nuhvin.com/"
            className="hero-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuhvin
          </a>{" "}
          Global Services Pvt. Ltd. <br />
        </h1>
        <p className="hero-description">"Stand It. You Win."</p>
      </div>

      {/* Static Circular Text Badge */}
      <div className="hero-circle" onClick={scrollToNext}>
        <div className="circle-center"></div>
        <svg viewBox="0 0 200 200" className="circle-svg">
          <path
            id="textcircle"
            d="M 100, 100
               m -75, 0
               a 75,75 0 1,1 150,0
               a 75,75 0 1,1 -150,0"
          />
          <text fill="white" fontSize="13" letterSpacing="6">
            <textPath href="#textcircle">
              S i n c e &nbsp; 2 0 0 9 &nbsp; B e s t &nbsp; W o r k i n g
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  );
}
