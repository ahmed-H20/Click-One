// src/components/common/Navbar.jsx
import React, { useState, useEffect } from "react";
import {
  Home,
  FileText,
  Menu,
  X,
  Sun,
  Moon,
  Award,
  Sparkles,
} from "lucide-react";
import { getTheme } from "../../config/theme";
import logo from "../../assets/clickone.jpeg";

const Navbar = ({
  isDarkMode,
  toggleDarkMode,
  currentPage,
  setCurrentPage,
}) => {
  const theme = getTheme(isDarkMode);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const navItems = [
    { id: "home", label: "Home", icon: Home, page: "home" },
    {
      id: "clickone",
      label: "ClickOne",
      icon: Award,
      page: "clickone-landing",
    },
    
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${theme.headerBg} backdrop-blur-lg shadow-lg ${
              isDarkMode ? "shadow-gray-900/50" : "shadow-gray-200/50"
            }`
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left Side - Desktop: Dark Mode Toggle, Mobile: Hamburger Menu */}
          <div className="flex items-center">
            {/* Dark Mode Toggle - Desktop Only */}
            <button
              onClick={toggleDarkMode}
              className={`hidden md:flex relative p-3 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? "bg-yellow-500 hover:bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-500/25"
                  : "bg-gray-800 hover:bg-gray-700 text-yellow-400 shadow-lg shadow-gray-800/25"
              } transform hover:scale-110 active:scale-95`}
            >
              <div className="relative w-6 h-6">
                <Sun
                  className={`absolute inset-0 transform transition-all duration-500 ${
                    isDarkMode
                      ? "rotate-0 scale-100 opacity-100"
                      : "rotate-180 scale-0 opacity-0"
                  }`}
                  size={24}
                />
                <Moon
                  className={`absolute inset-0 transform transition-all duration-500 ${
                    isDarkMode
                      ? "rotate-180 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                  size={24}
                />
              </div>
            </button>

            {/* Hamburger Menu - Mobile Only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                theme.cardBg
              } backdrop-blur-lg border ${
                isDarkMode ? "border-gray-600" : "border-gray-300"
              } transform transition-all duration-300 hover:scale-105`}
            >
              {isMobileMenuOpen ? (
                <X className={theme.textPrimary} size={24} />
              ) : (
                <Menu className={theme.textPrimary} size={24} />
              )}
            </button>
          </div>

          {/* Navigation Items - Center */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.page)}
                className={`group relative px-4 py-2 transition-all duration-300 ${
                  currentPage === item.page
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <item.icon
                    size={20}
                    className={`transition-transform duration-300 group-hover:scale-110 ${
                      currentPage === item.page ? "animate-pulse" : ""
                    }`}
                  />
                  <span className="font-medium">{item.label}</span>
                </div>
                {currentPage === item.page && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Logo - Right Side */}
          <div
            onClick={() => setCurrentPage("home")}
            className="cursor-pointer group flex-shrink-0"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <div className="relative">
              <div
                className={`absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition duration-500 ${
                  isLogoHovered ? "animate-pulse" : ""
                }`}
              ></div>
              <div className="relative w-14 h-14 md:w-16 md:h-16 overflow-hidden rounded-full shadow-2xl border-3 border-white backdrop-blur-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 bg-white p-1">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-contain rounded-full"
                />
                {isLogoHovered && (
                  <div className="absolute -top-1 -right-1">
                    <Sparkles
                      className="text-yellow-400 animate-pulse drop-shadow-lg"
                      size={14}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`${
              theme.cardBg
            } backdrop-blur-lg rounded-b-2xl border-t ${
              isDarkMode ? "border-gray-700" : "border-gray-200"
            } py-4 px-4 space-y-2`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.page)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === item.page
                    ? `bg-gradient-to-r from-blue-500 to-purple-600 text-white`
                    : `${theme.textSecondary} hover:${theme.cardBg} hover:shadow-md`
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </div>
              </button>
            ))}

            {/* Dark Mode Toggle in Mobile Menu */}
            <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
              <button
                onClick={toggleDarkMode}
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-between ${theme.textSecondary} hover:${theme.cardBg} hover:shadow-md`}
              >
                <span className="font-medium">Dark Mode</span>
                <div
                  className={`relative p-2 rounded-full transition-all duration-300 ${
                    isDarkMode
                      ? "bg-yellow-500 text-gray-900"
                      : "bg-gray-800 text-yellow-400"
                  }`}
                >
                  <div className="relative w-5 h-5">
                    <Sun
                      className={`absolute inset-0 transform transition-all duration-500 ${
                        isDarkMode
                          ? "rotate-0 scale-100 opacity-100"
                          : "rotate-180 scale-0 opacity-0"
                      }`}
                      size={20}
                    />
                    <Moon
                      className={`absolute inset-0 transform transition-all duration-500 ${
                        isDarkMode
                          ? "rotate-180 scale-0 opacity-0"
                          : "rotate-0 scale-100 opacity-100"
                      }`}
                      size={20}
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
