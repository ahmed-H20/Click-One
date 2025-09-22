import React from 'react';
import { Users, Zap, Sparkles, Trophy, TrendingUp } from 'lucide-react';
import FloatingParticles from '../common/FloatingParticles';
import AnimatedCounter from '../common/AnimatedCounter';
import { surveyPlatforms } from '../../data/surveyPlatforms';
import { getTheme } from '../../config/theme';
import { useNavigate } from 'react-router-dom';

const DataPage = ({ 
  isDarkMode, 
  participants, 
  isVisible 
}) => {
  const theme = getTheme(isDarkMode);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles isDarkMode={isDarkMode} />
      
      <div className={`absolute inset-0 ${theme.background}`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-right">
            <h1 className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 animate-pulse`}>
              📊 إحصائيات الاستطلاعات
            </h1>
            <p className={`text-xl ${theme.textSecondary}`}>نظرة عامة على مشاركة الاستطلاعات ✨</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className={`bg-gradient-to-r ${theme.buttonSecondary} text-white px-6 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300 shadow-xl`}
          >
            <div className="flex items-center space-x-2">
              <span>🏠</span>
              <span>العودة للرئيسية</span>
            </div>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { 
              icon: Users, 
              label: 'إجمالي المشاركات', 
              value: participants.length, 
              color: 'from-blue-500 to-cyan-500',
              bgColor: 'bg-blue-500',
              emoji: '👥'
            },
            { 
              icon: Zap, 
              label: 'منصات متاحة', 
              value: surveyPlatforms.length, 
              color: 'from-purple-500 to-pink-500',
              bgColor: 'bg-purple-500',
              emoji: '⚡'
            },
            { 
              icon: TrendingUp, 
              label: 'معدل النمو', 
              value: participants.length > 0 ? Math.floor((participants.length / 30) * 100) : 0, 
              color: 'from-green-500 to-emerald-500',
              bgColor: 'bg-green-500',
              emoji: '📈',
              suffix: '%'
            }
          ].map((stat, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${isDarkMode ? theme.glowBorder : stat.color} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-3xl p-8 border`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl animate-bounce">{stat.emoji}</div>
                    <div className="text-right">
                      <p className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} animate-pulse`}>
                        <AnimatedCounter value={stat.value} />
                        {stat.suffix && <span>{stat.suffix}</span>}
                      </p>
                    </div>
                  </div>
                  <p className={`${theme.textPrimary} font-medium text-lg`}>{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
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

        {/* Participation Table */}
        <div className="relative group">
          <div className={`absolute -inset-1 bg-gradient-to-r ${theme.glowBorder} rounded-3xl blur opacity-25`}></div>
          <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-3xl overflow-hidden border`}>
            <div className={`p-8 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <h2 className={`text-3xl font-bold ${theme.textPrimary} flex items-center`}>
                <span className="text-4xl mr-4 animate-bounce">📋</span>
                المشاركات الحديثة
              </h2>
            </div>
            
            {participants.length === 0 ? (
              <div className="p-16 text-center">
                <div className="text-6xl mb-6 animate-bounce">👥</div>
                <p className={`${theme.textPrimary} text-2xl mb-4`}>لا توجد مشاركات بعد ✨</p>
                <p className={`${theme.textMuted} text-lg`}>ستظهر المشاركات هنا بعد تقديم معلوماتهم 🎯</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 bg-opacity-50">
                    <tr>
                      <th className={`px-8 py-6 text-right text-sm font-bold ${theme.textPrimary} uppercase tracking-wider`}>
                        👤 المشارك
                      </th>
                      <th className={`px-8 py-6 text-right text-sm font-bold ${theme.textPrimary} uppercase tracking-wider`}>
                        🎯 المنصة
                      </th>
                      <th className={`px-8 py-6 text-right text-sm font-bold ${theme.textPrimary} uppercase tracking-wider`}>
                        📅 التاريخ
                      </th>
                      <th className={`px-8 py-6 text-right text-sm font-bold ${theme.textPrimary} uppercase tracking-wider`}>
                        ✅ الحالة
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${isDarkMode ? 'divide-gray-600' : 'divide-gray-200'}`}>
                    {participants.slice().reverse().map((participant, index) => (
                      <tr key={participant.id} className={`hover:bg-gray-50 hover:bg-opacity-10 transition-colors duration-200`}>
                        <td className={`px-8 py-6 whitespace-nowrap text-lg font-bold ${theme.textPrimary}`}>
                          مشارك #{participants.length - index} 🎭
                        </td>
                        <td className={`px-8 py-6 whitespace-nowrap text-lg ${theme.textSecondary}`}>
                          {participant.surveyTitle}
                        </td>
                        <td className={`px-8 py-6 whitespace-nowrap text-lg ${theme.textSecondary}`}>
                          {new Date(participant.submissionDate).toLocaleDateString('ar-EG')}
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap">
                          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-green-500 bg-opacity-20 text-green-500 border border-green-500 border-opacity-30 animate-pulse">
                            ✅ مكتمل
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/')}
            className={`group relative overflow-hidden bg-gradient-to-r ${theme.buttonPrimary} text-white font-bold py-6 px-12 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50`}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative flex items-center space-x-3 text-xl">
              <Sparkles className="animate-spin" size={24} />
              <span>🎉 عودة لمشاركة المزيد من الآراء! 🎉</span>
              <Trophy className="animate-bounce" size={24} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataPage;