import React from 'react';
import { ExternalLink } from 'lucide-react';
import FloatingParticles from '../common/FloatingParticles';
import { getTheme } from '../../config/theme';

const RedirectPage = ({ isDarkMode, selectedSurvey }) => {
  const theme = getTheme(isDarkMode);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles isDarkMode={isDarkMode} />
      
      <div className={`absolute inset-0 ${theme.background}`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="relative mb-8">
            <div className={`bg-blue-500 bg-opacity-20 border-blue-400 rounded-full w-32 h-32 flex items-center justify-center mx-auto backdrop-blur-lg border border-opacity-30 animate-pulse`}>
              <ExternalLink size={48} className="text-blue-500 animate-bounce" />
            </div>
            <div className="absolute -top-4 -right-4 text-3xl animate-bounce">🚀</div>
            <div className="absolute -bottom-4 -left-4 text-3xl animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
          </div>
          
          <h2 className={`text-4xl font-bold ${theme.textPrimary} mb-6 animate-pulse`}>جاري التحويل... ⚡</h2>
          <p className={`text-xl ${theme.textSecondary} mb-4`}>فتح الاستطلاع في نافذة جديدة</p>
          <p className={`text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold animate-pulse`}>
            "{selectedSurvey?.title}"
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectPage;