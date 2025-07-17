
import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Primary gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 60%, rgba(220, 38, 38, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 90%, rgba(185, 28, 28, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 20, 0.95) 50%, rgba(0, 0, 0, 1) 100%)
          `,
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {/* Large floating circles */}
        <div 
          className="absolute w-96 h-96 rounded-full border border-red-500/20"
          style={{
            top: '10%',
            left: '10%',
            transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`,
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)'
          }}
        />
        
        <div 
          className="absolute w-64 h-64 rounded-full border border-red-400/30"
          style={{
            top: '60%',
            right: '15%',
            transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.1}deg)`,
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, transparent 70%)'
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500/40 rounded-full"
            style={{
              top: `${20 + (i * 4)}%`,
              left: `${10 + (i * 4)}%`,
              transform: `translateY(${scrollY * (0.1 + i * 0.01)}px)`,
              animationDelay: `${i * 0.2}s`,
              animation: 'float 6s ease-in-out infinite'
            }}
          />
        ))}

        {/* Mesh gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              conic-gradient(from 0deg at 50% 50%, 
                rgba(239, 68, 68, 0.1) 0deg, 
                transparent 90deg, 
                rgba(220, 38, 38, 0.05) 180deg, 
                transparent 270deg
              )
            `,
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`
          }}
        />

        {/* Scanlines effect */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(239, 68, 68, 0.1) 2px,
              rgba(239, 68, 68, 0.1) 4px
            )`,
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        />
      </div>

      {/* Dynamic light rays */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-red-500/50 via-red-400/20 to-transparent"
          style={{
            transform: `translateY(${scrollY * -0.2}px) skewX(-15deg)`,
            filter: 'blur(1px)'
          }}
        />
        <div 
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-red-400/40 via-red-300/15 to-transparent"
          style={{
            transform: `translateY(${scrollY * -0.3}px) skewX(10deg)`,
            filter: 'blur(1px)'
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
