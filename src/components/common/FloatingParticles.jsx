import React from 'react';
import { DEFAULT_SETTINGS } from '../../data/surveyPlatforms';
import { getTheme } from '../../config/theme';

const FloatingParticles = ({ isDarkMode }) => {
  const theme = getTheme(isDarkMode);
  
  const particles = Array.from({ length: DEFAULT_SETTINGS.PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute opacity-20 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        >
          <div className={`w-full h-full bg-gradient-to-r ${theme.particleColor} rounded-full blur-sm`}></div>
        </div>
      ))}
    </div>
  );
};

export default FloatingParticles;