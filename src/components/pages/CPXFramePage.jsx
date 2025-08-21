import React from 'react';
import { ArrowLeft, Trophy } from 'lucide-react';
import { API_CONFIG } from '../../data/surveyPlatforms';
import { generateUserData, generateSecureHash } from '../../utils/validation';
import { getTheme } from '../../config/theme';

const CPXFramePage = ({ 
  isDarkMode, 
  setCurrentPage, 
  participants 
}) => {
  const theme = getTheme(isDarkMode);
  
  // Generate user data for CPX Research
  const { userId, userName, userEmail } = generateUserData(participants);
  const secureHash = generateSecureHash(userId, API_CONFIG.CPX_RESEARCH.SECURE_KEY);
  
  const cpxUrl = `${API_CONFIG.CPX_RESEARCH.BASE_URL}?app_id=${API_CONFIG.CPX_RESEARCH.APP_ID}&ext_user_id=${userId}&secure_hash=${secureHash}&username=${encodeURIComponent(userName)}&email=${encodeURIComponent(userEmail)}&subid_1=&subid_2=`;

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className={`min-h-screen ${theme.background}`}>
      <div className={`${theme.headerBg} backdrop-blur-lg shadow-2xl border-b`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl animate-bounce">🎯</div>
              <h1 className={`text-3xl font-bold ${theme.textPrimary}`}>CPX Research</h1>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-full shadow-lg animate-pulse">
                <span className="text-white font-bold">💰 ابدأ الربح</span>
              </div>
            </div>
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
      
      <div className="container mx-auto px-4 py-6">
        <div className="relative group">
          <div className={`absolute -inset-1 bg-gradient-to-r ${theme.glowBorder} rounded-3xl blur opacity-25`}></div>
          <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border`}>
            <iframe
              src={cpxUrl}
              width="100%"
              height="2000px"
              frameBorder="0"
              title="CPX Research Surveys"
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPXFramePage;