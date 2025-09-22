// src/components/pages/AdminLogin.jsx
import React, { useState, useEffect } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle,
  LogIn,
  Shield,
} from "lucide-react";
import { getTheme } from "../../config/theme";

const AdminLogin = ({ isDarkMode, setCurrentPage }) => {
  const theme = getTheme(isDarkMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Encrypted credentials (use environment variables in production)
  const adminCredentials = {
    email: btoa("admin@clickone.com"), // Base64 encoded
    password: btoa("ClickOne@2025!"), // Base64 encoded
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Compare credentials
    const encodedEmail = btoa(email);
    const encodedPassword = btoa(password);

    if (
      encodedEmail === adminCredentials.email &&
      encodedPassword === adminCredentials.password
    ) {
      setSuccess("تم تسجيل الدخول بنجاح!");
      localStorage.setItem("adminAuth", "true");
      localStorage.setItem("adminEmail", email);

      setTimeout(() => {
        setCurrentPage("AddVideos");
      }, 1500);
    } else {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      setIsLoading(false);
    }
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

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div
          className={`w-full max-w-md transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-10 opacity-0 scale-95"
          }`}
        >
          {/* Login Card */}
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
                دخول المسؤول
              </h1>
              <p className={`${theme.textSecondary} mt-2`}>
                صفحة مخصصة لإدارة المحتوى
              </p>
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

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div className="relative group">
                <label
                  className={`block ${theme.textSecondary} text-sm font-medium mb-2`}
                >
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 pr-12 rounded-xl ${
                      theme.cardBg
                    } border ${
                      isDarkMode ? "border-gray-600" : "border-gray-300"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-400`}
                    required
                    disabled={isLoading}
                  />
                  <Mail
                    className="absolute left-3 top-3.5 text-gray-400"
                    size={20}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="relative group">
                <label
                  className={`block ${theme.textSecondary} text-sm font-medium mb-2`}
                >
                  كلمة المرور
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-4 py-3 pr-12 pl-12 rounded-xl ${
                      theme.cardBg
                    } border ${
                      isDarkMode ? "border-gray-600" : "border-gray-300"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-400`}
                    placeholder="••••••••"
                    required
                    disabled={isLoading}
                  />
                  <Lock
                    className="absolute left-3 top-3.5 text-gray-400"
                    size={20}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="relative w-full group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:scale-105"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl transform transition-all duration-300 group-hover:shadow-lg">
                  <div className="flex items-center justify-center space-x-2">
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    ) : (
                      <>
                        <LogIn className="ml-2" size={20} />
                        <span>تسجيل الدخول</span>
                      </>
                    )}
                  </div>
                </div>
              </button>
            </form>

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

      <style jsx>{`
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

export default AdminLogin;
