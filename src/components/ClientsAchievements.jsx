import React from "react";
import "./ClientsAchievements.css";

const achievements = [
  {
    // client: "EPDC India",
    headline: "EPDC India",
    description:
      "The Nuhvin team did a great job building our news website. They understood our needs, worked closely with us, and delivered exactly what I am looking for. The EPDC site is now our strongest outreach tool. Grateful for their commitment to green and look forward to future projects together.",
    year: "2025",
    rating: 5,
  },
  {
    // client: "Pratyaksha News",
    headline: "Pratyaksha News",
    description:
      "Nuhvin sets the standard for quality and professionalism in every project. They don’t just follow instructions — they think with the business logic of your projects. Both Pratyaksha News and Real Temple were delivered with great attention to detail, modern design, and long-term usability. Great skills, clear communication, and results we’re truly happy with.",
    year: "2024",
    rating: 4,
  },
  {
    // client: " V2 Overseas ",
    headline: "V2 Overseas",
    description:
      "We’re very happy with the work Nuhvin delivered. The team completed everything on time, with great quality, and truly understood our requirements. They handled the complexities of our business solution thoughtfully, kept implementation standards high, and designed the architecture with care. We highly recommend Nuhvin as a trusted partner for developing and delivering complex business solutions.",
    year: "2025",
    rating: 5,
  },
  {
    // client: "TechNova",
    headline: "Chaala bagundhi",
    description:
      "TPartnering with Nuhvin stands out for their adaptable and client-focused approach throughout the project. They’ve been proactive throughout the project, taking the time to understand our needs and the reasoning behind them before diving into development. This approach has helped maintain clear direction and consistency, especially as the end client frequently generates new ideas and feature requests. Their adaptability and thoughtful planning have made the process smooth and productive.",
    year: "2025",
    rating: 4,
  },
];

export default function ClientsAchievements() {
  return (
    <section className="clients-achievements">
      <div className="clients-achievements-header">
        <h2 className="clients-achievements-title">
          <span className="arrow-icon">▶</span> Client Reviews
        </h2>
        <p className="clients-achievements-description">
          Genuine feedback and success stories shared by our happy clients.
        </p>
      </div>

      <div className="clients-achievements-grid">
        {achievements.map((item, idx) => (
          <div key={idx} className="clients-achievements-card">
            <div className="clients-achievements-stars">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>
            <div className="clients-achievements-content">
              <h3 className="clients-achievements-headline">{item.headline}</h3>
              <div className="clients-achievements-client">
                {item.client}
                <span className="clients-achievements-year">{item.year}</span>
              </div>
              <p className="clients-achievements-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
