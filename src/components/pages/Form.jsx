/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Phone, User, Check, X, Zap, Loader2 } from 'lucide-react';
import FloatingParticles from '../common/FloatingParticles';
import { getTheme } from '../../config/theme';

export const Form = ({
  isDarkMode,
  selectedSurvey,
  formData,
  errors,
  handleInputChange,
  setCurrentPage,
  isUserRegistered, // New prop to check if user is already registered
  setIsUserRegistered // New prop to update registration status
}) => {
  const theme = getTheme(isDarkMode);
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz_OA1zWDUmljQf51nJO57f2qFhbK89_kEX708zi80nlLCsNhpQ203Rjm6ADIlJ0YnT/exec';
  const [isSubmitting, setIsSubmitting] = useState(false);
  // If user is already registered, skip to survey directly
  React.useEffect(() => {
    if (isUserRegistered) {
      // Redirect to survey page or handle accordingly
      // This should be handled by parent component
      setCurrentPage('survey'); // or whatever page shows the actual survey
    }
  }, [isUserRegistered, setCurrentPage]);

  // Handle form submission with Google Sheets integration
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form first
    const validateField = (name, value) => {
      switch (name) {
        case 'name':
          if (!value.trim()) return 'الاسم مطلوب';
          if (value.trim().length < 2) return 'الاسم يجب أن يكون على الأقل حرفين';
          if (value.trim().length > 50) return 'الاسم طويل جداً';
          return '';
        case 'phone':
          if (!value.trim()) return 'رقم الهاتف مطلوب';
          if (!/^\+?[\d\s\-()]{10,15}$/.test(value.trim())) return 'يرجى إدخال رقم هاتف صالح';
          return '';
        default:
          return '';
      }
    };


    const handleSubmit = () => {
      setIsSubmitting(true);
    };

    // Check if form is valid
    const isFormValid = () => {
      return formData.name.trim().length >= 2 && 
             /^\+?[\d\s\-()]{10,15}$/.test(formData.phone.trim());
    };

    if (!isFormValid()) {
      return; // Don't submit if form is invalid
    }

    try {
      // Set loading state
      handleSubmit(); // This should set isSubmitting to true
      
      // Submit to Google Sheets      
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name.trim());
      formDataToSend.append('phone', formData.phone.trim());
      formDataToSend.append('timestamp', new Date().toISOString());

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // Important for Google Apps Script
      });  
      
      
      setIsSubmitting(false);      
      setCurrentPage('landingForm'); // Redirect to survey page or whatever is next

      
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      // Still mark as registered to maintain app functionality
      setIsUserRegistered(true);
      setTimeout(() => {
        setCurrentPage('survey');
      }, 2000);
    }
  };

  // Real-time validation helper
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'الاسم مطلوب';
        if (value.trim().length < 2) return 'الاسم يجب أن يكون على الأقل حرفين';
        if (value.trim().length > 50) return 'الاسم طويل جداً';
        return '';
      case 'phone':
        if (!value.trim()) return 'رقم الهاتف مطلوب';
        if (!/^\+?[\d\s\-()]{10,15}$/.test(value.trim())) return 'يرجى إدخال رقم هاتف صالح';
        return '';
      default:
        return '';
    }
  };

  // Check if form is valid
  const isFormValid = () => {
    return formData.name.trim().length >= 2 && 
           /^\+?[\d\s\-()]{10,15}$/.test(formData.phone.trim());
  };

    return (
    <div className={`min-h-screen relative overflow-hidden ${theme.textPrimary}`}>
      <FloatingParticles isDarkMode={isDarkMode} />
      
      <div className={`absolute inset-0 ${theme.background}`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="relative group">
            <div className={`absolute -inset-1 bg-gradient-to-r ${theme.glowBorder} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
            
            <div className={`relative ${theme.cardBg} backdrop-blur-lg rounded-3xl p-8 border`}>              
              {/* Form with Google Sheets integration */}
              <form method="POST" action={scriptURL} onSubmit={handleFormSubmit} noValidate>
               <div className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label 
                      htmlFor="name"
                      className={`block ${theme.textPrimary} font-medium mb-2`}
                    >
                      <User size={16} className="inline mr-2 text-blue-500" />
                      الاسم الكامل *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      minLength="2"
                      maxLength="50"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-4 ${theme.input} backdrop-blur-lg border rounded-2xl focus:ring-2 transition-all duration-300 ${
                        isSubmitting
                          ? 'opacity-50 cursor-not-allowed bg-gray-100'
                          : errors.name 
                          ? 'border-red-500 bg-red-500 bg-opacity-10 focus:ring-red-500' 
                          : formData.name.trim() && !validateField('name', formData.name)
                          ? 'border-green-500 bg-green-500 bg-opacity-10 focus:ring-green-500'
                          : 'focus:ring-blue-500'
                      }`}
                      placeholder="أدخل اسمك الكامل"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-2 animate-pulse flex items-center">
                        <X size={14} className="mr-1" />
                        {errors.name}
                      </p>
                    )}
                    {formData.name.trim() && !errors.name && !validateField('name', formData.name) && (
                      <p className="text-green-500 text-sm mt-2 flex items-center">
                        <Check size={14} className="mr-1" />
                        الاسم صحيح ✓
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <label 
                      htmlFor="phone"
                      className={`block ${theme.textPrimary} font-medium mb-2`}
                    >
                      <Phone size={16} className="inline mr-2 text-purple-500" />
                      رقم الهاتف *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      pattern="^\+?[\d\s\-()]{10,15}$"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-4 ${theme.input} backdrop-blur-lg border rounded-2xl focus:ring-2 transition-all duration-300 ${
                        isSubmitting
                          ? 'opacity-50 cursor-not-allowed bg-gray-100'
                          : errors.phone 
                          ? 'border-red-500 bg-red-500 bg-opacity-10 focus:ring-red-500' 
                          : formData.phone.trim() && !validateField('phone', formData.phone)
                          ? 'border-green-500 bg-green-500 bg-opacity-10 focus:ring-green-500'
                          : 'focus:ring-blue-500'
                      }`}
                      placeholder="أدخل رقم هاتفك (مثال: +1234567890)"
                      autoComplete="tel"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-2 animate-pulse flex items-center">
                        <X size={14} className="mr-1" />
                        {errors.phone}
                      </p>
                    )}
                    {formData.phone.trim() && !errors.phone && !validateField('phone', formData.phone) && (
                      <p className="text-green-500 text-sm mt-2 flex items-center">
                        <Check size={14} className="mr-1" />
                        رقم الهاتف صحيح ✓
                      </p>
                    )}
                  </div>

                  {/* Form Actions */}
                  <div className="flex space-x-4 pt-6">
                    <button
                      type="button"
                      onClick={() => setCurrentPage('home')}
                      disabled={isSubmitting}
                      className={`flex-1 py-4 px-6 bg-gradient-to-r ${theme.buttonSecondary} text-white border rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      إلغاء
                    </button>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting || !isFormValid()}
                      className={`flex-1 py-4 px-6 rounded-2xl font-bold transition-all duration-300 transform shadow-2xl ${
                        isSubmitting || !isFormValid()
                          ? 'bg-gray-500 text-gray-300 cursor-not-allowed opacity-50'
                          : `bg-gradient-to-r ${theme.buttonPrimary} text-white hover:scale-105 hover:shadow-blue-500/50`
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <Loader2 className="animate-spin mr-2" size={18} />
                          جاري الحفظ...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Zap className="mr-2 animate-pulse" size={18} />
                          تسجيل والمتابعة
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {/* Form Info */}
              <div className={`mt-6 p-4 ${theme.cardBg} bg-opacity-50 rounded-xl border border-opacity-50`}>
                <p className={`text-xs ${theme.textMuted} text-center leading-relaxed`}>
                  <span className="text-red-500">*</span> جميع الحقول مطلوبة
                  <br />
                  🔒 معلوماتك محفوظة وآمنة معنا
                  <br />                 
                </p>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};