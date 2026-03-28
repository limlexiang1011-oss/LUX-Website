import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenRegistration: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegistration }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update order to match Page Layout: Curriculum -> Instructor -> Testimonials
  const navLinks = [
    { name: '3大秘诀', href: '#secrets' },
    { name: '讲师介绍', href: '#instructor' },
    { name: '学员见证', href: '#testimonials' },
  ];

  // Handler for smooth scrolling to sections
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Prevent default anchor jump which might cause errors
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu if open
    }
  };

  const handleMobileNavClick = (href?: string) => {
    setMobileMenuOpen(false);
    if (href === '#registration') {
        onOpenRegistration();
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="https://i.ibb.co/B2pSR5bf/Lux-AI-Marketing-Logo.png" alt="Lux AI Marketing" className="h-8 w-auto" referrerPolicy="no-referrer" />
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
            Lux AI Marketing
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button 
            onClick={onOpenRegistration}
            className="px-6 py-2 bg-white text-black text-sm font-bold tracking-wide hover:bg-lux-accent transition-colors duration-300 rounded-sm"
          >
            预约席位
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-lux-dark border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 fade-in h-screen">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-medium text-gray-300 hover:text-lux-accent cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => handleMobileNavClick('#registration')}
            className="w-full py-3 bg-lux-accent text-black font-bold text-center mt-4"
          >
            预约席位
          </button>
        </div>
      )}
    </nav>
  );
};