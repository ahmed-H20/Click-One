export const themeConfig = {
  light: {
    background: 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200',
    cardBg: 'bg-white bg-opacity-90 border-gray-200',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    textMuted: 'text-gray-600',
    glowBorder: 'from-blue-400 to-purple-500',
    buttonPrimary: 'from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700',
    buttonSecondary: 'from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700',
    input: 'bg-white bg-opacity-80 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500',
    headerBg: 'bg-white bg-opacity-90 border-gray-200',
    particleColor: 'from-blue-400 to-purple-400',
    iconToggle: 'bg-gray-800 hover:bg-gray-700 text-yellow-400 shadow-lg shadow-gray-800/25'
  },
  dark: {
    background: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
    cardBg: 'bg-gray-800 bg-opacity-60 border-gray-600',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-200',
    textMuted: 'text-gray-300',
    glowBorder: 'from-gray-600 to-gray-700',
    buttonPrimary: 'from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900',
    buttonSecondary: 'from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800',
    input: 'bg-gray-700 bg-opacity-50 border-gray-600 text-gray-200 placeholder-gray-400 focus:ring-gray-500 focus:border-gray-500',
    headerBg: 'bg-gray-800 bg-opacity-50 border-gray-700',
    particleColor: 'from-gray-400 to-gray-600',
    iconToggle: 'bg-yellow-500 hover:bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-500/25'
  }
};

export const getTheme = (isDarkMode) => isDarkMode ? themeConfig.dark : themeConfig.light;