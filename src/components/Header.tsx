import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/uploads/337717bf-ae76-47ca-be1a-756fdfe7d4ad.png" 
              alt="Yasaswi Logo" 
              className="w-10 h-10 hover:scale-110 transition-all duration-300"
            />
            <div className="text-2xl font-bold text-slate-100 hover:text-sky-400 transition-all duration-300 cursor-pointer transform hover:scale-105">
              Yasaswi
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {['about', 'projects', 'resume', 'contact'].map((item) => (
              <li key={item}>
                <a
                  onClick={() => scrollToSection(item)}
                  className="nav-link text-slate-100 text-lg font-medium cursor-pointer relative hover:text-sky-400 transition-colors duration-300 capitalize"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-100 hover:text-sky-400 transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 space-y-2">
            {['about', 'projects', 'resume', 'contact'].map((item) => (
              <li key={item}>
                <a
                  onClick={() => scrollToSection(item)}
                  className="block py-2 text-slate-100 hover:text-sky-400 transition-colors duration-300 capitalize cursor-pointer"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
