import React from 'react';

export const LogoCloud = () => {
  const logos = ['AIRBNB', 'FIGMA', 'NOTION', 'VERCEL', 'LINEAR', 'STRIPE'];
  return (
    <section className="py-24 border-y border-gray-100 dark:border-white/5 mt-24 transition-colors duration-300 relative overflow-hidden">

      
      {/* Subtle orange glow in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-full bg-[#f48120]/5 blur-[120px] pointer-events-none" />

      <p className="text-center text-[10px] uppercase tracking-[0.4em] text-gray-500 dark:text-white/40 font-bold mb-12 relative z-10">
        Trusted by creative teams at
      </p>
      
      {/* Logos changed to brand orange [#f48120] */}
      <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-700 text-[#f48120] relative z-10">
        {logos.map(logo => (
          <span 
            key={logo} 
            className="text-xl font-black tracking-tighter cursor-default hover:scale-110 transition-transform"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
};
