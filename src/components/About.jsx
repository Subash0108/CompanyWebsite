import React from "react";
import "./About.css";

export default function About() {
    const companyInfo = {
        name: "Nuhvin Global Services Private Limited",
        incorporation: "March 11, 2024",
        cin: "U62013TS2024PTC183165",
        status: "Active",
        headquarters: "Hyderabad, Telangana, India",
        address:
            "4th Floor, Sankepally's Empire, Puppalguda-Narsing main Road, Puppalguda, Manikonda, Hyderabad, Telangana - 500089",
        website: "www.nuhvin.com",
        leadership: [
            "Balaji Pavan Sai Raju Viswanadhuni (Managing Director)",
            "Durga Prasad Viswanadhuni (Director)",
        ],
    };

    return (
        <section id="about" className="about">
            {/* === ABOUT ME HEADING === */}
            <div className="about-me-top">
                <h2 className="about-heading-with-arrow">
                    <span className="arrow-icon">▶</span> Who We Are

                </h2>
            </div>

            {/* === Company Intro === */}
            <div className="company-intro-text">
                <p>
                    <a
                        href="https://www.nuhvin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-link"
                    >
                        <strong>Nuhvin Global Services Pvt Ltd</strong>
                    </a> is a next-generation IT
                    Services and Software Development Company headquartered in Hyderabad —
                    India's tech capital. Founded in 2024, we specialize in AI, Software
                    Solutions, Web & App Development, Cloud Technologies, QA & Testing, and
                    Production Support. Nuhvin is driven by innovation, precision, and a
                    strong commitment to delivering intelligent digital solutions that
                    empower businesses to evolve in the era of technology transformation.
                </p>
            </div>

            {/* === Main Layout === */}
            <div className="about-container">
                {/* LEFT SIDE */}
                <div className="company-snapshot-left">
                    <h2 className="snapshot-title">Global Footprint</h2>

                    <div className="snapshot-table">
                        <div className="snapshot-row">
                            <div className="snapshot-label">Company Name</div>
                            <div className="snapshot-value">{companyInfo.name}</div>
                        </div>
                        <div className="snapshot-row">
                            <div className="snapshot-label">Incorporation</div>
                            <div className="snapshot-value">{companyInfo.incorporation}</div>
                        </div>
                        <div className="snapshot-row">
                            <div className="snapshot-label">CIN</div>
                            <div className="snapshot-value">{companyInfo.cin}</div>
                        </div>
                        <div className="snapshot-row">
                            <div className="snapshot-label">Status</div>
                            <div className="snapshot-value status-active">
                                {companyInfo.status}
                            </div>
                        </div>
                        <div className="snapshot-row">
                            <div className="snapshot-label">Headquarters</div>
                            <div className="snapshot-value">
                                {companyInfo.headquarters}
                            </div>
                        </div>
                        <div className="snapshot-row">
                            <div className="snapshot-label">Current Address</div>
                            <div className="snapshot-value">{companyInfo.address}</div>
                        </div>
                        <div className="snapshot-row">
                            <div className="snapshot-label">Website</div>
                            <a
                                href={`https://${companyInfo.website}`}
                                className="snapshot-value website-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {companyInfo.website}
                            </a>
                        </div>
                        <div className="snapshot-row">
                            <div className="snapshot-label">Leadership</div>
                            <div className="snapshot-value">
                                {companyInfo.leadership.map((leader, index) => (
                                    <div key={index} className="leader-item">
                                        {leader}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="about-content">
                    <div className="about-me-plain">
                        <h2 className="about-heading-with-arrow">
                            <span className="arrow-icon">▶</span> Our Guiding Principles
                        </h2>
                        <p>
                            We combine technology and insight to help businesses grow, simplify operations, and deliver seamless experiences, making Nuhvin a trusted partner in their digital transformation journey.
                        </p>
                    </div>

                    {/* === VISION & MISSION SECTION === */}
                    <div className="vision-mission-container single-column">
                        <div className="info-box vision-box">
                            <h3 className="heading-with-arrow">
                                <span className="arrow-icon">▶</span> Our Vision
                            </h3>
                            <p>
                                To be the most trusted and best technology partner, aspiring to
                                earn the Global Excellence Award by 2030.
                            </p>
                        </div>

                        <div className="info-box mission-box">
                            <h3 className="heading-with-arrow">
                                <span className="arrow-icon">▶</span> Our Mission
                            </h3>
                            <p>
                                To empower businesses with intelligent, scalable, and reliable
                                digital solutions that drive innovation, efficiency, and valuable
                                growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
