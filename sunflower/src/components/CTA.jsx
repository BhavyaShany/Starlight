import React from 'react';

export const CTA = () => (
  <section id="pricing"className="max-w-7xl mx-auto px-8 py-32 transition-colors duration-300">
    {/* Background changes from light gray to deep black */}
    <div className="w-full bg-gray-50 dark:bg-[#080808] border border-gray-200 dark:border-white/5 rounded-[2.5rem] py-28 text-center shadow-sm dark:shadow-none">
      
      {/* Title swaps between black and white */}
      <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-black dark:text-white">
        Plant your first board <br/> in less than a minute.
      </h2>
      
      <div className="flex items-center justify-center gap-8 mb-8">
        {/* Primary Action link */}
        <button className="text-sm font-bold flex items-center gap-2 text-black dark:text-white hover:opacity-70 transition-all">
          Get started free <span className="text-lg">→</span>
        </button>
        
        {/* Secondary Button swaps border/bg colors */}
        <button className="px-6 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-sm font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
          View pricing
        </button>
      </div>
      
      {/* Muted subtext */}
      <p className="text-[11px] text-gray-500 dark:text-gray-600 uppercase tracking-widest font-medium">
        No credit card required · Free forever plan
      </p>
    </div>
  </section>
);
