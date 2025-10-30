import React from "react";
import "./WhyPartner.css";

const whyPartnerPoints = [
  {
    number: "01",
    title: "Trusted Collaborations",
    description:
      "We build partnerships, not just projects. Transparency, integrity, and shared success guide every engagement. By working closely with our clients, we ensure every solution aligns with your vision and creates long-term value.",
  },
  {
    number: "02",
    title: "Smart Innovation",
    description:
      "We deliver future-ready innovations build on advanced technologies with creative thinking. Every Nuhvin solution is designed to accelerate your growth, improve efficiency, and help future-proof your business for ever-changing markets.",
  },
  {
    number: "03",
    title: "Creative & Skilled Team",
    description:
      "our developers, designers, and strategists blend creativity with technical excellence. We think logically, move fast, and build digital solutions that are smart, scalable, and designed to help your business grow.",
  },
  {
    number: "04",
    title: "Continuous Support",
    description:
      "The relationship doesn’t end at launch. Ongoing guidance, optimization, and support ensure your product evolves, performs, and delivers real business value.",
  },
];

export default function WhyPartner() {
  return (
    <section className="why-partner">
      <div className="why-partner-overlay">
        <div className="why-partner-header">
          <h2 className="why-partner-title">
            <span className="arrow-icon">▶</span> The Nuhvin Edge:
          </h2>
          <h3>Why Industry Leaders Trust Us</h3>
          <p className="why-partner-description">
            Discover how our expertise, commitment, and values make us the right choice for your next project.
          </p>
        </div>

        <div className="why-partner-grid">
          {whyPartnerPoints.map((item, idx) => (
            <div className="why-partner-card" key={idx}>
              <div className="why-partner-number">{item.number}</div>
              <h3 className="why-partner-card-title">{item.title}</h3>
              <p className="why-partner-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
