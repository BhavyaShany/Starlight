import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
      html.style.backgroundColor = '#000000';
    } else {
      html.classList.remove('dark');
      html.style.backgroundColor = '#ffffff';
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full border border-gray-800 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        <Sun size={18} className="text-orange-500" />
      ) : (
        <Moon size={18} className="text-gray-900" />
      )}
    </button>
  );
};
