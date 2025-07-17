import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Code, Brain } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Crafting intelligent, scalable, and beautiful digital experiences';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="absolute top-20 left-20 w-32 h-32 rounded-full professional-border animate-professional-glow"
        />
        
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -20, 0],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-40 right-32 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-lg opacity-20"
        />

        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-accent rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-muted-foreground">
            <Sparkles size={16} className="text-primary" />
            Hello, I'm Yasaswi Kompella
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
        >
          <span className="text-gradient">Software Developer</span>
          <br />
          <span className="text-foreground">Cloud Enthusiast | Problem Solver</span>
        </motion.h1>

        {/* Animated Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto h-16 flex items-center justify-center"
        >
          <span className="font-mono">
            Building intelligent, scalable, and stunning digital experiences.
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-primary"
            >
              |
            </motion.span>
          </span>
        </motion.div>

        {/* Specialty Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { icon: Code, text: 'Clean Code', color: 'text-primary' },
            { icon: Brain, text: 'AI Solutions', color: 'text-accent' },
            { icon: Sparkles, text: 'User Experience', color: 'text-primary' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="interactive-card glass px-6 py-4 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <Icon size={24} className={item.color} />
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://yasaswi-kompella.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-element px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg professional-glow transition-all duration-300 hover:shadow-2xl"
          >
            View Resume
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="magnetic-element px-8 py-4 glass rounded-xl font-semibold text-lg text-foreground hover:text-primary transition-all duration-300 professional-border"
          >
            See Projects
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="magnetic-element flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-mono">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;