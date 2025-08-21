import React from 'react';
import { Phone, User, Check, X, Zap } from 'lucide-react';
import FloatingParticles from '../common/FloatingParticles';
import { getTheme } from '../../config/theme';

export const UserInfoPage = ({
  isDarkMode,
  selectedSurvey,
  formData,
  errors,
  isSubmitting,
  showSuccess,
  handleInputChange,
  handleSubmit,
  setCurrentPage
}) => {
  const theme = getTheme(isDarkMode);

  if (showSuccess) {
    return (
      <div className={`min-h-screen relative overflow-hidden ${theme.textPrimary}`}>
        <FloatingParticles isDarkMode={isDarkMode} />
        <div className={`absolute inset-0 ${theme.background}`}>
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>
        
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center transform animate-bounce">
            <div className="relative mb-6">
              <div className="bg-green-500 bg-opacity-20 border-green-400 rounded-full w-24 h-24 flex items-center justify-center mx-auto backdrop-blur-lg border border-opacity-30">
                <Check size={48} className="text-green-400 animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce">✨</div>
              <div className="absolute -bottom-2 -left-2 text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>🎉</div>
            </div>
            <h2 className={`text-3xl font-bold ${theme.textPrimary} mb-4 animate-pulse`}>نجح! 🎊</h2>
            <p className={`${theme.textSecondary} mb-4`}>تم حفظ معلوماتك بنجاح</p>
            <p className="text-sm text-green-400 animate-pulse">جاري التحويل للاستطلاع... ⚡</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen relative overflow-hidden ${theme.textPrimary}`}>
      <FloatingParticles isDarkMode={isDarkMode} />
      
      <div className={`absolute inset-0 ${theme.background}`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="relative group">
            <div className={`absolute -inset-1 bg-gradient-to-r ${theme.glowBorder} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
            
            <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-3xl p-8 border`}>
              <div className="text-center mb-8">
                <div className="text-4xl mb-4 animate-bounce">🎯</div>
                <h2 className={`text-3xl font-bold ${theme.textPrimary} mb-4`}>قبل المتابعة</h2>
                <p className={`${theme.textSecondary} mb-2`}>يرجى تقديم معلومات الاتصال للمشاركة في:</p>
                <p className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-lg animate-pulse`}>
                  {selectedSurvey?.title}
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <label className={`block ${theme.textPrimary} font-medium mb-2`}>
                    <User size={16} className="inline mr-2 text-blue-500" />
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 ${theme.input} backdrop-blur-lg border rounded-2xl focus:ring-2 transition-all duration-300 ${
                      errors.name ? 'border-red-500 bg-red-500 bg-opacity-10' : ''
                    }`}
                    placeholder="أدخل اسمك الكامل"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2 animate-pulse flex items-center">
                      <X size={14} className="mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <label className={`block ${theme.textPrimary} font-medium mb-2`}>
                    <Phone size={16} className="inline mr-2 text-purple-500" />
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 ${theme.input} backdrop-blur-lg border rounded-2xl focus:ring-2 transition-all duration-300 ${
                      errors.phone ? 'border-red-500 bg-red-500 bg-opacity-10' : ''
                    }`}
                    placeholder="أدخل رقم هاتفك"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2 animate-pulse flex items-center">
                      <X size={14} className="mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="flex space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentPage('home')}
                    className={`flex-1 py-4 px-6 bg-gradient-to-r ${theme.buttonSecondary} text-white border rounded-2xl transition-all duration-300 transform hover:scale-105`}
                  >
                    إلغاء
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`flex-1 bg-gradient-to-r ${theme.buttonPrimary} text-white py-4 px-6 rounded-2xl font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin mr-2">⚡</div>
                        جاري الحفظ...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Zap className="mr-2 animate-pulse" size={18} />
                        متابعة للاستطلاع
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};