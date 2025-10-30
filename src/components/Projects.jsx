import React from "react";
import "./Projects.css";

const projectHighlights = [
  {
    number: "01",
    title: "Innovative Project Delivery",
    description:
      "We execute projects with a focus on innovation, speed, and precision to meet modern business needs.",
  },
  {
    number: "02",
    title: "Client-Centric Development",
    description:
      "Our development process is fully customized to align with each client's goals and challenges.",
  },
  {
    number: "03",
    title: "Agile Methodologies",
    description:
      "By adopting agile frameworks, we ensure flexibility, transparency, and faster project turnaround.",
  },
  {
    number: "04",
    title: "End-to-End Implementation",
    description:
      "From strategy to deployment, we deliver complete project solutions that ensure measurable success.",
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
              <div className="projects-number">{item.number}</div>
              <h3 className="projects-card-title">{item.title}</h3>
              <p className="projects-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
