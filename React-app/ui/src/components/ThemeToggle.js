import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ThemeToggle.css';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  
  // Hide toggle on dashboard pages
  const shouldShowToggle = !location.pathname.includes('-home');

  // Apply dark mode to the body when the component mounts or darkMode changes
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Don't render the toggle on dashboard pages
  if (!shouldShowToggle) return null;

  return (
    <div className="global-theme-toggle">
      <label className="switch">
        <input 
          type="checkbox" 
          checked={darkMode}
          onChange={toggleTheme}
        />
        <span className="slider round">
          <div className="slider-icons">
            <span className="sun-icon">☀️</span>
            <span className="moon-icon">🌙</span>
          </div>
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle; 