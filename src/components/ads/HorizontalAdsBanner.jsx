import React, { useEffect } from 'react';
import { Info, ExternalLink } from 'lucide-react';
import { getTheme } from '../../config/theme';
import BannerAd from './BannerAdd';
import BannerAdBig from './Banner782Ad';

const HorizontalAdsBanner = ({ 
  isDarkMode, 
  speed = 'slow', // 'slow', 'medium', 'fast'
  position = 'top', // 'top', 'bottom', 'middle'
  showLabel = true 
}) => {
  const theme = getTheme(isDarkMode);
  
  // Speed configurations
  const speedConfig = {
    slow: '60s',
    medium: '40s',
    fast: '25s'
  };

  useEffect(() => {
    // Initialize Google AdSense when component mounts
    try {
      if (window.adsbygoogle && window.adsbygoogle.push) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense initialization error:', error);
    }
  }, []);

  const scrollingStyle = {
    animationDuration: speedConfig[speed],
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  };

  return (
    <div className={`w-full overflow-hidden ${position === 'bottom' ? 'mt-8' : position === 'top' ? 'mb-8' : 'my-8'}`}>
      {/* Banner Container */}
      <div className={`relative ${theme.cardBg} backdrop-blur-lg border border-opacity-30 shadow-lg`}>
        
        {/* Header with label */}
        {showLabel && (
          <div className={`flex items-center justify-between px-4 py-2 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} bg-opacity-40 border-b border-opacity-20`}>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <Info className={`w-4 h-4 ${theme.textMuted}`} />
              <span className={`text-xs font-medium ${theme.textMuted} uppercase tracking-wider`}>
                إعلان مدعوم
              </span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-400">
              <span>Google Ads</span>
              <ExternalLink size={12} />
            </div>
          </div>
        )}

        {/* Scrolling Content Container */}
        <div className="relative h-24 overflow-hidden">
          {/* Scrolling wrapper */}
          <div 
            className="absolute inset-0 flex items-center whitespace-nowrap animate-scroll-horizontal"
            style={scrollingStyle}
          >
            {/* Google AdSense Banner */}
            <div className="flex items-center px-8">
              <ins
                className="adsbygoogle"
                style={{ 
                  display: 'inline-block',
                  width: '728px',
                  height: '90px',
                  minWidth: '728px'
                }}
                data-ad-client="ca-pub-7193351910677878" // Replace with your AdSense publisher ID
                data-ad-slot="1810578910" // Replace with your ad slot ID
                data-ad-format="horizontal"
                data-full-width-responsive="false"
              ></ins>
            </div>

            <div className="flex items-center px-8">
              <BannerAd />              
            </div>

            <div className="flex items-center px-8">
              <BannerAdBig />
            </div>
            {/* Fallback Content - Multiple ads simulation */}
            <div className="flex items-center space-x-8 px-8">
              {[...Array(5)].map((_, index) => (
                  [<BannerAd in={index} key={index} />, <BannerAdBig in={index} key={`big-${index}`} />]
                  
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-8 px-8">
              {[...Array(5)].map((_, index) => (
                  [<BannerAd in={index} key={index} />, <BannerAdBig in={index} key={`big-${index}`} />]
              ))}
            </div>
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className={`absolute left-0 top-0 w-20 h-full bg-gradient-to-r ${
            isDarkMode 
              ? 'from-gray-900 to-transparent' 
              : 'from-white to-transparent'
          } pointer-events-none z-10`}></div>
          <div className={`absolute right-0 top-0 w-20 h-full bg-gradient-to-l ${
            isDarkMode 
              ? 'from-gray-900 to-transparent' 
              : 'from-white to-transparent'
          } pointer-events-none z-10`}></div>
        </div>

        {/* Footer */}
        <div className={`px-4 py-2 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} bg-opacity-30 border-t border-opacity-20`}>
          <div className="flex items-center justify-between text-xs">
            <span className={`${theme.textMuted}`}>
              الإعلانات تدعم تطوير المنصة
            </span>
            <a 
              href="https://support.google.com/adsense/answer/9012903" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${theme.textMuted} hover:text-blue-500 transition-colors duration-200 flex items-center space-x-1`}
            >
              <span>لماذا هذا الإعلان؟</span>
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll-horizontal {
          animation-name: scroll-horizontal;
        }
        
        /* Pause on hover */
        .animate-scroll-horizontal:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

// Compact version for mobile or smaller spaces
export const CompactHorizontalAdsBanner = ({ isDarkMode, speed = 'medium' }) => {
  const theme = getTheme(isDarkMode);
  
  const speedConfig = {
    slow: '50s',
    medium: '35s',
    fast: '20s'
  };

  useEffect(() => {
    try {
      if (window.adsbygoogle && window.adsbygoogle.push) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense initialization error:', error);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className={`${theme.cardBg} backdrop-blur-lg border border-opacity-20 rounded-lg shadow-md`}>
        {/* Compact scrolling container */}
        <div className="relative h-16 overflow-hidden">
          <div 
            className="absolute inset-0 flex items-center whitespace-nowrap animate-scroll-horizontal"
            style={{ 
              animationDuration: speedConfig[speed],
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite'
            }}
          >
            {/* AdSense Mobile Banner */}
            <div className="flex items-center px-4">
              <ins
                className="adsbygoogle"
                style={{ 
                  display: 'inline-block',
                  width: '320px',
                  height: '50px',
                  minWidth: '320px'
                }}
                data-ad-client="ca-pub-7193351910677878"
                data-ad-slot="1810578910"
                data-ad-format="banner"
                data-full-width-responsive="false"
              ></ins>
            </div>

            {/* Fallback compact ads */}
            <div className="flex items-center space-x-4 px-4">
              {[...Array(8)].map((_, index) => (
                <BannerAd key={index} in={index} />
                // <div 
                //   key={index}
                //   className={`flex-shrink-0 w-40 h-12 ${isDarkMode 
                //     ? 'bg-gray-800' 
                //     : 'bg-gray-100'
                //   } rounded border flex items-center justify-center`}
                // >
                //   <div className="text-center">
                //     <div className="text-sm mb-0.5">
                //       {['🎁', '💎', '⭐', '🔥', '💰', '🎯', '✨', '🚀'][index]}
                //     </div>
                //     <p className={`${theme.textMuted} text-xs`}>إعلان</p>
                //   </div>
                // </div>
              ))}
            </div>
          </div>

          {/* Fade gradients */}
          <div className={`absolute left-0 top-0 w-8 h-full bg-gradient-to-r ${
            isDarkMode ? 'from-gray-900 to-transparent' : 'from-white to-transparent'
          } pointer-events-none z-10`}></div>
          <div className={`absolute right-0 top-0 w-8 h-full bg-gradient-to-l ${
            isDarkMode ? 'from-gray-900 to-transparent' : 'from-white to-transparent'
          } pointer-events-none z-10`}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll-horizontal {
          animation-name: scroll-horizontal;
        }
        .animate-scroll-horizontal:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default HorizontalAdsBanner;