import React from 'react';
import { Utensils, Home, Shirt, Plane, Sparkles, Bookmark } from 'lucide-react';

const FEATURE_DATA = [
  { t: "Recipe boards", i: <Utensils /> },
  { t: "Home inspiration", i: <Home /> },
  { t: "Style finds", i: <Shirt /> },
  { t: "Travel dreams", i: <Plane /> },
  { t: "AI curation", i: <Sparkles /> },
  { t: "One-click save", i: <Bookmark /> }
];

export const Features = () => (
  <section id="features" className="py-32 max-w-7xl mx-auto px-8 transition-colors duration-300">
    <div className="text-center mb-20">
      <div className="text-[10px] uppercase tracking-[0.4em] text-[#f48120] font-bold mb-6">
        Features
      </div>
      {/* Changed to text-black dark:text-white */}
      <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white">
        Everything you need to <br/> capture inspiration
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {FEATURE_DATA.map((f, i) => (
        <div 
          key={i} 
          className="p-10 rounded-[2.5rem] transition-all group border
            bg-gray-50 dark:bg-[#0c0c0c] 
            border-gray-200 dark:border-white/5 
            hover:bg-gray-100 dark:hover:bg-[#111]"
        >
          <div className="w-11 h-11 bg-[#f48120] rounded-xl flex items-center justify-center mb-9 text-white group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
            {f.i}
          </div>
          
          {/* Title changes color based on theme */}
          <h3 className="text-[22px] font-bold mb-4 text-black dark:text-white">
            {f.t}
          </h3>
          
          {/* Description changes color based on theme */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">
            Smart tools to help you collect and organize your best ideas in one visual feed.
          </p>
        </div>
      ))}
    </div>
  </section>
);
