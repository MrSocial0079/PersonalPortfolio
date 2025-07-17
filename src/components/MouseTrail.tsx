import React, { useEffect, useState } from 'react';

const MouseTrail = () => {
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++
      };
      
      setTrails(prev => {
        const newTrails = [...prev, newTrail];
        // Retain only the last 8 trail points for efficiency
        return newTrails.slice(-8);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Periodically remove old trails to prevent clutter
    const interval = setInterval(() => {
      setTrails(prev => prev.slice(1));
    }, 100);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="mouse-trail"
          style={{
            left: trail.x - 3,
            top: trail.y - 3,
            opacity: (index + 1) / trails.length * 0.8,
            transform: `scale(${(index + 1) / trails.length})`,
            animationDelay: `${index * 0.1}s`
          }}
        />
      ))}
    </>
  );
};

export default MouseTrail;
