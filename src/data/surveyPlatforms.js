export const surveyPlatforms = [
  {
    id: 1,
    title: "CPX Research",
    description: "اكمل الاستطلاعات واحصل على نقاط ClickOne قابلة للاستبدال",
    url: "cpx-research",
    category: "استطلاعات عامة",
    estimatedTime: "5-15 دقيقة",
    points: "50-200 نقطة",
    type: "iframe",
    color: "from-purple-500 to-pink-500",
    icon: "🎯"
  },
  {
    id: 2,
    title: "TheoremReach",
    description: "استطلاعات متنوعة مع نقاط مضاعفة في عطلات نهاية الأسبوع",
    url: "https://info.theoremreach.com",
    category: "استطلاعات تفاعلية",
    estimatedTime: "10-20 دقيقة",
    points: "100-350 نقطة",
    type: "external",
    color: "from-blue-500 to-cyan-500",
    icon: "⚡"
  },
  {
    id: 3,
    title: "Pollfish",
    description: "استطلاعات سريعة ومباشرة، نقاط فورية بعد الانتهاء",
    url: "https://www.pollfish.com",
    category: "استطلاعات سريعة",
    estimatedTime: "3-10 دقائق",
    points: "30-100 نقطة",
    type: "external",
    color: "from-green-500 to-emerald-500",
    icon: "🚀"
  },
  {
    id: 4,
    title: "BitLabs",
    description: "استطلاعات مفصلة مع نقاط عالية للاستطلاعات الطويلة",
    url: "https://dashboard.bitlabs.ai",
    category: "استطلاعات مفصلة",
    estimatedTime: "15-25 دقيقة",
    points: "200-500 نقطة",
    type: "external",
    color: "from-orange-500 to-red-500",
    icon: "💎"
  }
];

// API Configuration (can be moved to separate config file)
export const API_CONFIG = {
  CPX_RESEARCH: {
    APP_ID: "16548",
    SECURE_KEY: "V3jaWL9UWSXJ6utOhusrpD7F9sFhAclD",
    BASE_URL: "https://offers.cpx-research.com/index.php"
  }
};

// Default user settings
export const DEFAULT_SETTINGS = {
  INITIAL_POINTS: 0,
  ANIMATION_DURATION: 2000,
  PARTICLE_COUNT: 20
};