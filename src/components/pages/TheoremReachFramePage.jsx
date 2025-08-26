// src/components/pages/TheoremReachFramePage.jsx

import React from 'react';
import { ArrowLeft, Trophy } from 'lucide-react';
import { API_CONFIG , } from '../../data/surveyPlatforms';
import { generateUserData } from '../../utils/validation';
import { getTheme } from '../../config/theme';

const TheoremReachFramePage = ({ 
  isDarkMode, 
  setCurrentPage, 
  participants 
}) => {
  const theme = getTheme(isDarkMode);
  
  // Generate user data for TheoremReach
  const { userId} = generateUserData(participants);
  
  // TheoremReach URL construction based on your API parameters
  const theoremReachUrl = `${API_CONFIG.THEOREMREACH.BASE_URL}?api_key=${API_CONFIG.THEOREMREACH.API_KEY}&transaction_id=25&placement_id=${API_CONFIG.THEOREMREACH.PLACEMENT_ID}&user_id=${userId}`;

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className={`min-h-screen ${theme.background}`}>
      <div className={`${theme.headerBg} backdrop-blur-lg shadow-2xl border-b`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl animate-bounce">📊</div>
              <h1 className={`text-3xl font-bold ${theme.textPrimary}`}>TheoremReach</h1>
              
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
              src={theoremReachUrl}
              width="100%"
              height="1000px"
              frameBorder="0"
              title="TheoremReach Surveys"
              className="w-full rounded-3xl"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoremReachFramePage;