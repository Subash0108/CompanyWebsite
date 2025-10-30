import React from "react";
import "./ThemeToggle.css";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
    </button>
  );
}
