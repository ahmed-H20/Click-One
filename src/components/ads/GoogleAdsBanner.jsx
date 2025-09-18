import React, { useEffect } from 'react';
import { Info, X } from 'lucide-react';
import { getTheme } from '../../config/theme';
import Banner from './AdsBanner';

const GoogleAdsBanner = ({ isDarkMode, position = 'bottom' }) => {
  const theme = getTheme(isDarkMode);
  
  useEffect(() => {
    // Initialize Google AdSense when component mounts
    try {
      if (window.adsbygoogle && window.adsbygoogle.push) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div dir='rtl' className={`${position === 'bottom' ? 'mt-16' : 'mb-16'} w-full`}>
      <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-2xl overflow-hidden border border-opacity-50 shadow-lg`}>
        
        {/* Ad Label */}
        <div className={`flex items-center justify-between px-4 py-2 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} bg-opacity-50`}>
          <div className="flex items-center space-x-2">
            <Info className={`w-4 h-4 ${theme.textMuted}`} />
            <span className={`text-xs font-medium ${theme.textMuted} uppercase tracking-wider`}>
              إعلان
            </span>
          </div>
          <div className="text-xs text-gray-400">
            Google Ads
          </div>
        </div>

        {/* Ad Container */}
        <div className="p-4">
          {/* Google AdSense Auto Ad */}
          <Banner />
          
          {/* Fallback content when ads are not loaded */}
          <div className={`min-h-[120px] flex items-center justify-center bg-gradient-to-r ${isDarkMode ? 'from-gray-700 to-gray-800' : "bg-white" } rounded-lg`}>
            <div className="text-center">
              <div className="text-4xl mb-2">📢</div>
              <p className={`${theme.textMuted} text-sm`}>
                مساحة إعلانية
              </p>
              <p className={`${theme.textMuted} text-xs mt-1 opacity-70`}>
                Advertisement Space
              </p>
            </div>
          </div>
        </div>

        {/* Ad Footer */}
        <div className={`px-4 py-2 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} bg-opacity-30 border-t border-opacity-20`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <span>الإعلانات تدعم تطوير التطبيق</span>
            </div>
            <div className="text-xs text-gray-400">
              <a 
                href="https://support.google.com/adsense/answer/9012903" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                لماذا هذا الإعلان؟
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Responsive Banner Component for different sizes
export const ResponsiveAdBanner = ({ isDarkMode, size = 'large' }) => {
  const theme = getTheme(isDarkMode);
  
  const sizeConfig = {
    small: {
      height: 'min-h-[100px]',
      adFormat: 'rectangle',
      responsive: false
    },
    medium: {
      height: 'min-h-[120px]',
      adFormat: 'horizontal',
      responsive: true
    },
    large: {
      height: 'min-h-[160px]',
      adFormat: 'auto',
      responsive: true
    }
  };

  const config = sizeConfig[size];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-xl overflow-hidden border border-opacity-30 shadow-md`}>
        {/* Header */}
        <div className={`px-3 py-1 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} bg-opacity-60 border-b border-opacity-20`}>
          <div className="flex items-center justify-between">
            <span className={`text-xs ${theme.textMuted} font-medium`}>إعلان مدعوم</span>
            <div className="flex items-center space-x-1 text-xs text-gray-400">
              <span>Google</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>Ads</span>
            </div>
          </div>
        </div>

        {/* Ad Content */}
        <div className="p-3">
          <ins
            className="adsbygoogle block"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-7193351910677878"
            data-ad-slot="1810578910"
            data-ad-format={config.adFormat}
            data-full-width-responsive={config.responsive.toString()}
          ></ins>
          <Banner />
          
          {/* Fallback */}
          <div className={`${config.height} flex items-center justify-center bg-white bg-gradient-to-br ${isDarkMode ? 'from-gray-700 to-gray-800' : "bg-white" } rounded-lg`}>
            <div className="text-center">
              <div className="text-2xl mb-1">🎯</div>
              <p className={`${theme.textMuted} text-xs`}>مساحة إعلانية</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sticky Bottom Ad Banner
export const StickyAdBanner = ({ isDarkMode, isVisible = true }) => {
  const theme = getTheme(isDarkMode);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4">
      <div className={`${theme.cardBg} backdrop-blur-lg rounded-t-2xl border border-b-0 border-opacity-50 shadow-2xl`}>
        {/* Close button */}
        <div className="flex justify-between items-center px-3 py-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className={`text-xs ${theme.textMuted}`}>إعلان</span>
          </div>
          <button className={`p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors ${theme.textMuted} hover:text-red-500`}>
            <X size={14} />
          </button>
        </div>

        {/* Ad container */}
        <div className="px-3 pb-3">
          <ins
            className="adsbygoogle block"
            style={{ display: 'block', minHeight: '80px' }}
            data-ad-client="ca-pub-7193351910677878"
            data-ad-slot="1810578910"
            data-ad-format="horizontal"
            data-full-width-responsive="true"
          ></ins>
          <Banner />
          {/* Fallback */}
          <div className={`min-h-[80px] flex items-center justify-center bg-gradient-to-r ${
            isDarkMode 
                ? "bg-gradient-to-r from-gray-700 to-gray-800" 
                : "bg-white"
            } rounded-lg`}>
            <div className="text-center">
              <div className="text-xl mb-1">📱</div>
              <p className={`${theme.textMuted} text-xs`}>إعلان تفاعلي</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsBanner;