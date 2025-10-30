import React, { useEffect, useRef, useState } from "react";
import "./DevelopmentApproach.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

export default function DevelopmentApproach() {
  const steps = [
    "Discovery & Planning",
    "UI/UX Design",
    "Development",
    "Testing",
    "Deployment",
    "Support & Iteration",
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Observe when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate the line step-by-step when in view
  useEffect(() => {
    if (inView && currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1000); // speed between step transitions
      return () => clearTimeout(timer);
    }
  }, [inView, currentStep, steps.length]);

  return (
    <section className="development-approach" ref={sectionRef}>
      <h2 className="section-title"><span className="dev-arrow-icon">▶</span> How We Build Success</h2>
      <div className="approach-container">
        {/* Left side - steps & line */}
        <div className="flowchart">
          {steps.map((step, index) => (
            <div key={index} className="flow-step">
              <p>{step}</p>
              {index < steps.length - 1 && (
                <div
                  className={`animated-line ${
                    currentStep > index ? "active" : ""
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Right side - tech icons */}
        <div className="tech-icons">
          <div className="tech-item">
            <FaHtml5 className="icon" />
            <span>HTML</span>
          </div>
          <div className="tech-item">
            <FaCss3Alt className="icon" />
            <span>CSS</span>
          </div>
          <div className="tech-item">
            <FaJs className="icon" />
            <span>JavaScript</span>
          </div>
          <div className="tech-item">
            <FaReact className="icon" />
            <span>React</span>
          </div>
          <div className="tech-item">
            <FaNodeJs className="icon" />
            <span>Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}