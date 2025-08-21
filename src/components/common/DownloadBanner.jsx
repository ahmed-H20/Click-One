import React from 'react';
import { Download, ExternalLink, Star, Users, Trophy } from 'lucide-react';
import { getTheme } from '../../config/theme';

const DownloadBanner = ({ isDarkMode }) => {
  const theme = getTheme(isDarkMode);

  const handleDownload = (platform) => {
    const urls = {
      android: 'https://play.google.com/store/apps/details?id=com.abdsafyh.clickone.clickone&hl=en&gl=US',
      ios: 'https://apps.apple.com/us/app/click-one/id6747584660'
    };
    
    window.open(urls[platform], '_blank');
  };

  return (
    <div className="mb-16">
      <div className={`relative overflow-hidden ${theme.background === 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200' 
        ? 'bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600' 
        : 'bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900'} rounded-3xl`}>
        
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-10"></div>
          {/* Animated circles */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-screen opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-screen opacity-5 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="flex justify-center items-center mb-8">
                {/* Logo */}
                <div className="relative mr-6">
                  <div className="absolute -inset-4 bg-white rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative">
                    <img 
                      src="public/clickone.jpeg" 
                      alt="ClickOne Logo" 
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow-2xl object-cover border-4 border-white border-opacity-30"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow-2xl border-4 border-white border-opacity-30 bg-gradient-to-br from-white to-gray-200 flex items-center justify-center text-2xl md:text-3xl font-bold text-gray-800 hidden">
                      C1
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <div className="text-left">
                  <h2 className="text-5xl md:text-7xl font-black text-white mb-2">
                    ClickOne
                  </h2>
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-white font-bold ml-2">4.8</span>
                  </div>
                </div>
              </div>
              
              <p className="text-2xl md:text-3xl text-white font-bold mb-4 opacity-95">
                💎 حول آراءك إلى أرباح حقيقية 💎
              </p>
              <p className="text-lg md:text-xl text-white opacity-80 max-w-3xl mx-auto leading-relaxed">
                انضم إلى آلاف المستخدمين
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto">
              {[
                { icon: Users, number: '1K+', label: 'مستخدم نشط' },
                { icon: Trophy, number: '4.8', label: 'تقييم التطبيق' },
                { icon: Download, number: '1K+', label: 'تحميل' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-white mx-auto mb-2 opacity-90" />
                  <div className="text-2xl md:text-3xl font-black text-white">{stat.number}</div>
                  <div className="text-sm text-white opacity-75">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-8">
              {/* Android Button */}
              <button
                onClick={() => handleDownload('android')}
                className="group relative overflow-hidden bg-black bg-opacity-70 backdrop-blur-lg hover:bg-opacity-80 text-white font-bold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl border border-white border-opacity-20 w-full sm:w-auto"
              >
                <div className="relative flex items-center justify-center space-x-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="green">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4481-.9993-.9993s.4482-.9993.9993-.9993c.5512 0 .9993.4481.9993.9993s-.4481.9993-.9993.9993m-11.046 0c-.5511 0-.9993-.4481-.9993-.9993s.4482-.9993.9993-.9993c.5512 0 .9993.4481.9993.9993s-.4481.9993-.9993.9993m11.4045-6.02l1.9973-3.4606a.416.416 0 00-.1518-.5972.416.416 0 00-.5972.1518l-2.0223 3.5059C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1333 1.0085L4.8442 5.3534a.416.416 0 00-.5972-.1518.416.416 0 00-.1518.5972L6.0925 9.3214C2.8094 11.1373.9999 13.9579.9999 17.2157V18.0835C.9999 18.5918 1.408 19 1.9164 19H22.0835C22.5918 19 23 18.5918 23 18.0835V17.2157C23 13.9579 21.1905 11.1373 17.9075 9.3214Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90">GET IT ON</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </div>
              </button>

              {/* iOS Button */}
              <button
                onClick={() => handleDownload('ios')}
                className="group relative overflow-hidden bg-black bg-opacity-70 backdrop-blur-lg hover:bg-opacity-80 text-white font-bold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl border border-white border-opacity-20 w-full sm:w-auto"
              >
                <div className="relative flex items-center justify-center space-x-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </div>
              </button>
            </div>

            {/* Bottom Features */}
            {/* <div className="text-center">
              <div className="inline-flex items-center space-x-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3 text-white">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">مجاني تماماً</span>
                </div>
                <div className="w-px h-4 bg-white opacity-30"></div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-sm font-medium">آمن ومضمون</span>
                </div>
                <div className="w-px h-4 bg-white opacity-30"></div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-sm font-medium">سحب فوري</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBanner;