import React, { useState, useEffect } from 'react';
import { DEFAULT_SETTINGS } from '../../data/surveyPlatforms';

const AnimatedCounter = ({ value, duration = DEFAULT_SETTINGS.ANIMATION_DURATION }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [value, duration]);

  return <span>{count}</span>;
};

export default AnimatedCounter;