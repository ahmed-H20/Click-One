function generateUserId() {
  return `user_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
}

export const surveyPlatforms = [
  {
    id: 1,
    title: "CPX Research",
    description: "اكمل الاستطلاعات واحصل على مكافآت مالية فورية",
    url: "/cpx-frame",
    category: "استطلاعات عامة",
    estimatedTime: "5-15 دقيقة",
    reward: "مكافآت فورية",
    type: "iframe",
    color: "from-purple-500 to-pink-500",
    icon: "🎯"
  },
  {
    id: 2,
    title: "TheoremReach",
    description: "استطلاعات متنوعة مع مكافآت مضاعفة في عطلات نهاية الأسبوع",
    url: "/theoremreach",
    category: "استطلاعات تفاعلية",
    estimatedTime: "10-20 دقيقة",
    reward: "مكافآت مضاعفة",
    type: "iframe",
    color: "from-blue-500 to-cyan-500",
    icon: "⚡"
  },
  {
    id: 'bitlabs',
    title: 'BitLabs',
    url: '/bitlabs',
    description: 'استطلاعات عالية الجودة مع مكافآت سريعة ونظام تقييم متقدم',
    icon: '🔬',
    color: 'from-green-500 to-teal-600',
    category: 'استطلاعات عامة',
    estimatedTime: '6-15 دقيقة',
    type: 'iframe'
  },
  // {
  //   id: 3,
  //   title: "Pollfish",
  //   description: "استطلاعات سريعة ومباشرة، مكافآت فورية بعد الانتهاء",
  //   url: "https://www.pollfish.com",
  //   category: "استطلاعات سريعة",
  //   estimatedTime: "3-10 دقائق",
  //   reward: "دفع سريع",
  //   type: "external",
  //   color: "from-green-500 to-emerald-500",
  //   icon: "🚀"
  // },
];

async function getUserIP() {
  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    console.log("User IP:", data.ip);
    return data.ip;
  } catch (error) {
    console.error("Error fetching IP:", error);
  }
}


// API Configuration (can be moved to separate config file)
export const API_CONFIG = {
  CPX_RESEARCH: {
    APP_ID: import.meta.env.VITE_CPX_APP_ID,
    SECURE_KEY: import.meta.env.VITE_CPX_SECURE_KEY,
    BASE_URL: import.meta.env.VITE_CPX_BASE_URL,
    ext_user_id: generateUserId(),
    ip_user: await getUserIP()
  },
  THEOREMREACH: {
    BASE_URL: import.meta.env.VITE_THEOREM_BASE_URL,
    API_KEY: import.meta.env.VITE_THEOREM_API_KEY,
    USER_ID: import.meta.env.VITE_THEOREM_USER_ID,
    PLACEMENT_ID: import.meta.env.VITE_THEOREM_PLACEMENT_ID
  },
  BITLABS: {
    BASE_URL: import.meta.env.VITE_BITLABS_BASE_URL,
    API_TOKEN: import.meta.env.VITE_BITLABS_API_TOKEN,
    CLICK_BASE_URL: import.meta.env.VITE_BITLABS_CLICK_BASE_URL,
    USER_ID: generateUserId() 
  }
};

// Default user settings
export const DEFAULT_SETTINGS = {
  ANIMATION_DURATION: 2000,
  PARTICLE_COUNT: 20
};