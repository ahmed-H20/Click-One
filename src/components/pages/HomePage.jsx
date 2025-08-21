import React from 'react';
import { Users, Gift, Zap, Trophy, Sparkles, ExternalLink, Star } from 'lucide-react';
import FloatingParticles from '../common/FloatingParticles';
import AnimatedCounter from '../common/AnimatedCounter';
import { surveyPlatforms } from '../../data/surveyPlatforms';
import { getTheme } from '../../config/theme';

const HomePage = ({ 
  isDarkMode, 
  userPoints, 
  participants, 
  setCurrentPage, 
  handleSurveySelect,
  isVisible 
}) => {
  const theme = getTheme(isDarkMode);

  return (
    <div className={`min-h-screen relative overflow-hidden ${theme.textPrimary}`}>
      <FloatingParticles isDarkMode={isDarkMode} />
      
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
          
          <p className={`text-2xl md:text-3xl ${theme.textSecondary} max-w-4xl mx-auto leading-relaxed mb-8`}>
            🎯 اجمع النقاط من الاستطلاعات 
            <span className="block text-yellow-600 animate-pulse">✨ واستبدلها بمكافآت حصرية ✨</span>
          </p>
          
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
            
            <div className={`flex items-center space-x-4 ${theme.cardBg} backdrop-blur-lg rounded-full px-6 py-3 border`}>
              <div className="flex items-center space-x-2">
                <Gift className="text-green-500 animate-bounce" size={20} />
                <span className={theme.textSecondary}>نقاطك:</span>
                <span className="text-2xl font-bold text-green-500">
                  <AnimatedCounter value={userPoints} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Zap, label: 'منصات الاستطلاعات', value: surveyPlatforms.length, color: 'from-yellow-500 to-orange-500', bgColor: 'bg-yellow-500' },
            { icon: Users, label: 'إجمالي المشاركات', value: participants.length, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500' },
            { icon: Star, label: 'نقاط متاحة', value: userPoints, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500' }
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
                        <AnimatedCounter value={stat.value} />
                      </p>
                    </div>
                  </div>
                  <p className={`${theme.textMuted} text-sm`}>{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                      <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${platform.color} animate-pulse`}>
                        {platform.points}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold ${theme.textPrimary} mb-4`}>{platform.title}</h3>
                  <p className={`${theme.textSecondary} mb-6 leading-relaxed text-sm`}>{platform.description}</p>
                  
                  <div className="flex items-center justify-center mb-6">
                    <div className={`bg-gradient-to-r ${platform.color} rounded-full px-6 py-2 shadow-lg`}>
                      <div className="flex items-center space-x-2">
                        <Gift className="text-white animate-bounce" size={16} />
                        <span className="text-white font-bold">{platform.points}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleSurveySelect(platform)}
                    className={`w-full group relative overflow-hidden bg-gradient-to-r ${platform.color} hover:shadow-2xl text-white py-4 px-6 rounded-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-xl`}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-3">
                      <Zap className="group-hover:animate-bounce" size={20} />
                      <span className="text-lg">⚡ ابدأ جمع النقاط</span>
                      <ExternalLink className="group-hover:animate-pulse" size={18} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
          <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 hover:shadow-green-500/50 rounded-full px-8 py-4 text-white font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse`}>
            <Trophy className="animate-spin" size={24} />
            <span>🎉 ابدأ رحلتك الآن واجمع النقاط! 🎉</span>
            <Sparkles className="animate-bounce" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;