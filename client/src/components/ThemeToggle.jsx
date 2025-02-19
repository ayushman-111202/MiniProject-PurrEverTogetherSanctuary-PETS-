"use client"
import { IconMoon, IconSun } from '@tabler/icons-react';
import { React, useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check if the theme preference is saved in localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle theme and save the preference in localStorage
  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
      } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none"
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        <IconMoon />
      ) : (
        <IconSun />
      )}
    </button>
  );
};

export default ThemeToggle;
