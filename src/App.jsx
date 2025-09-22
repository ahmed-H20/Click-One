/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Navbar from "./components/common/Navbar";
import "./styles/globals.css";
import AppRoutes from "./Routes/Routes";

const App = () => {
  const [participants, setParticipants] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [videos, setVideos] = useState([]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Load saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const commonProps = { isDarkMode, participants, isVisible, setParticipants };

 
  return (
      <div className={`font-sans min-h-screen ${isDarkMode ? "dark" : ""}`}>
        <Navbar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <main className="pt-16 md:pt-20">
          <AppRoutes {...commonProps} />
        </main>
      </div>      
  );
};

export default App;
