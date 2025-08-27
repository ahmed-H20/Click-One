import { Users, Zap, Trophy, Sparkles, ExternalLink, Star, Facebook } from 'lucide-react';
import FloatingParticles from '../common/FloatingParticles';
import LiveUserCounter from '../common/LiveUserCounter';
import DownloadBanner from '../common/DownloadBanner';
import GoogleAdsBanner from '../ads/GoogleAdsBanner';
import HorizontalAdsBanner, { CompactHorizontalAdsBanner } from '../ads/HorizontalAdsBanner';
import { surveyPlatforms } from '../../data/surveyPlatforms';
import { getTheme } from '../../config/theme';

const HomePage = ({ 
  isDarkMode, 
  participants, 
  setCurrentPage, 
  handleSurveySelect,
  isVisible 
}) => {
  const theme = getTheme(isDarkMode);

  return (
    <div className={`min-h-screen relative overflow-hidden ${theme.textPrimary}`}>
      
      
      {/* Animated Background */}
      <div className={`absolute inset-0 ${theme.background}`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        {!isDarkMode && (
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse"
                style={{
                  background: `radial-gradient(circle, ${['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'][i]}, transparent)`,
                  width: `${200 + i * 80}px`,
                  height: `${200 + i * 80}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${4 + i}s`,
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Top Horizontal Ads Banner */}
        
        <FloatingParticles isDarkMode={isDarkMode} />

        {/* Logo Section */}
        <div className={`flex justify-center mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative group">
            <div className={`absolute -inset-4 bg-gradient-to-r ${theme.glowBorder} rounded-full blur-xl opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse`}></div>
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dqqy8usfz/image/upload/v1756233651/WhatsApp_Image_2025-08-19_at_12.31.03_PM_uou6kz.jpg" 
                alt="ClickOne Logo" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl object-cover animate-float border-4 border-white border-opacity-20 backdrop-blur-lg"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl border-4 border-white border-opacity-20 backdrop-blur-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl md:text-5xl font-bold text-white animate-float hidden">
                C1
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className={`inline-flex items-center space-x-2 ${theme.cardBg} backdrop-blur-lg rounded-full px-6 py-2 mb-6 animate-bounce border`}>
            <Sparkles className="text-yellow-400" size={20} />
            <span className={`${theme.textSecondary} font-medium`}>مرحباً بك في ClickOne</span>
            <Sparkles className="text-yellow-400" size={20} />
          </div>
          
          <h1 className={`text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6 animate-pulse`}>
            ClickOne
          </h1>
          
          {/* New Welcome Message */}
          <div className={`${theme.cardBg} backdrop-blur-lg rounded-3xl p-8 mb-8 max-w-5xl mx-auto border border-opacity-20`}>
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="text-yellow-400 animate-spin" size={24} />
              <span className={`text-2xl md:text-3xl font-bold ${theme.textPrimary} mx-3`}>مرحباً بك في عالم ClickOne</span>
              <Sparkles className="text-yellow-400 animate-spin" size={24} />
            </div>
            <p className={`text-lg md:text-xl ${theme.textSecondary} leading-relaxed text-right`}>
              هنا تبدأ رحلتك نحو الاستفادة من أدوات رقمية مبتكرة تمنحك الفرصة لتنمية رصيدك واستثمار وقتك بذكاء. من خلال المشاركة في الاستطلاعات البسيطة، يمكنك تعزيز نشاطك اليومي والاستفادة من نظام متكامل يجمع بين التسوّق الذكي، التبادل التجاري، وتحقيق الأرباح بمرونة وشفافية.
            </p>
          </div>
          
          <div className={`text-2xl md:text-3xl ${theme.textSecondary} max-w-4xl mx-auto leading-relaxed mb-8`}>
            <p className="mb-4">🎯 رأيك له قيمة… ومع تطبيق ClickOne يتحول إلى ربح حقيقي</p>
            <p className="text-yellow-600 animate-pulse">✨ أنت تُشارك برأيك، ونحن نشاركك الأرباح ✨</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => setCurrentPage('data')}
              className={`group relative overflow-hidden bg-gradient-to-r ${theme.buttonPrimary} text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Trophy className="animate-spin" size={24} />
                <span className="text-lg">🏆 شاهد الإحصائيات</span>
              </div>
            </button>
            
            <LiveUserCounter isDarkMode={isDarkMode} />
          </div>
        </div>

        {/* Compact Horizontal Banner between sections */}
        <div className={`my-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <CompactHorizontalAdsBanner 
            isDarkMode={isDarkMode} 
            speed="fast" 
          />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {[
            { icon: Zap, label: 'منصات الاستطلاعات', value: surveyPlatforms.length, color: 'from-yellow-500 to-orange-500', bgColor: 'bg-yellow-500' },
            { icon: Users, label: 'إجمالي المشاركات', value: participants.length, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${theme.glowBorder} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-2xl p-6 border`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full ${stat.bgColor} bg-opacity-20`}>
                      <stat.icon className={`${theme.textPrimary} animate-pulse`} size={28} />
                    </div>
                    <div className="text-right">
                      <p className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                        {stat.value}
                      </p>
                    </div>
                  </div>
                  <p className={`${theme.textMuted} text-sm`}>{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
              <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-3xl p-8 border text-center`}>
                <div className="text-5xl mb-4 animate-bounce">💰</div>
                <h3 className={`text-2xl font-bold ${theme.textPrimary} mb-4`}>رأيك = ربح</h3>
                <p className={`${theme.textSecondary} text-lg leading-relaxed`}>
                  رأيك له قيمة… ومع تطبيق ClickOne يتحول إلى ربح حقيقي
                </p>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
              <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-3xl p-8 border text-center`}>
                <div className="text-5xl mb-4 animate-bounce">🤝</div>
                <h3 className={`text-2xl font-bold ${theme.textPrimary} mb-4`}>شراكة مربحة</h3>
                <p className={`${theme.textSecondary} text-lg leading-relaxed`}>
                  أنت تُشارك برأيك، ونحن نشاركك الأرباح
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Another Horizontal Banner before platforms */}
        <div className={`my-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <HorizontalAdsBanner 
            isDarkMode={isDarkMode} 
            speed="slow" 
            position="middle"
            showLabel={false}
          />
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {surveyPlatforms.map((platform, index) => (
            <div
              key={platform.id}
              className={`transform transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              <div className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${isDarkMode ? theme.glowBorder : platform.color} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                
                <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-3xl p-8 border hover:border-opacity-40 transition-all duration-300`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${platform.color} text-white text-2xl animate-pulse`}>
                        {platform.icon}
                      </div>
                      <div>
                        <span className={`bg-gray-200 ${theme.textPrimary} text-xs font-medium px-3 py-1 rounded-full`}>
                          {platform.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`${theme.textMuted} text-sm`}>{platform.estimatedTime}</div>
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold ${theme.textPrimary} mb-4`}>{platform.title}</h3>
                  <p className={`${theme.textSecondary} mb-6 leading-relaxed text-sm`}>{platform.description}</p>
                  
                  <button
                    onClick={() => handleSurveySelect(platform)}
                    className={`w-full group relative overflow-hidden bg-gradient-to-r ${platform.color} hover:shadow-2xl text-white py-4 px-6 rounded-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-xl`}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-3">
                      <Zap className="group-hover:animate-bounce" size={20} />
                      <span className="text-lg">⚡ ابدأ الاستطلاع</span>
                      <ExternalLink className="group-hover:animate-pulse" size={18} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Banner */}
        <DownloadBanner isDarkMode={isDarkMode} />

        {/* Traditional Google Ads Banner */}
        <GoogleAdsBanner isDarkMode={isDarkMode} position="bottom" />

        {/* Final Horizontal Banner */}
        <div className={`mt-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <HorizontalAdsBanner 
            isDarkMode={isDarkMode} 
            speed="medium" 
            position="bottom"
            showLabel={true}
          />
        </div>

        {/* Facebook Links Section */}
        <div className={`text-center mt-16 mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
          <div className={`${theme.cardBg} backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto border border-opacity-20`}>
            <div className="flex items-center justify-center mb-6">
              <Facebook className="text-blue-600 animate-pulse" size={32} />
              <h3 className={`text-2xl font-bold ${theme.textPrimary} mx-3`}>تابعنا على فيسبوك</h3>
              <Facebook className="text-blue-600 animate-pulse" size={32} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <a 
                  href="https://www.facebook.com/share/1B1vA3DsFs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`relative flex flex-col h-full ${theme.cardBg} backdrop-blur-lg rounded-2xl p-6 border hover:border-blue-500 transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center justify-center mb-4">
                      <img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new"/>
                    </div>
                  </div>
                  <h4 className={`text-lg font-bold ${theme.textPrimary} mb-3`}>مجموعة المستخدمين</h4>
                  <p className={`${theme.textSecondary} text-sm leading-relaxed flex-grow`}>
                    رابط صفحة لمجموعة من مستخدمي تطبيقنا على الفيسبوك
                  </p>
                  <div className="flex items-center justify-center mt-4">
                    <ExternalLink className="text-blue-500 group-hover:animate-pulse" size={16} />
                    <span className="text-blue-500 font-medium mr-2">انضم للمجموعة</span>
                  </div>
                </a>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <a 
                  href="https://www.facebook.com/share/1LEyXoWcop/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`relative flex flex-col h-full ${theme.cardBg} backdrop-blur-lg rounded-2xl p-6 border hover:border-blue-500 transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="flex items-center justify-center mb-4">
                      <img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new"/>
                  </div>
                  <h4 className={`text-lg font-bold ${theme.textPrimary} mb-3`}>الصفحة الرسمية</h4>
                  <p className={`${theme.textSecondary} text-sm leading-relaxed flex-grow`}>
                    رابط صفحتنا الرسمية على فيسبوك
                  </p>
                  <div className="flex items-center justify-center mt-4">
                    <ExternalLink className="text-blue-600 group-hover:animate-pulse" size={16} />
                    <span className="text-blue-600 font-medium mr-2">زور صفحتنا</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
          <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 hover:shadow-green-500/50 rounded-full px-8 py-4 text-white font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse`}>
            <Trophy className="animate-spin" size={24} />
            <span>🎉 ابدأ رحلتك الآن وشارك رأيك! 🎉</span>
            <Sparkles className="animate-bounce" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;