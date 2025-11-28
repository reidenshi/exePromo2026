import React, { useState } from 'react';
import { IconMenu, IconClose, IconZap } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Уровни', href: '#levels' },
    { name: 'Призы', href: '#prizes' },
    { name: 'Задания', href: '#tasks' },
    { name: 'Таймлайн', href: '#timeline' },
    { name: 'Календарь', href: '#calendar' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-950/80 backdrop-blur-md border-b border-brand-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold shadow-lg shadow-brand-500/20">
              <IconZap className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Amba<span className="text-brand-300">Hub</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-200 hover:text-white hover:bg-brand-800/50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-200 hover:text-white p-2"
            >
              {isMenuOpen ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-900 border-b border-brand-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-brand-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-800"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;