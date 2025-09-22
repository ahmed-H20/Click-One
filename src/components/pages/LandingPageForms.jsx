import React, { useState, useEffect } from "react";
import {
  Download,
  Play,
  Shield,
  DollarSign,
  Users,
  Star,
  CheckCircle,
  ExternalLink,
  Smartphone,
  Youtube,
  Facebook,
  MessageCircle,
  Phone,
  ChevronRight,
  Gift,
  ShoppingBag,
  Zap,
  TrendingUp,
  Award,
  Clock,
  ArrowRight,
  Eye,
  Plus,
  Lock,
  Info,
  HelpCircle,
  X,
  Calendar,
  Globe,
  Loader,
  Link
} from "lucide-react";
import { getTheme } from "../../config/theme";
import FloatingParticles from "../common/FloatingParticles";
import { videoService } from "../../services/videoService";

const ClickOneLandingPage = ({ isDarkMode, setCurrentPage }) => {
  const theme = getTheme(isDarkMode);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);
  const [videosError, setVideosError] = useState(null);
  const [videos, setVideos] = useState([]);

  const defaultVideos = [
    {
      id: 1,
      name: "كيفية التسجيل في Click One",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
    },
    {
      id: 2,
      name: "شرح نظام النقاط والأرباح",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
    },
    {
      id: 3,
      name: "طريقة السحب والاستبدال",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
    },
    {
      id: 4,
      name: "شرح خطط الأرباح المتقدمة",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_4",
    },
    {
      id: 5,
      name: "كيفية دعوة الأصدقاء",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_5",
    },
    {
      id: 6,
      name: "نصائح لتحقيق أقصى ربح",
      link: "https://www.youtube.com/watch?v=VIDEO_ID_6",
    },
  ];

  // جلب آخر 6 فيديوهات من آخر مجموعة في قاعدة البيانات
  const fetchLatestVideos = async () => {
    setIsLoadingVideos(true);
    setVideosError(null);

    try {
      // جلب آخر مجموعة فيديوهات
      const response = await videoService.getLastVideoCollection();

      if (
        response.success &&
        response.data &&
        response.data.videos &&
        response.data.videos.length > 0
      ) {
        // استخدام الفيديوهات من آخر مجموعة
        console.log("Last collection videos:", response.data.videos);
        setVideos(response.data.videos);
      } else {
        // إذا لم توجد مجموعة، جلب جميع المجموعات وأخذ آخر 6 فيديوهات
        const allCollectionsResponse =
          await videoService.getAllVideoCollections();

        if (
          allCollectionsResponse.success &&
          allCollectionsResponse.data &&
          allCollectionsResponse.data.length > 0
        ) {
          // أخذ آخر مجموعة
          const lastCollection =
            allCollectionsResponse.data[allCollectionsResponse.data.length - 1];
          if (lastCollection.videos && lastCollection.videos.length > 0) {
            console.log("Videos from last collection:", lastCollection.videos);
            setVideos(lastCollection.videos);
          } else {
            console.log("No videos in last collection, using defaults");
            setVideos(defaultVideos);
          }
        } else {
          // إذا لم توجد أي مجموعات، استخدام القائمة الافتراضية
          console.log("No collections found in database, using defaults");
          setVideos(defaultVideos);
        }
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      setVideosError("حدث خطأ في تحميل الفيديوهات");
      // في حالة الخطأ، نستخدم القائمة الافتراضية
      setVideos(defaultVideos);
    } finally {
      setIsLoadingVideos(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    fetchLatestVideos();
  }, []);

  const features = [
    {
      icon: Shield,
      title: "مسجل رسمياً",
      description: "مسجّل في الولايات المتحدة (Wyoming)",
    },
    {
      icon: Star,
      title: "متوافق مع الشريعة",
      description: "نظام نقاط شرعي 100%",
    },
    {
      icon: DollarSign,
      title: "أرباح حقيقية",
      description: "كل 1000 نقطة = 1 دينار أردني",
    },
    { icon: Users, title: "مجتمع نشط", description: "آلاف المستخدمين النشطين" },
  ];

  const steps = [
    {
      number: 1,
      title: "حمّل التطبيق",
      description: "من Google Play أو App Store",
    },
    {
      number: 2,
      title: "سجّل بياناتك",
      description: "الاسم، الهاتف، كلمة السر",
    },
    { number: 3, title: "ادفع الاشتراك", description: "5 دنانير فقط سنوياً" },
    { number: 4, title: "ابدأ الربح", description: "شاهد 10 إعلانات يومياً" },
  ];

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${theme.textPrimary}`}
    >
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
                  background: `radial-gradient(circle, ${
                    [
                      "#3b82f6",
                      "#8b5cf6",
                      "#06b6d4",
                      "#10b981",
                      "#f59e0b",
                      "#ef4444",
                    ][i]
                  }, transparent)`,
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

      <FloatingParticles isDarkMode={isDarkMode} />

      <div className="relative z-10">
        {/* Header Section */}
        <header
          className={`${theme.headerBg} backdrop-blur-lg border-b ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="container mx-auto px-4 py-8">
            <div
              className={`text-center transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Logo Section */}
              <div
                className={`flex justify-center mb-8 transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="relative group">
                  <div
                    className={`absolute -inset-4 bg-gradient-to-r ${theme.glowBorder} rounded-full blur-xl opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse`}
                  ></div>
                  <div className="relative">
                    <img
                      src="https://res.cloudinary.com/dqqy8usfz/image/upload/v1756233651/WhatsApp_Image_2025-08-19_at_12.31.03_PM_uou6kz.jpg"
                      alt="ClickOne Logo"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl object-cover animate-float border-4 border-white border-opacity-20 backdrop-blur-lg"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl border-4 border-white border-opacity-20 backdrop-blur-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl md:text-5xl font-bold text-white animate-float hidden">
                      C1
                    </div>
                  </div>
                </div>
              </div>

              {/* Welcome Message */}
              <div className="relative py-8">
                
                {/* Main content */}
                <div className="relative">
                  {/* Title with animations */}
                  <h1 className="text-center mb-6">
                    <span className="block text-3xl md:text-5xl font-bold mb-4 ">
                      <span className="inline-block transform hover:scale-110 transition-transform duration-300 !text-blue-900 dark:!text-blue-500">
                        أهلًا
                      </span>{" "}
                      <span className="inline-block transform hover:scale-110 transition-transform duration-300 !text-blue-900 dark:!text-blue-500">
                        بك
                      </span>{" "}
                      <span className="inline-block transform hover:scale-110 transition-transform duration-300 !text-blue-900 dark:!text-blue-500">
                        في
                      </span>
                    </span>

                    <span className="relative inline-block">
                      {/* Glow effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-50"></span>
                      <span className="relative text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-pink-600 hover:to-blue-600 transition-all duration-500 animate-pulse">
                        Click One
                      </span>
                    </span>
                  </h1>

                  {/* Animated subtitle */}
                  <p
                    className={`text-xl md:text-2xl text-center ${theme.textSecondary} mb-8`}
                  >
                    <span className="inline-block transform hover:scale-105 hover:text-blue-600 transition-all duration-300">
                      استثمار ذكي
                    </span>
                    <span className="inline-block mx-3 animate-spin text-blue-500">
                      ✦
                    </span>
                    <span className="inline-block transform hover:scale-105 hover:text-purple-600 transition-all duration-300">
                      أرباح حقيقية
                    </span>
                    <span className="inline-block mx-3 animate-pulse text-purple-500">
                      ✦
                    </span>
                    <span className="inline-block transform hover:scale-105 hover:text-pink-600 transition-all duration-300">
                      وثقة ثابتة
                    </span>
                  </p>

                  {/* Decorative dots */}
                  <div className="flex justify-center space-x-3 mb-8">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* User Instructions - Simple version */}
              <div
                className={`${
                  theme.cardBg
                } backdrop-blur-lg rounded-2xl p-8 mb-8 max-w-2xl mx-auto border border-opacity-20 shadow-xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl group ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: "0.5s" }}
              >

                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative text-center">
                    {/* Icon */}
                    <Users
                      className="mx-auto text-blue-500 mb-4 animate-bounce"
                      size={32}
                    />

                    <p
                      className={`${theme.textSecondary} text-lg leading-relaxed`}
                    >
                      إذا كنت مشتركًا لدينا:{" "}
                      <span className="font-semibold inline-block hover:scale-105 transition-transform">
                        أدخل اسمك على التطبيق
                      </span>{" "}
                      و
                      <span className="font-semibold inline-block hover:scale-105 transition-transform">
                        رقمك المسجّل في Click One
                      </span>
                    </p>
                    <button onClick={() => setCurrentPage("form")} className="mt-4 inline-flex items-center space-x-2 bg-blue-500 text-white rounded-lg px-4 py-2">
                      <span>تسجيل</span>
                    </button>
                </div>
              </div>

              {/* Download CTA - Enhanced */}
              <button className="group relative mb-8 mx-auto block outline-none focus:outline-none">
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-5 px-10 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-xl">
                      ابدأ الآن — حمّل التطبيق وفعّل حسابك
                    </span>
                    <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors">
                      <Download
                        className="group-hover:animate-bounce"
                        size={24}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </div>
              </button>

              {/* App Download Links */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.abdsafyh.clickone.clickone&hl=en&gl=US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ${theme.cardBg} backdrop-blur-lg rounded-2xl p-5 border-2 border-transparent bg-gradient-to-r from-green-500/10 to-transparent hover:from-green-500/20 hover:to-green-400/10 hover:border-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500/10 rounded-full p-3 group-hover:bg-green-500/20 transition-colors duration-300">
                      <Smartphone
                        className="text-green-600 group-hover:animate-bounce"
                        size={30}
                      />
                    </div>
                    <div className="text-right">
                      <p className={`${theme.textMuted} text-sm`}>حمّل من</p>
                      <p className={`${theme.textPrimary} font-bold text-lg`}>
                        Google Play
                      </p>
                    </div>
                    <ExternalLink
                      className="text-gray-400 group-hover:text-green-600 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      size={18}
                    />
                  </div>
                </a>

                <a
                  href="https://apps.apple.com/us/app/click-one/id6747584660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ${theme.cardBg} backdrop-blur-lg rounded-2xl p-5 border-2 border-transparent bg-gradient-to-r from-blue-500/10 to-transparent hover:from-blue-500/20 hover:to-blue-400/10 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500/10 rounded-full p-3 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <Smartphone
                        className="text-blue-600 group-hover:animate-bounce"
                        size={30}
                      />
                    </div>
                    <div className="text-right">
                      <p className={`${theme.textMuted} text-sm`}>حمّل من</p>
                      <p className={`${theme.textPrimary} font-bold text-lg`}>
                        App Store
                      </p>
                    </div>
                    <ExternalLink
                      className="text-gray-400 group-hover:text-blue-600 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      size={18}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Videos Section - Enhanced */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div
              className={`text-center mb-12 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative inline-block">
                {/* Background decoration */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl rounded-lg"></div>

                {/* Main Title - Clear and Visible */}
                <div className="relative">
                  {/* Animated background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-20 bg-purple-600/20 blur-3xl animate-pulse"></div>
                  </div>

                  <h2 className="relative text-4xl md:text-6xl font-black flex items-center justify-center gap-3">
                    <span
                      className="inline-block text-purple-600 animate-bounce hover:text-blue-600 transition-colors duration-500"
                      style={{ animationDelay: "0s", animationDuration: "2s" }}
                    >
                      شاهد
                    </span>
                    <Star
                      className="text-yellow-500 animate-spin"
                      size={30}
                      style={{ animationDuration: "3s" }}
                    />
                    <span
                      className="inline-block text-purple-600 animate-bounce hover:text-pink-600 transition-colors duration-500"
                      style={{
                        animationDelay: "0.5s",
                        animationDuration: "2s",
                      }}
                    >
                      واربح
                    </span>
                  </h2>
                </div>
              </div>

              <p className={`${theme.textSecondary} text-lg mt-6`}>
                تعلم كيف تستفيد من التطبيق بأفضل طريقة
              </p>
            </div>

            {/* Loading State */}
            {isLoadingVideos && (
              <div className="flex justify-center items-center py-12">
                <Loader className="animate-spin text-blue-500" size={48} />
                <span className={`mr-3 ${theme.textSecondary}`}>
                  جاري تحميل الفيديوهات...
                </span>
              </div>
            )}

            {/* Error State */}
            {videosError && !isLoadingVideos && (
              <div className="text-center py-8">
                <p className="text-red-500 mb-4">{videosError}</p>
                <button
                  onClick={fetchLatestVideos}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  إعادة المحاولة
                </button>
              </div>
            )}

            {/* Videos Grid */}
            {!isLoadingVideos && !videosError && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {videos.slice(0, 6).map((video, index) => {
                  // التحقق من وجود الرابط
                  if (!video.link) {
                    console.error("Video link is missing for:", video);
                    return null;
                  }

                  // التحقق من نوع الفيديو
                  const isYouTube =
                    video.link.includes("youtube.com") ||
                    video.link.includes("youtu.be");
                  const isMP4 = video.link.match(/\.(mp4|webm|ogg)$/i);

                  // استخراج معرّف الفيديو لـ YouTube
                  const extractYouTubeId = (url) => {
                    const patterns = [
                      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
                      /youtube\.com\/embed\/([^&\n?#]+)/,
                      /youtube\.com\/v\/([^&\n?#]+)/,
                    ];

                    for (const pattern of patterns) {
                      const match = url.match(pattern);
                      if (match) return match[1];
                    }
                    return null;
                  };

                  const videoId = isYouTube
                    ? extractYouTubeId(video.link)
                    : null;

                  return (
                    <div
                      key={video._id || video.id || index}
                      className={`transform transition-all duration-700 hover:-translate-y-2 ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div
                        className={`relative group ${theme.cardBg} backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
                      >
                        {/* Video Container */}
                        <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                          {isYouTube && videoId ? (
                            // YouTube Embed
                            <iframe
                              src={`https://www.youtube.com/embed/${videoId}`}
                              title={video.name}
                              className="w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : isMP4 ? (
                            // MP4 Video Player
                            <video
                              className="w-full h-full object-cover"
                              controls
                              preload="metadata"
                            >
                              <source src={video.link} type="video/mp4" />
                              <source src={video.link} type="video/webm" />
                              <source src={video.link} type="video/ogg" />
                              متصفحك لا يدعم تشغيل الفيديو.
                            </video>
                          ) : (
                            // External video link
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 p-4">
                              <Play className="text-gray-400 mb-4" size={48} />
                              <p className="text-gray-300 mb-2">فيديو خارجي</p>
                              <a
                                href={video.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                              >
                                مشاهدة الفيديو
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Video Title */}
                        <div className="p-5">
                          <h3
                            className={`${theme.textPrimary} font-bold text-lg group-hover:text-blue-600 transition-colors`}
                          >
                            {video.name}
                          </h3>
                        </div>

                        {/* Play Button Overlay (للفيديوهات الخارجية) */}
                        {!isYouTube && !isMP4 && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-blue-600 bg-opacity-80 rounded-full p-4 transform group-hover:scale-110 transition-transform">
                              <Play className="text-white" size={32} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* YouTube Channel Button */}
              <a
                href="https://youtube.com/@clickoneapp?si=w_V_FMjnfTlUqE94"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
              >
                <div
                  className={`relative ${theme.cardBg} backdrop-blur-lg rounded-full px-8 py-4 border border-red-500/30 hover:border-red-500 transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Youtube
                        className="text-red-600 group-hover:scale-110 transition-transform duration-300 ml-2"
                        size={24}
                      />
                      <div className="absolute -inset-1 bg-red-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                    <span
                      className={`${theme.textPrimary} font-semibold group-hover:text-red-600 transition-colors`}
                    >
                      قناتنا على يوتيوب
                    </span>
                    <ExternalLink
                      className="text-gray-400 group-hover:text-red-600 transition-colors"
                      size={16}
                    />
                  </div>
                </div>
              </a>              
            </div>

            {/* Info Badge */}
            {/* <div className="text-center mt-8">
              <div
                className={`inline-flex items-center ${theme.cardBg} backdrop-blur-lg rounded-full px-4 py-2 text-sm ${theme.textMuted}`}
              >
                <Info className="ml-2" size={16} />
                <span> سجل دخولك لإضافة فيديوهاتك المفضلة </span>
              </div>
            </div> */}
          </div>
        </section>

        {/* Motivational Banners */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  text: "استثمر وقتك… اربح بلا مخاطرة",
                  icon: Clock,
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
                  emoji: "⏰",
                  delay: 0,
                },
                {
                  text: "كل 1000 نقطة = 1 دينار — أرباح ملموسة",
                  icon: DollarSign,
                  color: "from-green-500 to-emerald-500",
                  bgColor: "bg-gradient-to-r from-green-500 to-emerald-500",
                  emoji: "💰",
                  delay: 100,
                },
                {
                  text: "مطابق للشريعة 100%… والثقة أساسنا",
                  icon: Shield,
                  color: "from-purple-500 to-pink-500",
                  bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
                  emoji: "🕌",
                  delay: 200,
                },
                {
                  text: "مشاهدة 10 إعلانات يوميًا = حساب نشِط",
                  icon: Zap,
                  color: "from-yellow-500 to-orange-500",
                  bgColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
                  emoji: "⚡",
                  delay: 300,
                },
              ].map((banner, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-700 hover:scale-105 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${banner.delay}ms` }}
                >
                  <div className="relative group h-full">
                    {/* تأثير الإضاءة الخلفية */}
                    <div
                      className={`absolute -inset-1 ${banner.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500 animate-pulse`}
                    ></div>

                    {/* تأثير التوهج عند التحويم */}
                    <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                    {/* البطاقة الرئيسية */}
                    <div
                      className={`relative ${theme.cardBg} backdrop-blur-lg rounded-2xl p-6 border h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl`}
                    >
                      {/* شريط علوي ملون */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 ${banner.bgColor}`}
                      ></div>

                      {/* أيقونة متحركة */}
                      <div className="relative z-10 mb-4 flex justify-center">
                        <div
                          className={`p-3 rounded-full ${banner.bgColor} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}
                        >
                          <banner.icon
                            className={`text-transparent bg-clip-text ${banner.color} animate-bounce`}
                            size={32}
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 text-xl opacity-70 animate-pulse">
                          {banner.emoji}
                        </div>
                      </div>

                      {/* النص */}
                      <p
                        className={`${theme.textPrimary} font-medium text-center leading-relaxed relative z-10 group-hover:transform group-hover:translate-y-[-2px] transition-transform duration-300`}
                      >
                        {banner.text}
                      </p>

                      {/* تأثيرات إضافية */}
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>

                      {/* نقاط مضيئة عشوائية */}
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-ping"
                          style={{
                            top: `${20 + i * 20}%`,
                            left: `${15 + i * 25}%`,
                            animationDelay: `${i * 0.3}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Click One Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div
              className={`text-center mb-12 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-purple-600 hover:scale-110 mb-4">
                لماذا يختارنا الآلاف؟
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-700 hover:scale-105 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative group">
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${theme.glowBorder} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`}
                    ></div>
                    <div
                      className={`relative ${theme.cardBg} backdrop-blur-lg rounded-2xl p-8 border`}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-20`}
                        >
                          <feature.icon className="text-white" size={28} />
                        </div>
                        <div className="text-right flex-1">
                          <h3
                            className={`text-xl font-bold ${theme.textPrimary} mb-2`}
                          >
                            {feature.title}
                          </h3>
                          <p className={`${theme.textSecondary}`}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Points */}
            <div className="relative">
              {/* خلفية متحركة */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl animate-pulse" />

              <div
                className={`relative ${theme.cardBg} backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden`}
              >
                {/* عنوان القسم */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <h3
                      className={`text-2xl md:text-3xl font-bold ${theme.textPrimary} text-center`}
                    >
                      لماذا نحن الخيار الأفضل؟
                    </h3>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
                  </div>
                </div>

                <ul className="space-y-6">
                  {[
                    {
                      text: "مسجّل رسميًا في الولايات المتحدة (Wyoming) باسم Click One App LLC",
                      icon: "🏛️",
                      gradient: "from-blue-500 to-cyan-500",
                    },
                    {
                      text: "وكيل حصري في الأردن: شركة بشرى الخير للتسويق الإلكتروني",
                      icon: "🤝",
                      gradient: "from-purple-500 to-pink-500",
                    },
                    {
                      text: "نظام نقاط شرعي ومراجَع فقهيًا، بلا شُبهات ربا أو هرمية",
                      icon: "✨",
                      gradient: "from-green-500 to-emerald-500",
                    },
                    {
                      text: "أرباح من مصادر حقيقية: اشتراكات جديدة، إعلانات Google AdMob، أرباح YouTube",
                      icon: "💰",
                      gradient: "from-yellow-500 to-orange-500",
                    },
                    {
                      text: "دعم فني سريع عبر قنواتنا — الرد خلال ثوانٍ",
                      icon: "⚡",
                      gradient: "from-red-500 to-pink-500",
                    },
                  ].map((point, index) => (
                    <li
                      key={index}
                      className={`flex items-start group transform transition-all duration-700 hover:translate-x-2 ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* أيقونة متحركة */}
                      <div className="relative ml-4 mt-1">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${point.gradient} blur-xl opacity-40 group-hover:opacity-60 transition-opacity`}
                        />
                        <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-2 group-hover:scale-110 transition-transform">
                          <span className="text-2xl">{point.icon}</span>
                        </div>
                      </div>

                      {/* النص مع خط تحته */}
                      <div className="flex-1 mt-2 pt-2">
                        <span
                          className={`${theme.textSecondary} text-lg leading-relaxed block relative pb-1.5`}
                        >
                          {point.text}
                          <span
                            className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-l ${point.gradient} transition-all duration-500 group-hover:w-full w-0`}
                          />
                        </span>
                      </div>

                      {/* علامة الصح المتحركة */}
                      <div className="mr-3 pt-2">
                        <CheckCircle
                          className="text-green-500 mt-1 group-hover:rotate-12 transition-transform duration-300"
                          size={24}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Community Links */}
            <div className="mt-12">
              {/* عنوان القسم */}
              <div className="text-center mb-10">
                <h3
                  className={`text-2xl md:text-3xl font-bold ${theme.textPrimary} mb-2`}
                >
                  انضم إلى مجتمعنا
                </h3>
                <p className={`${theme.textSecondary} text-lg`}>
                  تواصل معنا عبر منصاتنا المختلفة
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "الصفحة الرسمية",
                    subtitle: "آخر الأخبار والتحديثات",
                    url: "https://www.facebook.com/share/1E4mstT7Vg/",
                    icon: Facebook,
                    color: "from-blue-600 to-blue-700",
                    bgColor: "bg-blue-500/10",
                    iconColor: "text-blue-600",
                    followers: "50K+",
                  },
                  {
                    title: "صفحة المشتركين",
                    subtitle: "مجتمع المستخدمين النشط",
                    url: "https://www.facebook.com/share/16pyP7DwtY/",
                    icon: Users,
                    color: "from-sky-500 to-blue-600",
                    bgColor: "bg-sky-500/10",
                    iconColor: "text-blue-500",
                    followers: "30K+",
                  },
                  {
                    title: "مجموعة المشتركين",
                    subtitle: "نقاشات ودعم مباشر",
                    url: "https://www.facebook.com/share/g/1RYyyxu6Vt/",
                    icon: MessageCircle,
                    color: "from-purple-600 to-pink-600",
                    bgColor: "bg-purple-500/10",
                    iconColor: "text-purple-600",
                    followers: "25K+",
                  },
                  {
                    title: "قناة يوتيوب",
                    subtitle: "شروحات وفيديوهات تعليمية",
                    url: "https://youtube.com/@clickoneapp?si=w_V_FMjnfTlUqE94",
                    icon: Youtube,
                    color: "from-red-600 to-pink-600",
                    bgColor: "bg-red-500/10",
                    iconColor: "text-red-600",
                    followers: "15K+",
                  },
                ].map((link, index) => {
                  const IconComponent = link.icon;

                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative ${
                        theme.cardBg
                      } backdrop-blur-xl rounded-2xl p-6 border border-white/10 
          hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2
          overflow-hidden ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      {/* خلفية متحركة */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      {/* محتوى الكارد */}
                      <div className="relative z-10">
                        {/* الأيقونة */}
                        <div
                          className={`${link.bgColor} rounded-2xl p-4 inline-flex mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent
                            className={`${link.iconColor} group-hover:animate-pulse`}
                            size={32}
                          />
                        </div>

                        {/* العنوان والوصف */}
                        <h4
                          className={`${theme.textPrimary} font-bold text-xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r ${link.color} group-hover:bg-clip-text transition-all duration-300`}
                        >
                          {link.title}
                        </h4>
                        <p className={`${theme.textSecondary} text-sm mb-4`}>
                          {link.subtitle}
                        </p>

                        {/* عدد المتابعين */}
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-sm font-semibold bg-gradient-to-r ${link.color} bg-clip-text text-transparent`}
                          >
                            {link.followers}
                          </span>
                          <ExternalLink
                            className="text-gray-400 group-hover:text-white group-hover:rotate-12 transition-all duration-300"
                            size={18}
                          />
                        </div>
                      </div>

                      {/* تأثير الموجة عند الهوفر */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div
                          className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r ${link.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-1000 group-hover:scale-150`}
                        />
                        <div
                          className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r ${link.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-1000 group-hover:scale-150`}
                        />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How to Start Section */}
        <section
          className={`py-16 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-50"
          } relative overflow-hidden`}
        >
          {/* خلفية متحركة */}
          <div className="absolute inset-0">
            <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-6xl font-bold  text-purple-600 to-pink-600 mb-6 animate-gradient">
                خطوات الاشتراك وتفعيل الحساب
              </h2>
              <p className={`${theme.textSecondary} text-xl md:text-2xl`}>
                ابدأ رحلتك معنا في{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  4 خطوات بسيطة
                </span>
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-700 hover:scale-105 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative group h-full">
                    {/* خلفية متوهجة */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition duration-500"></div>

                    <div
                      className={`relative ${theme.cardBg} backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full overflow-hidden`}
                    >
                      {/* رقم الخطوة */}
                      <div className="relative mb-6">
                        <div className="w-20 h-20 mx-auto relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                          <div className="relative w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center transform group-hover:rotate-360 transition-transform duration-700">
                            <span className="text-white font-bold text-3xl">
                              {step.number}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* محتوى الخطوة */}
                      <div className="text-center relative z-10">
                        <h3
                          className={`text-2xl font-bold ${theme.textPrimary} mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300`}
                        >
                          {step.title}
                        </h3>
                        <p className={`${theme.textSecondary} leading-relaxed`}>
                          {step.description}
                        </p>
                      </div>

                      {/* تأثير decorative */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Methods */}
            <div className={`mt-16 relative`}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>

              <div
                className={`relative ${theme.cardBg} backdrop-blur-xl rounded-3xl p-10 border border-white/10 overflow-hidden`}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    طرق الدفع المتاحة
                  </span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: "البنك الإسلامي الأردني",
                      details: "الاسم المستعار: ClickOne",
                      icon: "🏦",
                      color: "from-green-500 to-emerald-600",
                    },
                    {
                      name: "PayPal",
                      details: "دفع آمن عالمي",
                      icon: "💳",
                      color: "from-blue-500 to-indigo-600",
                    },
                    {
                      name: "Zain Cash",
                      details: "الاسم المستعار: Clkone",
                      icon: "📱",
                      color: "from-purple-500 to-pink-600",
                    },
                  ].map((method, index) => (
                    <div
                      key={index}
                      className={`group transform transition-all duration-500 hover:scale-105 ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${(index + 4) * 150}ms` }}
                    >
                      <div
                        className={`relative ${theme.cardBg} rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden`}
                      >
                        {/* أيقونة الدفع */}
                        <div className="text-center mb-4">
                          <span className="text-5xl">{method.icon}</span>
                        </div>

                        {/* اسم طريقة الدفع */}
                        <h4
                          className={`font-bold text-xl ${theme.textPrimary} mb-2 text-center group-hover:text-transparent group-hover:bg-gradient-to-r ${method.color} group-hover:bg-clip-text transition-all duration-300`}
                        >
                          {method.name}
                        </h4>

                        {/* التفاصيل */}
                        <p className={`${theme.textMuted} text-center`}>
                          {method.details}
                        </p>

                        {/* خلفية decorative */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Points System */}
        <section className="py-16 relative overflow-hidden">
          {/* خلفية متحركة */}
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* عنوان القسم */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
                نظام المكافآت والنقاط
              </h2>
              <p className={`${theme.textSecondary} text-xl`}>
                احصل على نقاط واستبدلها بمنتجات أو نقود
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Gift,
                  title: "نظام النقاط",
                  description: "كل 1000 نقطة = 1 دينار أردني",
                  details: "تستخدم النقاط للشراء من المتجر أو للاستبدال النقدي",
                  emoji: "🎁",
                  color: "from-yellow-500 to-orange-500",
                  bgGradient: "from-yellow-500/20 to-orange-500/20",
                },
                {
                  icon: Users,
                  title: "دعوة الأصدقاء",
                  description: "1000 نقطة عن كل صديق",
                  details: "دع صديقًا يشترك فعليًا واحصل على النقاط",
                  emoji: "👥",
                  color: "from-blue-500 to-cyan-500",
                  bgGradient: "from-blue-500/20 to-cyan-500/20",
                },
                {
                  icon: ShoppingBag,
                  title: "ClickShop",
                  description: "تسوق بالنقاط",
                  details: "منتجات أصلية + طلبات من Temu و SHEIN",
                  emoji: "🛍️",
                  color: "from-purple-500 to-pink-500",
                  bgGradient: "from-purple-500/20 to-pink-500/20",
                },
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`transform transition-all duration-700 hover:scale-105 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative group h-full">
                      {/* خلفية متوهجة */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition duration-500`}
                      ></div>

                      <div
                        className={`relative ${theme.cardBg} backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full overflow-hidden`}
                      >
                        {/* خلفية gradient خفيفة */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-50`}
                        ></div>

                        <div className="relative z-10 text-center">
                          {/* الأيقونة والإيموجي في دائرة واحدة */}
                          <div className="relative mb-6 inline-block">
                            <div
                              className={`relative w-24 h-24 mx-auto bg-gradient-to-r ${item.color} rounded-full p-[2px] group-hover:scale-110 transition-transform duration-300`}
                            >
                              <div
                                className={`w-full h-full bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm rounded-full flex items-center justify-center`}
                              >
                                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                                  {item.emoji}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* العنوان */}
                          <h3
                            className={`text-2xl font-bold ${theme.textPrimary} mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r ${item.color} group-hover:bg-clip-text transition-all duration-300`}
                          >
                            {item.title}
                          </h3>

                          {/* الوصف الرئيسي */}
                          <p
                            className={`text-lg font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3`}
                          >
                            {item.description}
                          </p>

                          {/* التفاصيل */}
                          <p
                            className={`${theme.textMuted} text-sm leading-relaxed`}
                          >
                            {item.details}
                          </p>
                        </div>

                        {/* تأثير decorative */}
                        <div
                          className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl ${item.color} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Activity & Distribution */}
        <section
          className={`py-16 ${
            isDarkMode ? "bg-gray-900" : "bg-blue-50"
          } relative overflow-hidden`}
        >
          {/* خلفية متحركة */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div
              className={`relative ${
                theme.cardBg
              } backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 max-w-4xl mx-auto transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } shadow-2xl hover:shadow-3xl overflow-hidden`}
            >
              {/* خلفية gradient متحركة للكارد الرئيسي */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-50"></div>

              {/* عنوان القسم */}
              <div className="relative z-10 text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-500 mb-4 animate-gradient">
                  النشاط والتوزيع
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
              </div>

              {/* الكاردات الرئيسية */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* كارد الحساب النشط */}
                <div
                  className={`group relative transform transition-all duration-700 hover:scale-105 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition duration-500"></div>

                  <div
                    className={`relative ${theme.cardBg} backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full overflow-hidden`}
                  >
                    {/* خلفية gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-50"></div>

                    <div className="relative z-10">
                      {/* رأس الكارد مع الأيقونة */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-40"></div>
                          <div className="relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full p-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                            <TrendingUp className="text-green-500" size={32} />
                          </div>
                        </div>
                        <h3
                          className={`text-2xl font-bold ${theme.textPrimary} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-emerald-500 group-hover:bg-clip-text transition-all duration-300`}
                        >
                          الحساب النشط
                        </h3>
                      </div>

                      {/* المحتوى */}
                      <p
                        className={`${theme.textSecondary} text-lg leading-relaxed`}
                      >
                        يعتبر الحساب نشطًا عند مشاهدة
                        <span className="inline-block mx-2 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full">
                          <span className="font-bold text-green-500">
                            10 إعلانات
                          </span>
                        </span>
                        يوميًا
                      </p>

                      {/* مؤشر النشاط */}
                      <div className="mt-4 flex items-center gap-2">
                        <div className="flex gap-1">
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-6 bg-gradient-to-t from-green-500 to-emerald-500 rounded-full opacity-80"
                            ></div>
                          ))}
                        </div>
                        <span className="text-sm text-green-500 font-medium">
                          نشط
                        </span>
                      </div>
                    </div>

                    {/* تأثير ديكوري */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-green-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* كارد مواعيد التوزيع */}
                <div
                  className={`group relative transform transition-all duration-700 hover:scale-105 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: "450ms" }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition duration-500"></div>

                  <div
                    className={`relative ${theme.cardBg} backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full overflow-hidden`}
                  >
                    {/* خلفية gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-50"></div>

                    <div className="relative z-10">
                      {/* رأس الكارد مع الأيقونة */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-40"></div>
                          <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full p-4 backdrop-blur-sm">
                            <Clock
                              className="text-blue-500 group-hover:animate-spin-slow"
                              size={32}
                            />
                          </div>
                        </div>
                        <h3
                          className={`text-2xl font-bold ${theme.textPrimary} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300`}
                        >
                          مواعيد التوزيع
                        </h3>
                      </div>

                      {/* المحتوى */}
                      <ul className={`${theme.textSecondary} space-y-4`}>
                        <li className="flex items-start gap-3 group/item">
                          <div className="mt-1 p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg group-hover/item:scale-110 transition-transform">
                            <span className="text-blue-500 text-xl">⏰</span>
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-blue-500 text-lg">
                              توزيع يومي
                            </span>
                            <div className="mt-1 px-3 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full inline-block">
                              <span className="text-sm">
                                الساعة 12:00 منتصف الليل
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 group/item">
                          <div className="mt-1 p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg group-hover/item:scale-110 transition-transform">
                            <span className="text-blue-500 text-xl">📅</span>
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-blue-500 text-lg">
                              توزيع شهري
                            </span>
                            <div className="mt-1 px-3 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full inline-block">
                              <span className="text-sm">آخر يوم من الشهر</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* تأثير ديكوري */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* كارد الاستبدال الشهري */}
              <div
                className={`relative z-10 group transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition duration-500"></div>

                <div
                  className={`relative ${theme.cardBg} backdrop-blur-xl rounded-2xl p-8 border border-white/10 overflow-hidden`}
                >
                  {/* خلفية gradient متحركة */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 opacity-50"></div>

                  <div className="relative z-10">
                    {/* رأس الكارد */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
                          <div className="relative bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full p-5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                            <DollarSign className="text-yellow-500" size={36} />
                          </div>
                        </div>
                        <h3
                          className={`text-2xl font-bold ${theme.textPrimary} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300`}
                        >
                          الاستبدال الشهري
                        </h3>
                      </div>

                      {/* بادج الحالة */}
                      <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full animate-pulse">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-semibold text-green-500">
                          متاح الآن
                        </span>
                      </div>
                    </div>

                    {/* المحتوى */}
                    <p
                      className={`${theme.textSecondary} text-lg leading-relaxed mb-4`}
                    >
                      الاستبدال النقدي متاح
                      <span className="inline-block mx-2 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full">
                        <span className="font-bold text-yellow-500">
                          مرة واحدة شهريًا
                        </span>
                      </span>
                      في الأسبوع الأول من كل شهر عبر التطبيق
                    </p>

                    {/* معلومات إضافية */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="text-center p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl group/card hover:scale-105 transition-transform">
                        <span className="text-3xl mb-2 block">💰</span>
                        <p className="text-sm font-medium text-yellow-500">
                          حد أدنى للسحب
                        </p>
                        <p className={`text-lg font-bold ${theme.textPrimary}`}>
                          5 دينار
                        </p>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl group/card hover:scale-105 transition-transform">
                        <span className="text-3xl mb-2 block">📱</span>
                        <p className="text-sm font-medium text-yellow-500">
                          طريقة السحب
                        </p>
                        <p className={`text-lg font-bold ${theme.textPrimary}`}>
                          عبر التطبيق
                        </p>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl group/card hover:scale-105 transition-transform">
                        <span className="text-3xl mb-2 block">⏱️</span>
                        <p className="text-sm font-medium text-yellow-500">
                          وقت المعالجة
                        </p>
                        <p className={`text-lg font-bold ${theme.textPrimary}`}>
                          24-72 ساعة
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* تأثيرات ديكورية */}
                  <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* شريط معلومات متحرك */}
            <div className="mt-8 relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
              <div
                className={`relative ${theme.cardBg} backdrop-blur-xl border border-white/10 p-4`}
              >
                <div className="flex items-start justify-start gap-8 animate-marquee">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    <span className={`${theme.textSecondary} font-medium`}>
                      حافظ على نشاط حسابك يومياً
                    </span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⏰</span>
                    <span className={`${theme.textSecondary} font-medium`}>
                      التوزيع اليومي في منتصف الليل
                    </span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💸</span>
                    <span className={`${theme.textSecondary} font-medium`}>
                      استبدل نقاطك في بداية كل شهر
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exchange & Shop Section */}
        <section className="py-20 relative overflow-hidden">
          {/* خلفية متحركة */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* عنوان القسم الرئيسي */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-blue-500 mb-4 animate-gradient">
                المزايا الحصرية
              </h2>
              <p className={`${theme.textSecondary} text-xl`}>
                استفد من نقاطك بطرق متعددة ومربحة
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Grid of Features */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* الاستبدال الشهري */}
              <div
                className={`group transform transition-all duration-700 hover:-translate-y-2 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="relative h-full">
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                  <div
                    className={`relative ${theme.cardBg} backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full overflow-hidden`}
                  >
                    {/* رقم القسم */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      10
                    </div>

                    {/* خلفية decorative */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-50"></div>

                    <div className="relative z-10">
                      {/* الأيقونة الرئيسية */}
                      <div className="mb-6">
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
                          <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <DollarSign className="text-yellow-500" size={40} />
                          </div>
                        </div>
                      </div>

                      {/* العنوان */}
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-4">
                        الاستبدال الشهري
                      </h3>

                      {/* المحتوى */}
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg">
                            <Calendar className="text-yellow-500" size={16} />
                          </div>
                          <p className={`${theme.textSecondary}`}>
                            الاستبدال النقدي{" "}
                            <span className="font-bold text-yellow-500">
                              مرة واحدة شهريًا
                            </span>
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg">
                            <Clock className="text-yellow-500" size={16} />
                          </div>
                          <p className={`${theme.textSecondary}`}>
                            باب الاستبدال يُفتح في{" "}
                            <span className="font-bold text-yellow-500">
                              الأسبوع الأول
                            </span>{" "}
                            من كل شهر
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg">
                            <Smartphone className="text-yellow-500" size={16} />
                          </div>
                          <p className={`${theme.textSecondary}`}>
                            التقديم عبر التطبيق ضمن المدة المحددة
                          </p>
                        </li>
                      </ul>

                      {/* بادج الحالة */}
                      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-green-500">
                          متاح الآن للاستبدال
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ClickShop */}
              <div
                className={`group transform transition-all duration-700 hover:-translate-y-2 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "450ms" }}
              >
                <div className="relative h-full">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                  <div
                    className={`relative ${theme.cardBg} backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full overflow-hidden`}
                  >
                    {/* رقم القسم */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      11
                    </div>

                    {/* خلفية decorative */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-50"></div>

                    <div className="relative z-10">
                      {/* الأيقونة الرئيسية */}
                      <div className="mb-6">
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
                          <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <ShoppingBag
                              className="text-purple-500"
                              size={40}
                            />
                          </div>
                        </div>
                      </div>

                      {/* العنوان */}
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                        ClickShop
                      </h3>
                      <p className={`${theme.textSecondary} text-sm mb-4`}>
                        المتجر الإلكتروني
                      </p>

                      {/* المحتوى */}
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                            <Gift className="text-purple-500" size={16} />
                          </div>
                          <p className={`${theme.textSecondary}`}>
                            منتجات أصلية + طلبات من{" "}
                            <span className="font-bold text-purple-500">
                              Temu و SHEIN
                            </span>
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                            <DollarSign className="text-purple-500" size={16} />
                          </div>
                          <p className={`${theme.textSecondary}`}>
                            الشراء بالنقاط أو بالدفع المباشر
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                            <TrendingUp className="text-purple-500" size={16} />
                          </div>
                          <p className={`${theme.textSecondary}`}>
                            أرباح الطلبات توزَّع شهريًا
                          </p>
                        </li>
                      </ul>

                      {/* شعارات الشركات */}
                      <div className="mt-6 flex items-center gap-4 justify-center">
                        <div className="px-3 py-1 bg-white/10 rounded-lg text-xs font-medium">
                          TEMU
                        </div>
                        <div className="px-3 py-1 bg-white/10 rounded-lg text-xs font-medium">
                          SHEIN
                        </div>
                        <div className="px-3 py-1 bg-white/10 rounded-lg text-xs font-medium">
                          +المزيد
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* المنطقة الحرة */}
              <div
                className={`group transform transition-all duration-700 hover:-translate-y-2 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <div className="relative h-full">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                  <div
                    className={`relative ${theme.cardBg} backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full overflow-hidden`}
                  >
                    {/* رقم القسم */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      12
                    </div>

                    {/* خلفية decorative */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-50"></div>

                    <div className="relative z-10">
                      {/* الأيقونة الرئيسية */}
                      <div className="mb-6">
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
                          <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Globe className="text-blue-500" size={40} />
                          </div>
                        </div>
                      </div>

                      {/* العنوان */}
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                        المنطقة الحرة
                      </h3>

                      {/* المحتوى */}
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg">
                            <Shield className="text-blue-500" size={16} />
                          </div>
                          <p className={`${theme.textSecondary}`}>
                            قسم خاص لمنتجات وخدمات الإدارة وشركائها
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 p-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg">
                            <Lock className="text-blue-500" size={16} />
                          </div>
                          <p className={`${theme.textSecondary}`}>
                            عرض المنتجات{" "}
                            <span className="font-bold text-blue-500">
                              للمشتركين فقط
                            </span>
                          </p>
                        </li>
                      </ul>

                      {/* بادج VIP */}
                      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-500/20 to-yellow-500/20 rounded-full border border-yellow-500/30">
                        <Star className="text-yellow-500" size={16} />
                        <span className="text-sm font-medium text-yellow-500">
                          منطقة VIP
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* رسالة تحفيزية في الأسفل */}
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-yellow-500/10 rounded-3xl blur-2xl"></div>
              <div
                className={`relative ${theme.cardBg} backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden`}
              >
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-4">
                    كل شهر فرصة جديدة للربح والتسوق
                  </h3>
                  <p className={`${theme.textSecondary} text-lg mb-6`}>
                    استفد من نقاطك بطرق متعددة واستمتع بمزايا حصرية
                  </p>

                  {/* إحصائيات سريعة */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="group">
                      <div
                        className={`${theme.cardBg} rounded-2xl p-6 border border-white/10 hover:border-yellow-500/30 transition-all duration-300`}
                      >
                        <div className="text-3xl font-bold text-yellow-500 mb-2">
                          30+
                        </div>
                        <p className={`${theme.textSecondary} text-sm`}>
                          يوم للاستبدال الشهري
                        </p>
                      </div>
                    </div>
                    <div className="group">
                      <div
                        className={`${theme.cardBg} rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300`}
                      >
                        <div className="text-3xl font-bold text-purple-500 mb-2">
                          1000+
                        </div>
                        <p className={`${theme.textSecondary} text-sm`}>
                          منتج في المتجر
                        </p>
                      </div>
                    </div>
                    <div className="group">
                      <div
                        className={`${theme.cardBg} rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300`}
                      >
                        <div className="text-3xl font-bold text-blue-500 mb-2">
                          VIP
                        </div>
                        <p className={`${theme.textSecondary} text-sm`}>
                          منطقة حصرية
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Features Timeline */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-4">
                رحلتك مع Click One
              </h3>
              <p className={`${theme.textSecondary} text-base sm:text-lg px-4`}>
                خطوات بسيطة لتحقيق أقصى استفادة
              </p>
            </div>

            {/* Timeline - Mobile & Desktop */}
            <div className="relative max-w-4xl mx-auto">
              {/* الخط الرئيسي - للشاشات الكبيرة */}
              <div className="hidden md:block absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

              {/* الخط الرئيسي - للموبايل */}
              <div className="md:hidden absolute right-8 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

              {/* النقاط */}
              <div className="space-y-8 md:space-y-12">
                {[
                  {
                    title: "اجمع النقاط",
                    description: "شاهد الإعلانات واحصل على نقاط يومية",
                    icon: "🎯",
                    color: "from-blue-500 to-cyan-500",
                    side: "right",
                  },
                  {
                    title: "تسوق بذكاء",
                    description:
                      "استخدم نقاطك في ClickShop للحصول على منتجات رائعة",
                    icon: "🛍️",
                    color: "from-purple-500 to-pink-500",
                    side: "left",
                  },
                  {
                    title: "استبدل نقودك",
                    description: "حول نقاطك إلى أموال حقيقية كل شهر",
                    icon: "💰",
                    color: "from-yellow-500 to-orange-500",
                    side: "right",
                  },
                  {
                    title: "استمتع بالمزايا",
                    description: "ادخل المنطقة الحرة واستفد من العروض الحصرية",
                    icon: "⭐",
                    color: "from-pink-500 to-red-500",
                    side: "left",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative">
                    {/* Desktop Layout */}
                    <div
                      className={`hidden md:flex items-center ${
                        step.side === "right" ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`w-1/2 ${
                          step.side === "right"
                            ? "pr-12 text-left"
                            : "pl-12 text-right"
                        } transform transition-all duration-700 hover:scale-105 ${
                          isVisible
                            ? "translate-x-0 opacity-100"
                            : step.side === "right"
                            ? "-translate-x-10 opacity-0"
                            : "translate-x-10 opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <div
                          className={`${theme.cardBg} backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300`}
                        >
                          <div
                            className={`flex items-center gap-4 ${
                              step.side === "left" ? "flex-row-reverse" : ""
                            }`}
                          >
                            <div
                              className={`p-3 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-20 flex-shrink-0`}
                            >
                              <span className="text-3xl">{step.icon}</span>
                            </div>
                            <div
                              className={`flex-1 ${
                                step.side === "left" ? "text-right" : ""
                              }`}
                            >
                              <h4
                                className={`text-xl font-bold ${theme.textPrimary} mb-2`}
                              >
                                {step.title}
                              </h4>
                              <p className={`${theme.textSecondary} text-sm`}>
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* نقطة على الخط - Desktop */}
                      <div className="absolute right-1/2 transform translate-x-1/2">
                        <div
                          className={`relative w-8 h-8 bg-gradient-to-br ${step.color} rounded-full animate-pulse`}
                        >
                          <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full"></div>
                          <div
                            className={`absolute inset-2 bg-gradient-to-br ${step.color} rounded-full`}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div
                      className={`md:hidden flex items-start gap-4 ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-10 opacity-0"
                      } transform transition-all duration-700`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      {/* نقطة على الخط - Mobile */}
                      <div className="relative flex-shrink-0 mt-2">
                        <div
                          className={`relative w-6 h-6 bg-gradient-to-br ${step.color} rounded-full animate-pulse`}
                        >
                          <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full"></div>
                          <div
                            className={`absolute inset-2 bg-gradient-to-br ${step.color} rounded-full`}
                          ></div>
                        </div>
                        {/* خط واصل */}
                        {index < 3 && (
                          <div className="absolute top-8 right-2.5 w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700"></div>
                        )}
                      </div>

                      {/* محتوى الخطوة - Mobile */}
                      <div className="flex-1 mr-4">
                        <div
                          className={`${theme.cardBg} backdrop-blur-xl rounded-xl p-4 border border-white/10`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-20 flex-shrink-0`}
                            >
                              <span className="text-2xl">{step.icon}</span>
                            </div>
                            <div className="flex-1">
                              <h4
                                className={`text-lg font-bold ${theme.textPrimary} mb-1`}
                              >
                                {step.title}
                              </h4>
                              <p
                                className={`${theme.textSecondary} text-xs sm:text-sm`}
                              >
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 md:mt-16 px-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group relative inline-flex items-center gap-3 w-full sm:w-auto"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
                  <span className="text-base sm:text-lg">ابدأ رحلتك الآن</span>
                  <span className="mr-2 text-lg">←</span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 relative overflow-hidden">
          {/* خلفية متحركة */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* عنوان القسم */}
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6 animate-gradient">
                الأسئلة الشائعة
              </h2>
              <p className={`${theme.textSecondary} text-xl`}>
                إجابات على أكثر الأسئلة شيوعاً
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* FAQ Items */}
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "هل الأرباح تعتمد على النشاط؟",
                  answer:
                    "الأرباح من مصادر حقيقية، وتُوزَّع على الحسابات النشطة فقط (10 إعلانات يوميًا)",
                  icon: "💰",
                  color: "from-green-500 to-emerald-500",
                  bgColor: "from-green-500/10 to-emerald-500/10",
                },
                {
                  question: "هل أستطيع فتح أكثر من حساب؟",
                  answer:
                    "نعم، من خلال التواصل مع الدعم الفني في التطبيق/راسلنا تتم إضافة الحسابات على نفس رقم موبايلك المسجل",
                  icon: "👥",
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "from-blue-500/10 to-cyan-500/10",
                },
                {
                  question: "هل توجد إحالات هرمية؟",
                  answer: "لا. يوجد فقط دعوة صديق بنقاط واضحة وشرعية",
                  icon: "🔗",
                  color: "from-purple-500 to-pink-500",
                  bgColor: "from-purple-500/10 to-pink-500/10",
                },
                {
                  question: "كيف أستبدل النقاط نقدًا؟",
                  answer: "عبر طلب داخل التطبيق خلال الأسبوع الأول من كل شهر",
                  icon: "💸",
                  color: "from-yellow-500 to-orange-500",
                  bgColor: "from-yellow-500/10 to-orange-500/10",
                },
                {
                  question: "هل التطبيق موثوق ومسجّل؟",
                  answer:
                    "نعم، مسجّل في الولايات المتحدة (Wyoming)، ويعمل في الأردن عبر وكيل معتمد",
                  icon: "✅",
                  color: "from-teal-500 to-green-500",
                  bgColor: "from-teal-500/10 to-green-500/10",
                },
              ].map((faq, index) => {
                const [isOpen, setIsOpen] = useState(false);

                return (
                  <div
                    key={index}
                    className={`transform transition-all duration-700 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="group relative">
                      {/* خلفية متوهجة */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${faq.color} rounded-2xl blur-sm opacity-0 group-hover:opacity-30 transition duration-500`}
                      ></div>

                      <div
                        className={`relative ${
                          theme.cardBg
                        } backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 ${
                          isOpen ? "scale-105 shadow-2xl" : "hover:scale-102"
                        }`}
                      >
                        {/* خلفية gradient خفيفة */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${faq.bgColor} opacity-50`}
                        ></div>

                        {/* محتوى السؤال */}
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className="relative z-10 w-full p-6 text-right"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 flex-1">
                              {/* الأيقونة */}
                              <div
                                className={`p-3 rounded-xl bg-gradient-to-br ${faq.bgColor} backdrop-blur-sm`}
                              >
                                <span className="text-3xl">{faq.icon}</span>
                              </div>

                              {/* السؤال */}
                              <h3
                                className={`text-xl font-bold ${theme.textPrimary} group-hover:text-transparent group-hover:bg-gradient-to-r ${faq.color} group-hover:bg-clip-text transition-all duration-300 flex-1 text-right`}
                              >
                                {faq.question}
                              </h3>
                            </div>

                            {/* زر التوسع */}
                            <div
                              className={`mr-4 transform transition-transform duration-500 ${
                                isOpen ? "rotate-90" : ""
                              }`}
                            >
                              <ChevronRight
                                className={`text-2xl bg-gradient-to-r ${faq.color} bg-clip-text text-transparent`}
                                size={24}
                              />
                            </div>
                          </div>
                        </button>

                        {/* محتوى الإجابة */}
                        <div
                          className={`relative z-10 overflow-hidden transition-all duration-500 ${
                            isOpen
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6">
                            <div
                              className={`pr-16 pt-2 ${theme.textSecondary} text-lg leading-relaxed`}
                            >
                              {faq.answer}
                            </div>

                            {/* معلومات إضافية */}
                            {index === 0 && isOpen && (
                              <div className="mt-4 flex items-center gap-2 pr-16">
                                <div className="flex gap-1">
                                  {[...Array(10)].map((_, i) => (
                                    <div
                                      key={i}
                                      className="w-1.5 h-4 bg-gradient-to-t from-green-500 to-emerald-500 rounded-full"
                                    ></div>
                                  ))}
                                </div>
                                <span className="text-sm text-green-500 font-medium">
                                  10 إعلانات يومياً
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* رسالة إضافية */}
            <div className="mt-12 text-center">
              <div
                className={`inline-flex items-center gap-3 px-6 py-3 ${theme.cardBg} backdrop-blur-xl rounded-full border border-white/10`}
              >
                <HelpCircle className="text-blue-500" size={24} />
                <span className={`${theme.textSecondary} font-medium`}>
                  لديك سؤال آخر؟
                  <a
                    href="#contact"
                    className="text-blue-500 hover:text-blue-400 mr-2 font-bold transition-colors"
                  >
                    تواصل معنا
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section
          className={`py-16 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-50"
          } relative overflow-hidden`}
        >
          {/* خلفية متحركة */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div
              className={`relative ${
                theme.cardBg
              } backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } shadow-2xl hover:shadow-3xl overflow-hidden`}
            >
              {/* خلفية gradient متحركة */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-green-500/5 to-purple-500/5 animate-gradient-xy"></div>

              {/* عنوان القسم */}
              <div className="relative z-10 text-center mb-12">
                <div className="relative inline-block">
                  <h2 className="text-4xl md:text-5xl font-bold text-purple-600 animate-gradient">
                    الدعم الفني
                  </h2>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-full transform scale-x-0 animate-scale-x"></div>
                </div>

                <p
                  className={`${theme.textSecondary} text-xl mt-6 animate-fade-in`}
                >
                  نحن هنا لمساعدتك
                  <span className="inline-block mx-2 text-2xl animate-wave">
                    👋
                  </span>
                  متواجدون على مدار الساعة
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                  {
                    name: "داخل التطبيق",
                    icon: MessageCircle,
                    color: "from-blue-500 to-cyan-500",
                    bgColor: "from-blue-500/10 to-cyan-500/10",
                    description: "الرد الفوري",
                    emoji: "💬",
                  },
                  {
                    name: "فيسبوك",
                    icon: Facebook,
                    color: "from-blue-600 to-blue-700",
                    bgColor: "from-blue-600/10 to-blue-700/10",
                    description: "متابعة مستمرة",
                    emoji: "👥",
                  },
                  {
                    name: "واتساب",
                    icon: MessageCircle,
                    color: "from-green-500 to-emerald-500",
                    bgColor: "from-green-500/10 to-emerald-500/10",
                    description: "دعم مباشر",
                    emoji: "📱",
                  },
                ].map((channel, index) => (
                  <div
                    key={index}
                    className={`group transform transition-all duration-700 hover:scale-105 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative h-full">
                      {/* توهج خلفي */}
                      <div
                        className={`absolute -inset-2 bg-gradient-to-r ${channel.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                      ></div>

                      <div
                        className={`relative ${theme.cardBg} backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full overflow-hidden group-hover:border-white/30 transition-all duration-300`}
                      >
                        {/* خلفية gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${channel.bgColor} opacity-50`}
                        ></div>

                        <div className="relative z-10 text-center">
                          {/* مربع الألوان مع الإيموجي */}
                          <div className="mb-6">
                            <div
                              className={`relative inline-block p-6 rounded-2xl bg-gradient-to-br ${channel.bgColor} backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}
                            >
                              <span className="text-5xl block">
                                {channel.emoji}
                              </span>
                            </div>
                          </div>

                          {/* اسم القناة */}
                          <h3
                            className={`text-xl font-bold ${theme.textPrimary} mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r ${channel.color} group-hover:bg-clip-text transition-all duration-300`}
                          >
                            {channel.name}
                          </h3>

                          {/* الوصف */}
                          <p className={`${theme.textSecondary} text-sm`}>
                            {channel.description}
                          </p>

                          {/* مؤشر النشاط */}
                          <div className="mt-4 flex items-center justify-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs text-green-500 font-medium">
                              متاح الآن
                            </span>
                          </div>
                        </div>

                        {/* تأثير decorative */}
                        <div
                          className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl ${channel.color} rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Contact Number */}
              <div className="relative z-10 text-center mt-12">
                {/* عنوان فرعي */}
                <p className={`${theme.textSecondary} mb-6 text-lg`}>
                  أو تواصل معنا مباشرة على
                </p>

                {/* رقم الهاتف */}
                <div className="relative inline-block group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>

                  <div
                    className={`relative ${theme.cardBg} backdrop-blur-xl rounded-full px-8 py-5 border border-white/20 group-hover:border-green-500/50 transition-all duration-300 shadow-xl`}
                  >
                    <div className="flex items-center gap-4">
                      {/* أيقونة الهاتف المتحركة */}
                      <div className="relative">
                        <Phone
                          className="text-green-500 animate-ring"
                          size={28}
                        />
                        <div className="absolute -inset-2 bg-green-500 rounded-full blur-md opacity-30 animate-ping"></div>
                      </div>

                      {/* الرقم */}
                      <span
                        className={`text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent`}
                        dir="ltr"
                      >
                        +962782760772
                      </span>

                      {/* نص "اتصل الآن" */}
                      <span className="hidden sm:block px-4 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full">
                        <span className="text-sm font-medium text-green-500">
                          اتصل الآن
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* رسالة إضافية */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full">
                    <Zap className="text-blue-500" size={16} />
                    <span className={`${theme.textSecondary} text-sm`}>
                      رد سريع
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full">
                    <Clock className="text-green-500" size={16} />
                    <span className={`${theme.textSecondary} text-sm`}>
                      24 / 7 دعم
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full">
                    <Users className="text-purple-500" size={16} />
                    <span className={`${theme.textSecondary} text-sm`}>
                      فريق محترف
                    </span>
                  </div>
                </div>
              </div>

              {/* تأثيرات ديكورية */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-500/10 to-transparent rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 relative overflow-hidden">
          {/* خلفية متحركة مبهرة */}
          <div className="absolute inset-0">
            {/* دوائر متحركة */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/30 to-green-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          {/* نقاط متحركة في الخلفية */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div
              className={`text-center transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-95"
              }`}
            >
              {/* العنوان الرئيسي مع تأثيرات */}
              <div className="relative inline-block mb-8">
                {/* توهج خلفي للعنوان */}
                <div className="absolute -inset-4 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20 blur-2xl animate-pulse"></div>

                <h2 className="relative text-4xl md:text-6xl lg:text-7xl font-black">
                  <span className="block mb-2">
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 animate-gradient hover:animate-none transition-all">
                      ابدأ اليوم
                    </span>
                    <span className="inline-block mx-3 text-5xl md:text-7xl animate-bounce">
                      🚀
                    </span>
                  </span>
                  <span className="block text-3xl md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-slow">
                      5 دنانير فقط تفتح لك باب الربح الذكي
                    </span>
                  </span>
                </h2>
              </div>

              {/* النص الفرعي مع تأثيرات */}
              <div className="mb-12 relative">
                <p
                  className={`text-xl md:text-2xl ${theme.textSecondary} font-medium relative z-10`}
                >
                  <span
                    className="inline-block animate-fade-in"
                    style={{ animationDelay: "0.5s" }}
                  >
                    Click One
                  </span>
                  <span
                    className="inline-block mx-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 font-bold animate-fade-in"
                    style={{ animationDelay: "0.7s" }}
                  >
                    —
                  </span>
                  <span
                    className="inline-block animate-fade-in"
                    style={{ animationDelay: "0.9s" }}
                  >
                    استثمر، اربح، تسوّق بذكاء
                  </span>
                </p>

                {/* خط زخرفي */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-green-500"></div>
                  <Star
                    className="text-yellow-500 animate-spin"
                    size={20}
                    style={{ animationDuration: "3s" }}
                  />
                  <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-blue-500"></div>
                </div>
              </div>

              {/* أزرار التحميل */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* زر Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.abdsafyh.clickone.clickone&hl=en&gl=US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  {/* توهج خلفي */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>

                  <div className="relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-5 px-10 rounded-full transform group-hover:scale-105 transition-all duration-300 shadow-2xl">
                    {/* تأثير shine */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                    <div className="relative flex items-center justify-center gap-3">
                      <div className="relative">
                        <Smartphone className="animate-bounce" size={28} />
                        <div className="absolute -inset-1 bg-white/30 rounded-full blur-sm animate-ping"></div>
                      </div>
                      <span className="text-lg font-bold">
                        حمل من Google Play
                      </span>
                      <ArrowRight
                        className="group-hover:translate-x-2 transition-transform duration-300"
                        size={24}
                      />
                    </div>

                    {/* بادج "جديد" */}
                    {/* <div className="absolute -top-0 -right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce shadow-lg">
                      جديد
                    </div> */}
                  </div>
                </a>

                {/* زر App Store */}
                <a
                  href="https://apps.apple.com/us/app/click-one/id6747584660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  {/* توهج خلفي */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>

                  <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-5 px-10 rounded-full transform group-hover:scale-105 transition-all duration-300 shadow-2xl">
                    {/* تأثير shine */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                    <div className="relative flex items-center justify-center gap-3">
                      <div className="relative">
                        <Smartphone className="animate-bounce" size={28} />
                        <div className="absolute -inset-1 bg-white/30 rounded-full blur-sm animate-ping"></div>
                      </div>
                      <span className="text-lg font-bold">
                        حمل من App Store
                      </span>
                      <ArrowRight
                        className="group-hover:translate-x-2 transition-transform duration-300"
                        size={24}
                      />
                    </div>

                    {/* بادج iOS */}
                    {/* <div className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full animate-bounce shadow-lg">
                      iOS
                    </div> */}
                  </div>
                </a>
              </div>

              {/* رسائل تحفيزية */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                <div className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full backdrop-blur-sm border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                  <CheckCircle
                    className="text-green-500 group-hover:scale-110 transition-transform"
                    size={20}
                  />
                  <span className={`${theme.textSecondary} font-medium`}>
                    تطبيق موثق ومضمون
                  </span>
                </div>

                <div className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <Users
                    className="text-blue-500 group-hover:scale-110 transition-transform"
                    size={20}
                  />
                  <span className={`${theme.textSecondary} font-medium`}>
                    +50,000 مستخدم نشط
                  </span>
                </div>

                <div className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <Star
                    className="text-purple-500 group-hover:scale-110 transition-transform"
                    size={20}
                  />
                  <span className={`${theme.textSecondary} font-medium`}>
                    تقييم 5 من 5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`relative ${theme.headerBg} backdrop-blur-lg overflow-hidden`}
        >
          {/* خلفية متحركة */}
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          </div>

          {/* خط علوي متوهج */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

          <div className="relative z-10 container mx-auto px-4 py-16">
            {/* القسم العلوي */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* App Links */}
              <div className="group">
                <h3
                  className={`font-bold text-xl ${theme.textPrimary} mb-6 flex items-center gap-2`}
                >
                  <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
                  حمل التطبيق
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.abdsafyh.clickone.clickone&hl=en&gl=US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300"
                  >
                    <div className="p-2 bg-green-500/20 rounded-lg group-hover/link:scale-110 transition-transform">
                      <Smartphone size={20} className="text-green-500" />
                    </div>
                    <div className="flex-1">
                      <span
                        className={`${theme.textPrimary} font-medium group-hover/link:text-green-500 transition-colors`}
                      >
                        Google Play
                      </span>
                      <p className={`${theme.textMuted} text-xs`}>Android</p>
                    </div>
                    <ArrowRight
                      className="text-green-500 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all"
                      size={16}
                    />
                  </a>

                  <a
                    href="https://apps.apple.com/us/app/click-one/id6747584660"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300"
                  >
                    <div className="p-2 bg-blue-500/20 rounded-lg group-hover/link:scale-110 transition-transform">
                      <Smartphone size={20} className="text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <span
                        className={`${theme.textPrimary} font-medium group-hover/link:text-blue-500 transition-colors`}
                      >
                        App Store
                      </span>
                      <p className={`${theme.textMuted} text-xs`}>iOS</p>
                    </div>
                    <ArrowRight
                      className="text-blue-500 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all"
                      size={16}
                    />
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="group md:col-span-2">
                <h3
                  className={`font-bold text-xl ${theme.textPrimary} mb-6 flex items-center gap-2`}
                >
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  تابعنا
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      href: "https://www.facebook.com/share/1E4mstT7Vg/",
                      icon: Facebook,
                      text: "الصفحة الرسمية",
                      color: "blue",
                      count: "50K+",
                    },
                    {
                      href: "https://www.facebook.com/share/16pyP7DwtY/",
                      icon: Users,
                      text: "صفحة المشتركين",
                      color: "sky",
                      count: "30K+",
                    },
                    {
                      href: "https://www.facebook.com/share/g/1RYyyxu6Vt/",
                      icon: MessageCircle,
                      text: "مجموعة المشتركين",
                      color: "purple",
                      count: "25K+",
                    },
                    {
                      href: "https://youtube.com/@clickoneapp?si=w_V_FMjnfTlUqE94",
                      icon: Youtube,
                      text: "قناة يوتيوب",
                      color: "red",
                      count: "15K+",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/social flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-${social.color}-500/10 to-${social.color}-600/10 hover:from-${social.color}-500/20 hover:to-${social.color}-600/20 transition-all duration-300 hover:scale-105`}
                    >
                      <div
                        className={`p-2 bg-${social.color}-500/20 rounded-lg group-hover/social:rotate-12 transition-transform`}
                      >
                        <social.icon
                          size={20}
                          className={`text-${social.color}-500`}
                        />
                      </div>
                      <div className="flex-1">
                        <span
                          className={`${theme.textPrimary} text-sm font-medium group-hover/social:text-${social.color}-500 transition-colors`}
                        >
                          {social.text}
                        </span>
                        <p className={`${theme.textMuted} text-xs`}>
                          {social.count}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="group">
                <h3
                  className={`font-bold text-xl ${theme.textPrimary} mb-6 flex items-center gap-2`}
                >
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  الدعم الفني
                </h3>
                <div className="space-y-4">
                  {/* رقم الهاتف */}
                  <div
                    className={`relative ${theme.cardBg} backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300 group/phone`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Phone
                          size={24}
                          className="text-green-500 animate-ring"
                        />
                        <div className="absolute -inset-2 bg-green-500 rounded-full blur-md opacity-20 animate-ping"></div>
                      </div>
                      <div>
                        <p className="text-sm text-green-500 font-medium mb-1">
                          اتصل بنا
                        </p>
                        <span
                          dir="ltr"
                          className={`${theme.textPrimary} font-bold text-lg`}
                        >
                          +962782760772
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* معلومات الشركة */}
                  <div
                    className={`${theme.cardBg} backdrop-blur-sm rounded-xl p-4 border border-white/10`}
                  >
                    <div className="flex items-start gap-3">
                      <Award className="text-yellow-500 mt-1" size={20} />
                      <div>
                        <p className={`${theme.textPrimary} font-medium mb-1`}>
                          شركة بشرى الخير للتسويق الإلكتروني
                        </p>
                        <p className={`${theme.textMuted} text-sm`}>
                          الوكيل الحصري في الأردن
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* القسم السفلي */}
            <div
              className={`border-t ${
                isDarkMode ? "border-gray-700/50" : "border-gray-200/50"
              } pt-8`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                {/* حقوق الطبع */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-md opacity-30"></div>
                    <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-bold">
                      Click One
                    </div>
                  </div>
                  <div className={`${theme.textMuted}`}>
                    <p className="text-sm">© Click One App LLC</p>
                    <p className="text-xs">جميع الحقوق محفوظة 2024</p>
                  </div>
                </div>

                {/* Add Videos Button */}
                <button
                  onClick={() => setCurrentPage("admin-login")}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-4 py-2 font-semibold hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <Plus
                        className="group-hover:rotate-90 transition-transform duration-300 ml-2"
                        size={10}
                      />
                      <span>إضافة فيديوهات</span>
                      <Lock className="opacity-70" size={6} />
                    </div>
                  </div>
                </button>

                {/* شارات الثقة */}
                <div className="flex items-center gap-6">
                  {/* شارة التسجيل */}
                  <div className="group/badge flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full">
                    <Shield
                      className="text-yellow-500 group-hover/badge:rotate-12 transition-transform"
                      size={18}
                    />
                    <span className={`${theme.textMuted} text-sm font-medium`}>
                      مسجل رسمياً في Wyoming, USA
                    </span>
                  </div>

                  {/* شارة الأمان */}
                  <div className="group/badge flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full">
                    <CheckCircle
                      className="text-green-500 group-hover/badge:scale-110 transition-transform"
                      size={18}
                    />
                    <span className={`${theme.textMuted} text-sm font-medium`}>
                      موثق ومضمون
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* خط سفلي متوهج */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
        </footer>
      </div>
    </div>
  );
};

export default ClickOneLandingPage;
