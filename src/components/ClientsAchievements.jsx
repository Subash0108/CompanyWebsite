import React from "react";
import "./ClientsAchievements.css";

const achievements = [
  {
    logo: "https://via.placeholder.com/90",
    client: "MegaShop",
    headline: "Record-Breaking Launch",
    // badge removed
    description: "MegaShop's new app launch saw 150K downloads in the first week, exceeding all client expectations.",
    year: "2025"
  },
  {
    logo: "https://via.placeholder.com/90",
    client: "FreshEats",
    headline: "Top Food Platform",
    // badge removed
    description: "FreshEats was rated #1 by FoodTech India for customer experience and order reliability.",
    year: "2024"
  },
  {
    logo: "https://via.placeholder.com/90",
    client: "EduSmart",
    headline: "EdTech Innovator",
    // badge removed
    description: "EduSmart's AI-powered learning platform transformed digital education for 500,000+ users.",
    year: "2025"
  }
];

export default function ClientsAchievements() {
  return (
    <section className="clients-achievements">
      <div className="clients-achievements-header">
        <h2 className="clients-achievements-title">
          <span className="arrow-icon">▶</span> Clients Achievements
        </h2>
        <p className="clients-achievements-description">
          Success stories and milestones delivered with our client collaborations.
        </p>
      </div>
      <div className="clients-achievements-grid">
        {achievements.map((item, idx) => (
          <div key={idx} className="clients-achievements-card">
            <div className="clients-achievements-logo">
              <img src={item.logo} alt={`${item.client} logo`} />
              {/* Removed badge span here */}
            </div>
            <div className="clients-achievements-content">
              <h3 className="clients-achievements-headline">{item.headline}</h3>
              <div className="clients-achievements-client">
                {item.client} <span className="clients-achievements-year">{item.year}</span>
              </div>
              <p className="clients-achievements-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
