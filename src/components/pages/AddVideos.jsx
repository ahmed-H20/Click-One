import React, { useState, useEffect } from "react";
import {
  Link as LinkIcon,
  Video,
  FileText,
  Save,
  Shield,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Loader,
  X,
  Info,
} from "lucide-react";
import { getTheme } from "../../config/theme";
import { videoService } from "../../services/videoService";

const AddVideos = ({ isDarkMode, setCurrentPage }) => {
  const theme = getTheme(isDarkMode);
  const [videos, setVideos] = useState([
    { link: "", name: "" },
    { link: "", name: "" },
    { link: "", name: "" },
    { link: "", name: "" },
    { link: "", name: "" },
    { link: "", name: "" },
  ]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingLatest, setIsLoadingLatest] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newVideos = [...videos];
    newVideos[index][name] = value;
    setVideos(newVideos);
  };

  // جلب آخر الفيديوهات المضافة
  const fetchLatestVideos = async () => {
    setIsLoadingLatest(true);
    setError("");
    
    try {
      const response = await videoService.getLastVideoCollection();
      
      if (response.success && response.data && response.data.videos) {
        const latestVideos = response.data.videos;
        
        // ملء الحقول بآخر الفيديوهات المضافة
        const updatedVideos = [...videos];
        latestVideos.forEach((video, index) => {
          if (index < 6) {
            updatedVideos[index] = {
              link: video.link || "",
              name: video.name || ""
            };
          }
        });
        
        // إذا كان عدد الفيديوهات أقل من 6، ملء الباقي بحقول فارغة
        for (let i = latestVideos.length; i < 6; i++) {
          updatedVideos[i] = { link: "", name: "" };
        }
        
        setVideos(updatedVideos);
        setSuccess("تم جلب آخر الفيديوهات بنجاح!");
      } else {
        setError("لا توجد فيديوهات مسجلة سابقاً");
      }
    } catch (err) {
      console.error("Error fetching latest videos:", err);
      setError("حدث خطأ في جلب الفيديوهات");
    } finally {
      setIsLoadingLatest(false);
      // إخفاء رسالة النجاح بعد 3 ثواني
      if (success) {
        setTimeout(() => setSuccess(""), 3000);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    // Filter out empty fields
    const validVideos = videos.filter(
      (video) => video.link.trim() !== "" && video.name.trim() !== ""
    );

    if (validVideos.length === 0) {
      setError("الرجاء إدخال رابط فيديو واسم واحد على الأقل.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await videoService.createVideoCollection(validVideos);

      if (response.success) {
        setSuccess("تم حفظ الفيديوهات بنجاح!");

        // مسح الحقول
        setVideos([
          { link: "", name: "" },
          { link: "", name: "" },
          { link: "", name: "" },
          { link: "", name: "" },
          { link: "", name: "" },
          { link: "", name: "" },
        ]);

        setTimeout(() => {
          setCurrentPage("clickone-landing");
        }, 1500);
      }
    } catch (err) {
      setError(err.message || "حدث خطأ أثناء حفظ البيانات.");
    } finally {
      setIsLoading(false);
    }
  };

  // دالة لمسح جميع الحقول
  const clearAllVideos = () => {
    setVideos([
      { link: "", name: "" },
      { link: "", name: "" },
      { link: "", name: "" },
      { link: "", name: "" },
      { link: "", name: "" },
      { link: "", name: "" },
    ]);
    setSuccess("تم مسح جميع الحقول");
    setTimeout(() => setSuccess(""), 2000);
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${theme.background}`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div
          className={`w-full max-w-4xl transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-10 opacity-0 scale-95"
          }`}
        >
          {/* Main Card */}
          <div
            className={`${
              theme.cardBg
            } backdrop-blur-lg rounded-3xl shadow-2xl p-8 border ${
              isDarkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-20 mb-4">
                <Shield className="text-white" size={40} />
              </div>
              <h1 className="text-3xl font-bold text-purple-600">
                إضافة لينكات الفيديوهات
              </h1>
              <p className={`${theme.textSecondary} mt-2`}>
                يمكنك إضافة حتى 6 فيديوهات دفعة واحدة
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={fetchLatestVideos}
                disabled={isLoadingLatest}
                className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  isDarkMode
                    ? "bg-blue-600/20 hover:bg-blue-600/30 text-blue-400"
                    : "bg-blue-50 hover:bg-blue-100 text-blue-600"
                } flex items-center justify-center gap-2`}
              >
                {isLoadingLatest ? (
                  <Loader className="animate-spin" size={18} />
                ) : (
                  <RefreshCw size={18} />
                )}
                <span>جلب آخر الفيديوهات المضافة</span>
              </button>
              
              <button
                onClick={clearAllVideos}
                className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-600/20 hover:bg-gray-600/30 text-gray-400"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                } flex items-center justify-center gap-2`}
              >
                <X size={18} />
                <span>مسح جميع الحقول</span>
              </button>
            </div>

            {/* Alert Messages */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center space-x-3 animate-shake">
                <AlertCircle className="text-red-500 ml-2" size={20} />
                <span className="text-red-600 dark:text-red-400">{error}</span>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center space-x-3 animate-bounce-in">
                <CheckCircle className="text-green-500 ml-2" size={20} />
                <span className="text-green-600 dark:text-green-400">
                  {success}
                </span>
              </div>
            )}

            {/* Videos Form - Grid Layout for 6 videos */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[500px] overflow-y-auto scrollbar-hide pr-2">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl ${
                      isDarkMode ? "bg-gray-800/50" : "bg-gray-50"
                    } border ${
                      isDarkMode ? "border-gray-700" : "border-gray-200"
                    } transition-all duration-300 hover:shadow-md`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`${theme.textPrimary} font-semibold`}>
                        فيديو {index + 1}
                      </h3>
                      {/* Clear individual video button */}
                      <button
                        type="button"
                        onClick={() => {
                          const newVideos = [...videos];
                          newVideos[index] = { link: "", name: "" };
                          setVideos(newVideos);
                        }}
                        className={`p-1 rounded hover:bg-gray-300/20 transition-colors ${
                          theme.textSecondary
                        }`}
                      >
                        <X size={16} />
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="relative group">
                        <label
                          className={`block ${theme.textSecondary} text-sm font-medium mb-1`}
                        >
                          رابط الفيديو
                        </label>
                        <div className="relative">
                          <input
                            type="url"
                            name="link"
                            value={video.link}
                            onChange={(e) => handleChange(index, e)}
                            className={`w-full px-4 py-2.5 pr-10 rounded-lg ${
                              theme.cardBg
                            } border ${
                              isDarkMode ? "border-gray-600" : "border-gray-300"
                            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-400 dark:placeholder-gray-400 text-sm`}
                            placeholder="https://example.com/video.mp4"
                            disabled={isLoading || isLoadingLatest}
                          />
                          <LinkIcon
                            className="absolute left-3 top-3 text-gray-400"
                            size={18}
                          />
                        </div>
                      </div>

                      <div className="relative group">
                        <label
                          className={`block ${theme.textSecondary} text-sm font-medium mb-1`}
                        >
                          اسم الفيديو
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={video.name}
                            onChange={(e) => handleChange(index, e)}
                            className={`w-full px-4 py-2.5 pr-10 rounded-lg ${
                              theme.cardBg
                            } border ${
                              isDarkMode ? "border-gray-600" : "border-gray-300"
                            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-400 dark:placeholder-gray-400 text-sm`}
                            placeholder="مثال: فيديو تعريفي"
                            disabled={isLoading || isLoadingLatest}
                          />
                          <FileText
                            className="absolute left-3 top-3 text-gray-400"
                            size={18}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

                            {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || isLoadingLatest}
                className="relative w-full group overflow-hidden mt-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:scale-105"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl transform transition-all duration-300 group-hover:shadow-lg">
                  <div className="flex items-center justify-center space-x-2">
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    ) : (
                      <>
                        <Save className="ml-2" size={20} />
                        <span>إضافة الفيديوهات</span>
                      </>
                    )}
                  </div>
                </div>
              </button>
            </form>

            {/* Info Box */}
            <div className={`mt-6 p-4 rounded-lg ${
              isDarkMode ? "bg-blue-900/20" : "bg-blue-50"
            } border ${
              isDarkMode ? "border-blue-800" : "border-blue-200"
            }`}>
              <div className="flex items-start gap-3">
                <Info className={`${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                } mt-0.5`} size={20} />
                <div className={`text-sm ${
                  isDarkMode ? "text-blue-300" : "text-blue-700"
                }`}>
                  <p className="font-semibold mb-1">ملاحظة مهمة:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>يمكنك جلب آخر الفيديوهات المضافة للتعديل عليها</li>
                    <li>سيتم حفظ الفيديوهات الجديدة كمجموعة منفصلة</li>
                    <li>يمكنك إضافة أي عدد من الفيديوهات من 1 إلى 6</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center mt-6">
              <button
                onClick={() => setCurrentPage("clickone-landing")}
                className={`${theme.textSecondary} hover:${theme.textPrimary} transition-colors`}
              >
                العودة للصفحة الرئيسية
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-2px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(2px);
          }
        }
        .animate-shake {
          animation: shake 0.5s;
        }
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s;
        }
      `}</style>
    </div>
  );
};

export default AddVideos;