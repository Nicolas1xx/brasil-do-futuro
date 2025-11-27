import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Meaning from './components/Meaning';
import Leadership from './components/Leadership';
import Ideology from './components/Ideology';
import Principles from './components/Principles';
import Proposals from './components/Proposals';
import Structure from './components/Structure';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-patriot-dark text-slate-100">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Meaning />
        <Ideology />
        <Principles />
        <Leadership />
        <Structure />
        <Proposals />
      </main>
      <Footer />

      {/* Floating Action Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-patriot-yellow text-patriot-blue p-4 rounded-full shadow-2xl transition-all duration-300 z-50 hover:bg-white hover:scale-110 border-2 border-patriot-blue ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={24} strokeWidth={3} />
      </button>
    </div>
  );
};

export default App;