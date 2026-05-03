import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoCloud } from './components/LogoCloud';
import { Features } from './components/Features';
import { Analytics } from './components/Analytics';
import { Trending } from './components/Trending';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <Analytics />
      <Trending />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
