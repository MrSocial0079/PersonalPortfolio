
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-12 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left Side - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Yasaswi</h3>
            <p className="text-slate-400">AI-driven builder. Impact-focused coder.</p>
          </div>
          
          {/* Center - Social Links */}
          <div className="flex space-x-6">
            <a
              href="mailto:saipanja0202@gmail.com"
              className="bg-slate-700 hover:bg-sky-400 text-slate-300 hover:text-slate-900 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/yasaswi-kompella"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-sky-400 text-slate-300 hover:text-slate-900 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yasaswi-kompella"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-sky-400 text-slate-300 hover:text-slate-900 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          {/* Right Side - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
                by Yasaswi Kompella
            </p>
            <p className="text-slate-500 text-xs mt-1">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-sky-400 hover:bg-sky-500 text-slate-900 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
