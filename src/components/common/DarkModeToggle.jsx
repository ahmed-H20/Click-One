import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { getTheme } from '../../config/theme';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  const theme = getTheme(isDarkMode);
  
  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed top-6 left-6 z-50 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${theme.iconToggle}`}
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default DarkModeToggle;