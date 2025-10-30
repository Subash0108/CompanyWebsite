import { useState, useEffect } from "react";
import "./App.css";

import HeroSection from "./components/Herosection";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Leadership from "./components/Leadership";
import TeamCulture from "./components/TeamCulture";
import WhyPartner from "./components/WhyPartner";
import ClientsAchievements from "./components/ClientsAchievements";
import DevelopmentApproach from "./components/DevelopmentApproach";
import Header from "./components/Header";
import ThanksCard from "./components/ThanksCard";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  // 🌗 Theme state management
  const [theme, setTheme] = useState("dark");

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  // Apply theme whenever it changes
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="App">
      {/* Header with theme toggle */}
      <Header theme={theme} setTheme={setTheme} />

      {/* Page sections */}
      <HeroSection />
      <About />
      <Services />
      <WhyPartner />
      <TeamCulture />
      <Leadership />
      <DevelopmentApproach />
      <Projects />
      <ClientsAchievements />
      <Contact />
      <ThanksCard />
      <Footer />
    </div>
  );
}

export default App;
