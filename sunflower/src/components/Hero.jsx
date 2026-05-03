import React from 'react';
import { Play } from 'lucide-react';

export const Hero = () => (
  <section className="max-w-7xl mx-auto px-8 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-colors duration-300">
    <div className="space-y-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-500 dark:text-gray-400">
        <span className="bg-white/20 dark:bg-white/10 px-2 py-0.5 rounded-full text-black dark:text-white">New</span>
        AI-curated boards for every mood
      </div>
      
      <h1 className="text-7xl md:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-black dark:text-white">
        Discover ideas <br /> <span className="text-[#f48120]">you'll actually love.</span>
      </h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed font-light">
        SunFlower is a beautifully organized place to collect recipes, home inspiration, and fashion finds.
      </p>

      <div className="flex items-center gap-4">
        <button className="text-sm font-semibold flex items-center gap-2 text-black dark:text-white hover:translate-x-1 transition-transform">
          Start exploring <span className="text-lg">→</span>
        </button>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-sm font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
          <Play size={16} fill="currentColor" /> Watch demo
        </button>
      </div>
    </div>

    {/* NEW IMAGE REPLACEMENT */}
    <div className="relative group w-full aspect-square lg:aspect-auto lg:h-150 rounded-4xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl">
      <img 
        src="/download.jpg" 
        alt="Inspiration Board" 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      {/* Subtle overlay to soften the image for dark mode */}
      <div className="absolute inset-0 bg-black/5 dark:bg-black/20" />
    </div>
  </section>
);
