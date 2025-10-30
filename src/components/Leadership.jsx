import React from "react";
import "./Leadership.css";

export default function Leadership() {
  const leaders = [
    {
      img: "https://via.placeholder.com/400x300",
      name: "John Doe",
      role: "Chief Executive Officer",
      description:
        "Leading with innovation and a strong vision for company growth."
    },
    {
      img: "https://via.placeholder.com/400x300",
      name: "Jane Smith",
      role: "Head of Operations",
      description:
        "Ensuring every process aligns with efficiency and excellence."
    }
  ];

  return (
    <section id="leadership" className="leadership">
      <div className="leadership-container">
        <div className="leadership-header">
          <h2 className="section-title">
            <span className="arrow-icon">▶</span> Leadership That Inspires Innovation

          </h2>
          <p className="section-description">
            Each one showcases my approach and dedication to detail, creativity
          </p>
        </div>

        <div className="leadership-grid">
          {leaders.map((leader, idx) => (
            <div key={idx} className="leadership-card">
              <div className="leadership-image-wrapper">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="leadership-img"
                />
                <div className="leadership-img-hover"></div>
              </div>

              {/* 👇 Added matter below photo */}
              <div className="leadership-info" style={{ padding: "1rem", textAlign: "center" }}>
                <h3 style={{ color: "#ff6f00", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                  {leader.name}
                </h3>
                <h4 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  {leader.role}
                </h4>
                <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: "1.6" }}>
                  {leader.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
