import React from 'react';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Dashboard', 'Explore', 'Pricing', 'Changelog'],
    Company: ['About Us', 'Careers', 'Blog', 'Press Kit'],
    Resources: ['Help Center', 'Community', 'API Docs', 'Status'],
  };

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-white/5 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f48120] rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                <span className="text-black font-black text-xl">S</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-black dark:text-white ">
                SunFlower
              </span>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              The beautifully organized place to collect and grow the ideas that move you.
            </p>

            <div className="flex gap-4">
              {[FaTwitter, FaInstagram, FaGithub, FaLinkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-[#f48120] hover:border-[#f48120] transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#f48120] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <div className="pt-10 border-t border-gray-100 dark:border-white/5 flex justify-between items-center text-[12px] text-gray-400">
          <p>© 2026 SunFlower Inc.</p>
        </div>
      </div>
    </footer>
  );
};