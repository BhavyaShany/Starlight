import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => (
  // Added bg-white dark:bg-black/80 and transition-colors
  <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 transition-colors duration-300">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-[#f48120] rounded-lg flex items-center justify-center">
        <span className="text-black font-extrabold">S</span>
      </div>
      {/* Changed text-white to text-black dark:text-white */}
      <span className="text-3xl font-bold tracking-tight text-black dark:text-white">SunFlower</span>
    </div>
    
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500 dark:text-gray-400">
      {['Features', 'Dashboard', 'Explore', 'Pricing'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`} 
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          {item}
        </a>
      ))}
    </div>

    <div className="flex items-center gap-6">
      {/* Added the Toggle Component here */}
      <ThemeToggle />
      
      <button className="text-sm font-medium text-black dark:text-white hover:opacity-70 transition-opacity">
        Sign in
      </button>
      
      {/* Button colors swap: black in light mode, white in dark mode */}
      <button className="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-all">
        Get started
      </button>
    </div>
  </nav>
);
