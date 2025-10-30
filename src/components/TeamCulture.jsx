import React from "react";
import "./TeamCulture.css";
import {
  FaReact,
  FaNodeJs,
  FaCloud,
  FaDocker,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJsSquare,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiKubernetes,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { RiLayoutGridLine } from "react-icons/ri";

export default function TeamCulture() {
  return (
    <section className="team-culture">
      <div className="team-culture-container">
        {/* LEFT SIDE — Two Boxes */}
        <div className="team-culture-left">
          {/* Team Structure & Expertise Table */}
          <div className="team-culture-left-card company-snapshot-style expertise-table">
            <h2 className="company-snapshot-heading">
              Who Powers Nuhvin
            </h2>
            <div className="company-snapshot-table">
              <div className="row">
                <div className="label">Project Management</div>
                <div className="value">1</div>
              </div>
              <div className="row">
                <div className="label">UI/UX Design</div>
                <div className="value">2</div>
              </div>
              <div className="row">
                <div className="label">Software Development</div>
                <div className="value">6</div>
              </div>
              <div className="row">
                <div className="label">Web Development</div>
                <div className="value">6</div>
              </div>
              <div className="row">
                <div className="label">Mobile App Development</div>
                <div className="value">8</div>
              </div>
              <div className="row">
                <div className="label">AI & Machine Learning</div>
                <div className="value">2</div>
              </div>
              <div className="row">
                <div className="label">Cloud & DevOps</div>
                <div className="value">2</div>
              </div>
              <div className="row">
                <div className="label">Database Management</div>
                <div className="value">2</div>
              </div>
              <div className="row">
                <div className="label">Quality Assurance (QA) & Testing</div>
                <div className="value">2</div>
              </div>
              <div className="row">
                <div className="label">Digital Marketing</div>
                <div className="value">4</div>
              </div>
              <div className="row">
                <div className="label">Project Support & Maintenance</div>
                <div className="value">2</div>
              </div>
              <div className="row">
                <div className="label">HR, Operations & Administration</div>
                <div className="value">2</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Culture and Icons */}
        <div className="team-culture-right">
          <div className="team-culture-text">
            <h3>
              <span className="arrow-icon">▶</span> Nuhvin Team Culture
            </h3>
            <p>
              We’re a team of 12 — developers, designers, PMs — all obsessed
              with one thing: turning your idea into a product people love.
              <br />
            </p>

            <p>
              We learn, adapt, and celebrate together — because growth here
              isn’t just about code or design, it’s about people. From idea to
              launch, we move as one team with one mission: to craft digital
              experiences that make our clients proud and users excited. When
              you partner with Nuhvin, you don’t just get a service — you gain a
              team that runs alongside you, every step of the way.
            </p>
          </div>

          <div className="team-culture-text">
            <h3>
              <span className="arrow-icon">▶</span> Technologies We Use
            </h3>
          </div>

          <div className="tech-icons">
            <div className="tech-item">
              <FaHtml5 className="tech-icon" />
              <span>HTML5</span>
            </div>
            <div className="tech-item">
              <FaCss3Alt className="tech-icon" />
              <span>CSS3</span>
            </div>
            <div className="tech-item">
              <FaJsSquare className="tech-icon" />
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <FaReact className="tech-icon" />
              <span>React</span>
            </div>
            <div className="tech-item">
              <SiNextdotjs className="tech-icon" />
              <span>Next.js</span>
            </div>
            <div className="tech-item">
              <SiTailwindcss className="tech-icon" />
              <span>Tailwind CSS</span>
            </div>
            <div className="tech-item">
              <FaNodeJs className="tech-icon" />
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <FaPython className="tech-icon" />
              <span>Python</span>
            </div>
            <div className="tech-item">
              <SiMongodb className="tech-icon" />
              <span>MongoDB</span>
            </div>
            <div className="tech-item">
              <FaDatabase className="tech-icon" />
              <span>SQL</span>
            </div>
            <div className="tech-item">
              <FaCloud className="tech-icon" />
              <span>Cloud</span>
            </div>
            <div className="tech-item">
              <FaDocker className="tech-icon" />
              <span>Docker</span>
            </div>
            <div className="tech-item">
              <SiKubernetes className="tech-icon" />
              <span>Kubernetes</span>
            </div>
            <div className="tech-item">
              <FaGitAlt className="tech-icon" />
              <span>Git</span>
            </div>
            <div className="tech-item">
              <FaMobileAlt className="tech-icon" />
              <span>Mobile App</span>
            </div>
            <div className="tech-item">
              <RiLayoutGridLine className="tech-icon" />
              <span>UI/UX</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔸 Orange Bottom Banner (correct position) */}
      <div className="service-bottom-banner">
        <div className="banner-arrow">→</div>
        <p className="banner-text">
          We don’t just follow technology trends. We set them.{" "}
          <a href="https://www.nuhvin.com/" className="banner-link">
            Nuhvin
          </a>
        </p>
      </div>
    </section>
  );
}
