import React, { useState, useEffect } from 'react';
import { Users, TrendingUp } from 'lucide-react';
import { getTheme } from '../../config/theme';

const LiveUserCounter = ({ isDarkMode }) => {
  const theme = getTheme(isDarkMode);
  const [liveUsers, setLiveUsers] = useState(1247); // Starting number
  const [isIncreasing, setIsIncreasing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIncrease = Math.floor(Math.random() * 3) + 1; // Random 1-3
      const shouldIncrease = Math.random() > 0.3; // 70% chance to increase
      
      if (shouldIncrease) {
        setIsIncreasing(true);
        setLiveUsers(prev => prev + randomIncrease);
        
        // Reset the increasing animation after a short delay
        setTimeout(() => setIsIncreasing(false), 500);
      }
    }, Math.random() * 5000 + 3000); // Random interval between 3-8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex items-center space-x-4 ${theme.cardBg} backdrop-blur-lg rounded-full px-6 py-3 border shadow-lg`}>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <Users className={`text-green-500 ${isIncreasing ? 'animate-bounce' : 'animate-pulse'}`} size={20} />
          {isIncreasing && (
            <div className="absolute -top-1 -right-1">
              <TrendingUp className="text-green-400 animate-ping" size={12} />
            </div>
          )}
        </div>
        <span className={theme.textSecondary}>المستخدمين النشطين:</span>
        <div className="flex items-center space-x-1">
          <span className={`text-2xl font-bold ${isIncreasing ? 'text-green-500 animate-pulse' : 'text-green-500'} transition-all duration-300`}>
            {liveUsers.toLocaleString('ar-EG')}
          </span>
          <div className="relative">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
          </div>
        </div>
      </div>
      
      {/* Live indicator */}
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className={`text-xs font-medium ${theme.textMuted} animate-pulse`}>مباشر</span>
      </div>
    </div>
  );
};

export default LiveUserCounter;