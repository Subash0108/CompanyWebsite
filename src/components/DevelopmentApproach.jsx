import React, { useEffect, useRef, useState } from "react";
import "./DevelopmentApproach.css";
import { FaArrowDown } from "react-icons/fa";

export default function DevelopmentApproach() {
  const steps = [
    {
      title: "Discovery & Planning",
      description:
        "We begin by understanding your goals, challenges, and audience. Together, we shape a clear roadmap that aligns every step with your vision and business objectives.",
    },
    {
      title: "UI/UX Design",
      description:
        "Design meets purpose here. Our team creates intuitive, visually engaging interfaces that make every interaction simple, meaningful, and memorable.",
    },
    {
      title: "Development",
      description:
        "Turning ideas into reality. We build fast, secure, and scalable solutions using modern technologies—crafted for performance and growth.",
    },
    {
      title: "QA & Testing",
      description:
        "No compromise on quality. Every feature is tested rigorously to ensure reliability, smooth performance, and a flawless user experience.",
    },
    {
      title: "Deployment",
      description:
        "We handle the launch with precision—ensuring your product goes live seamlessly, with zero downtime and complete readiness.",
    },
    {
      title: "Support & Iteration",
      description:
        "Our partnership doesn’t stop at launch. We monitor, optimize, and evolve your product continuously—keeping it aligned with your business growth.",
    },
  ];

  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && progress < steps.length) {
      const timer = setTimeout(() => {
        setProgress((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, progress, steps.length]);

  return (
    <section className="development-approach" ref={sectionRef}>
      <h2 className="heading-title">
        <span className="arrow-icon">▶</span> Our Development Approach
      </h2>

      {/* ✅ Added sub-heading line below main title */}
      <p className="section-subtext">
        We believe great products are built through clarity, collaboration, and
        consistency.
      </p>

      <div className="approach-wrapper">
        {/* START ICON */}
        <div className="start-icon">
          <img src="/startbutton.png" alt="Start" className="icon-start" />
        </div>

        {/* TIMELINE */}
        <div className="timeline" data-progress={progress}>
          {steps.map((step, index) => (
            <div key={index} className="timeline-step">
              <div
                className={`left-box ${progress >= index ? "visible" : ""}`}
              >
                <h3>{step.title}</h3>
              </div>

              <div className="center-line">
                <div
                  className={`circle ${progress >= index ? "active" : ""}`}
                >
                  <FaArrowDown className="arrow" />
                </div>
              </div>

              <div
                className={`right-box ${progress >= index ? "visible" : ""}`}
              >
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* END ICON */}
        <div
          className={`end-icon ${progress >= steps.length ? "visible" : ""}`}
        >
          <img src="/completedtask.png" alt="Completed" className="icon-end" />
        </div>
      </div>
    </section>
  );
}
