import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "AI & Machine Learning",
      description:
        "We develop predictive models, chatbots, medical image analysis, recommendation engines, and anomaly detection systems to help businesses make intelligent, data-driven decisions.",
    },
    {
      title: "Software Development",
      description:
        "We build custom enterprise software, ERP systems, healthcare management systems, automation tools, and SaaS platforms that streamline operations and boost productivity.",
    },
    {
      title: "Web Development",
      description:
        "Our team designs and develops corporate websites, e-commerce platforms, dashboards, and CMS-based portals — optimized for performance, security, and scalability.",
    },
    {
      title: "Mobile App Development",
      description:
        "We create Android and iOS apps, including on-demand services, e-commerce, healthcare, education, and travel apps with user-first design and seamless functionality.",
    },
    {
      title: "DevOps & Cloud Technologies",
      description:
        "Our projects include cloud migration, infrastructure automation, CI/CD pipelines, healthcare data hosting solutions, and server optimization, ensuring scalability and faster deployments.",
    },
    {
      title: "Quality Assurance (QA) & Software Testing",
      description:
        "We perform functional, performance, automation, healthcare, and security testing for flawless software performance and user satisfaction.",
    },
    {
      title: "Production & Application Support",
      description:
        "We provide system monitoring, issue resolution, version upgrades, and performance optimization for uninterrupted business continuity.",
    },
    {
      title: "Digital Marketing",
      description:
        "We execute SEO, SEM, social media campaigns, content marketing, and branding projects that enhance online visibility and customer engagement.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <h2 className="header-title">
            <span className="arrow-icon">▶</span> What We Do Best

          </h2>
          <p className="section-description">
            We empowers businesses with intelligent, scalable digital solutions that simplify operations, enhance user experiences, and drive measurable growth across from healthcare to e-commerce, and logistics.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
