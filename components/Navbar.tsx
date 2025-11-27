
import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Check if it's a section link
    if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  const navLinks = [
    { name: 'O 30', href: '#significado' },
    { name: 'Visão', href: '#essencia' },
    { name: 'Pilares', href: '#pilares' },
    { name: 'Líderes', href: '#lideranca' },
    { name: 'Estrutura', href: '#organizacao' },
    { name: 'Propostas', href: '#propostas' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#020420]/90 backdrop-blur-xl shadow-2xl border-b border-white/5' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            <div className="relative">
                {/* Logo Badge */}
                <div className="bg-gradient-to-br from-patriot-blue to-[#001540] p-2 rounded-lg shadow-xl border border-white/10 group-hover:border-patriot-yellow/50 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-patriot-yellow/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <div className="relative flex items-center justify-center w-10 h-10">
                        <span className="font-serif font-black text-3xl text-transparent bg-clip-text bg-gradient-to-b from-patriot-yellow via-yellow-400 to-yellow-600 drop-shadow-sm">30</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tight uppercase leading-none drop-shadow-lg">
                    Brasil <span className="font-light text-gray-300">do</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Futuro</span>
                </span>
                <span className="flex items-center gap-2 text-xs tracking-[0.3em] font-bold text-patriot-green uppercase mt-1">
                    <span className="w-2 h-0.5 bg-patriot-green"></span>
                    Partido 30
                    <span className="w-2 h-0.5 bg-patriot-green"></span>
                </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-bold text-gray-300 hover:text-white relative py-2 group transition-colors uppercase tracking-wide"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-patriot-yellow transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              ))}
              <a
                href="#junte-se"
                onClick={(e) => scrollToSection(e, '#junte-se')}
                className="ml-6 relative inline-flex group items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white rounded-full bg-gradient-to-br from-patriot-green to-[#007028] shadow-[0_0_20px_rgba(0,156,59,0.3)] hover:shadow-[0_0_30px_rgba(0,156,59,0.6)] transition-all duration-300 border border-white/10"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center gap-2">
                    Junte-se
                    <Star size={14} className="fill-current text-patriot-yellow" />
                </span>
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              <span className="sr-only">Abrir menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-patriot-dark/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6 pb-6">
            <div className="space-y-4">
                {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-200 hover:text-patriot-yellow block text-3xl font-bold tracking-tight py-2 border-b border-white/5"
                >
                    {link.name}
                </a>
                ))}
            </div>
             <a
                href="#junte-se"
                onClick={(e) => scrollToSection(e, '#junte-se')}
                className="mt-auto w-full bg-patriot-yellow text-patriot-blue font-black text-xl py-4 rounded-xl text-center shadow-lg hover:bg-white transition-colors"
              >
                FILIE-SE AO 30
              </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
