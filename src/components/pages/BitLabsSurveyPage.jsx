import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, Clock, DollarSign, ExternalLink, RefreshCw, Zap, Trophy } from 'lucide-react';
import { API_CONFIG } from '../../data/surveyPlatforms';
import { generateUserData } from '../../utils/validation';
import { getTheme } from '../../config/theme';
import FloatingParticles from '../common/FloatingParticles';

const BitLabsSurveyPage = ({ 
  isDarkMode, 
  setCurrentPage, 
  participants 
}) => {
  const theme = getTheme(isDarkMode);
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { userId } = generateUserData(participants);

  const fetchSurveys = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(API_CONFIG.BITLABS.BASE_URL, {
        method: 'GET',
        headers: {
          'X-Api-Token': API_CONFIG.BITLABS.API_TOKEN,
          'X-User-Id': userId,
          'accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('فشل في تحميل الاستطلاعات');
      }

      const data = await response.json();

      console.log('Fetched BitLabs surveys:', data);
      
      if (data.status === 'success' && data.data && data.data.surveys) {
        setSurveys(data.data.surveys);
      } else {
        throw new Error('لا توجد استطلاعات متاحة حالياً');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching BitLabs surveys:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleSurveyClick = (survey) => {
    // Open survey in new tab
    window.open(survey.click_url, '_blank', 'noopener,noreferrer');
  };

  const getRatingStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  const getCategoryColor = (category) => {
    const colors = {
      'General': 'from-blue-500 to-cyan-500',
      'Lifestyle': 'from-purple-500 to-pink-500',
      'Technology': 'from-green-500 to-emerald-500',
      'Healthcare': 'from-red-500 to-orange-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${theme.background}`}>
      <FloatingParticles isDarkMode={isDarkMode} />
      
      {/* Header */}
      <div className={`relative z-10 ${theme.headerBg} backdrop-blur-lg shadow-2xl border-b`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl animate-bounce">🔬</div>
              <h1 className={`text-3xl font-bold ${theme.textPrimary}`}>BitLabs Surveys</h1>
              
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={fetchSurveys}
                disabled={loading}
                className={`hidden md:block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full font-bold transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                <div className="flex items-center space-x-2">
                    <RefreshCw className={`${loading ? 'animate-spin' : ''}`} size={18} />
                    <span>تحديث</span>
                </div>
            </button>
              <button
                onClick={handleBackToHome}
                className={`bg-gradient-to-r ${theme.buttonPrimary} text-white px-6 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/50`}
              >
                <div className="flex items-center space-x-2">
                  <ArrowLeft className="animate-pulse" size={18} />
                  <span>العودة للرئيسية</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="relative group">
            <div className={`absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-25`}></div>
            <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-2xl p-6 border`}>
              <div className="flex items-center justify-between">
                <div className="text-3xl animate-bounce">📊</div>
                <div className="text-right">
                  <p className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500`}>
                    {loading ? '...' : surveys.length}
                  </p>
                  <p className={`${theme.textMuted} text-sm`}>استطلاعات متاحة</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="relative group">
            <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25`}></div>
            <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-2xl p-6 border`}>
              <div className="flex items-center justify-between">
                <div className="text-3xl animate-bounce">💰</div>
                <div className="text-right">
                  <p className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500`}>
                    {loading ? '...' : surveys.reduce((avg, s) => avg + parseFloat(s.value || 0), 0) / surveys.length || 0}
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="relative group">
            <div className={`absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25`}></div>
            <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-2xl p-6 border`}>
              <div className="flex items-center justify-between">
                <div className="text-3xl animate-bounce">⏱️</div>
                <div className="text-right">
                  <p className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500`}>
                    {loading ? '...' : Math.round(surveys.reduce((avg, s) => avg + (s.loi || 0), 0) / surveys.length) || 0}
                  </p>
                  <p className={`${theme.textMuted} text-sm`}>متوسط الوقت (دقيقة)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative group mb-8">
          <div className={`absolute -inset-1 bg-gradient-to-r ${theme.glowBorder} rounded-3xl blur opacity-25`}></div>
          <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-3xl overflow-hidden border`}>
            <div className={`p-8 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <h2 className={`text-3xl font-bold ${theme.textPrimary} flex items-center`}>
                <span className="text-4xl mr-4 animate-bounce">🎯</span>
                الاستطلاعات المتاحة
              </h2>
            </div>

            {loading ? (
              <div className="p-16 text-center">
                <div className="text-6xl mb-6 animate-spin">🔄</div>
                <p className={`${theme.textPrimary} text-2xl mb-4`}>جاري تحميل الاستطلاعات...</p>
                <p className={`${theme.textMuted} text-lg`}>يرجى الانتظار ⏳</p>
              </div>
            ) : error ? (
              <div className="p-16 text-center">
                <div className="text-6xl mb-6">❌</div>
                <p className={`${theme.textPrimary} text-2xl mb-4`}>{error}</p>
                <button
                  onClick={fetchSurveys}
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <RefreshCw size={18} />
                    <span>إعادة المحاولة</span>
                  </div>
                </button>
              </div>
            ) : surveys.length === 0 ? (
              <div className="p-16 text-center">
                <div className="text-6xl mb-6 animate-bounce">📋</div>
                <p className={`${theme.textPrimary} text-2xl mb-4`}>لا توجد استطلاعات متاحة حالياً ✨</p>
                <p className={`${theme.textMuted} text-lg`}>يرجى المحاولة لاحقاً 🔄</p>
              </div>
            ) : (
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {surveys.map((survey, index) => (
                  <div
                    key={survey.id}
                    className={`relative group transform transition-all duration-500 hover:scale-105`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${getCategoryColor(survey.category.name)} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                    <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-2xl p-6 border group-hover:border-opacity-40 transition-all duration-300`}>
                      
                      {/* Survey Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={survey.category.icon_url} 
                            alt={survey.category.name}
                            className="w-8 h-8"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>';
                            }}
                          />
                          <div>
                            <span className={`${theme.cardBg} ${theme.textPrimary} text-xs font-medium px-3 py-1 rounded-full border`}>
                              {survey.category.name}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {getRatingStars(survey.rating)}
                        </div>
                      </div>

                      {/* Survey Details
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="text-green-500" size={18} />
                          <div>
                            <p className={`${theme.textMuted} text-xs`}>المكافأة</p>
                            <p className={`${theme.textPrimary} font-bold`}>{survey.value} نقطة</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Clock className="text-blue-500" size={18} />
                          <div>
                            <p className={`${theme.textMuted} text-xs`}>الوقت المقدر</p>
                            <p className={`${theme.textPrimary} font-bold`}>{survey.loi} دقيقة</p>
                          </div>
                        </div>
                      </div> */}

                      {/* Survey Stats */}
                      {/* <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`${theme.textMuted} text-sm`}>معدل النجاح</span>
                          <span className={`${theme.textPrimary} font-bold`}>{Math.round(survey.cr * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${survey.cr * 100}%` }}
                          ></div>
                        </div>
                      </div> */}

                      {/* Action Button */}
                      <button
                        onClick={() => handleSurveyClick(survey)}
                        className={`w-full group relative overflow-hidden bg-gradient-to-r ${getCategoryColor(survey.category.name)} text-white py-4 px-6 rounded-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-xl`}
                      >
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-center space-x-3">
                          <Zap className="group-hover:animate-bounce" size={20} />
                          <span className="text-lg">🚀 ابدأ الاستطلاع</span>
                          <ExternalLink className="group-hover:animate-pulse" size={18} />
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={handleBackToHome}
            className={`group relative overflow-hidden bg-gradient-to-r ${theme.buttonPrimary} text-white font-bold py-6 px-12 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50`}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative flex items-center space-x-3 text-xl">
              <Trophy className="animate-bounce" size={24} />
              <span>🎉 عودة للاستطلاعات الأخرى! 🎉</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BitLabsSurveyPage;