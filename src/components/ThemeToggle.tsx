import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 bottom-5 right-5 p-2 rounded-full shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={24} className="text-white" />
      ) : (
        <Moon size={24} className="text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;