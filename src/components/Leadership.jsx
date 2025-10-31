import React from "react";
import "./Leadership.css";

export default function Leadership() {
  return (
    <section id="leadership" className="leadership">
      <div className="leadership-container">
        {/* Header */}
        <div className="leadership-header">
          <h2 className="leader-title">
            <span className="arrow-icon">▶</span> Leadership That Inspires Innovation
          </h2>
          <p className="leader-description">
            Our leaders drive excellence, inspire creativity, and shape the vision of our company.
          </p>
        </div>

        {/* Main Layout */}
        <div className="leadership-layout">
          {/* Left Image */}
          <div className="leader-photo">
            <img src="/1.jpg" alt="Leader Left" />
          </div>

          {/* Middle Section */}
          <div className="leader-middle">
            {/* Founder Card */}
            <div className="vision-mission-card founder-card">
              <span className="arrow-left">▶</span>
              <h3>Pavan Sai Viswanadhuni</h3>
              <p className="leader-role">Founder, CEO & Managing Director</p>
              <p>
                At Nuhvin, I believe great ideas deserve powerful execution. My goal is to help
                businesses grow through smart technology, creativity, and teamwork. We focus on
                building digital solutions that make a real difference — practical, innovative, and
                built for long-term success.
              </p>
            </div>

            {/* Co-Founder Card */}
            <div className="vision-mission-card cofounder-card">
              <span className="arrow-right">◀</span>
              <h3>V. D. Prasad</h3>
              <p className="leader-role">Co-Founder & Director</p>
              <p>
                I focus on building strong business operations and financial strategies that ensure
                every project delivers measurable value. My goal is to keep our clients’ trust by
                maintaining transparency, efficiency, and long-term partnerships that help businesses
                grow with confidence.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="leader-photo">
            <img src="/2.jpg" alt="Leader Right" />
          </div>
        </div>
      </div>
    </section>
  );
}
