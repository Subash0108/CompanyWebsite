import React from "react";
import "./Projects.css";

const projectHighlights = [
  {
    logo: "/womenrider.png",
    title: "Women Rider",
    description:
      "A comprehensive ride-hailing platform designed exclusively for women, featuring passenger and driver apps along with powerful admin panels. Nuhvin developed the complete ecosystem ensuring safety, trust, and seamless operation for users and administrators alike.",
  },
  {
    logo: "/Edpclogo.png",
    title: "EPDC India",
    description:
      "EPDC India is a dedicated news website focused on daily news updates, e-paper releases, and environmental protection. It offers timely news updates and awareness campaigns to motivate communities toward sustainable living.",
  },
  {
    logo: "/chruchnewlogo.png",
    title: "Pratyaksha News",
    description:
      "A modern news portal coupled with customized admin panels for content curation and real-time updates. Nuhvin focused on delivering a platform that supports growth and efficient editorial control.",
  },
  {
    logo: "/chalabagudhi.png",
    title: "Chaala Bagundhi",
    description:
      "Chaala Bagundhi is an innovative e-commerce platform for food and grocery delivery. The system enhances operational efficiency and customer experience with a smooth admin panel for vendor and order management.",
  },
  {
    logo: "/v2.png",
    title: "V2 Overseas",
    description:
      "An education consulting platform helping students explore top universities globally. The admin panel streamlines student applications and university management efficiently.",
  },
  {
    logo: "/realtemple.webp",
    title: "Real Temple",
    description:
      "A cultural and religious platform developed with intuitive admin dashboards for streamlined management of content, user data, and event scheduling.",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-overlay">
        <div className="projects-header">
          <h2 className="projects-title">
            <span className="arrow-icon">▶</span> Our Projects:
          </h2>
          <h3>Delivering Excellence, Every Time</h3>
          <p className="projects-description">
            Explore some of the key factors that make our project execution stand out in quality, speed, and innovation.
          </p>
        </div>

        <div className="projects-grid">
          {projectHighlights.map((item, idx) => (
            <div className="projects-card" key={idx}>
              <div className="projects-logo">
                <img src={item.logo} alt={item.title} />
              </div>
              <h3 className="projects-card-title">{item.title}</h3>
              <p className="projects-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
