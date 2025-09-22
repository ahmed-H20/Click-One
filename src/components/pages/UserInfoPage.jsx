import { Phone, User, Check, X, Zap, Loader2 } from 'lucide-react';
import FloatingParticles from '../common/FloatingParticles';
import { getTheme } from '../../config/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const UserInfoPage = ({ isDarkMode, setParticipants }) => {
  const theme = getTheme(isDarkMode);
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz_OA1zWDUmljQf51nJO57f2qFhbK89_kEX708zi80nlLCsNhpQ203Rjm6ADIlJ0YnT/exec';

  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSurvey } = location.state || {};

  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // ✅ check if user already registered for this survey
  // useEffect(() => {
  //   if (!selectedSurvey) return;
  //   const alreadyRegistered = localStorage.getItem(`survey_${selectedSurvey.id}_registered`);
  //   if (alreadyRegistered) {
  //     navigate(selectedSurvey.url);
  //   }
  // }, [selectedSurvey]);

  // Validation
  const validateField = (name, value) => {
    if (name === "name") {
      if (!value.trim()) return "الاسم مطلوب";
      if (value.trim().length < 2) return "الاسم يجب أن يكون على الأقل حرفين";
      if (value.trim().length > 50) return "الاسم طويل جداً";
    }
    if (name === "phone") {
      if (!value.trim()) return "رقم الهاتف مطلوب";
      if (!/^\+?[\d\s\-()]{10,15}$/.test(value.trim())) return "يرجى إدخال رقم هاتف صالح";
    }
    return "";
  };

  const isFormValid = () => {
    return (
      formData.name.trim().length >= 2 &&
      /^\+?[\d\s\-()]{10,15}$/.test(formData.phone.trim())
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameError = validateField("name", formData.name);
    const phoneError = validateField("phone", formData.phone);
    if (nameError || phoneError) {
      setErrors({ name: nameError, phone: phoneError });
      return;
    }

    const newParticipant = {
      id: Date.now(),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      surveyTitle: selectedSurvey.title,
      surveyId: selectedSurvey.id,
      submissionDate: new Date().toISOString(),
      status: "Completed",
    };

    setParticipants((prev) => [...prev, newParticipant]);

    setIsSubmitting(true);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams({
          "name": formData.name,
          "phone": formData.phone,
          "survey": selectedSurvey?.title || "Unknown Survey",
        }),
      });

      if (response.ok) {
        // ✅ Save registration for this survey
        localStorage.setItem(`survey_${selectedSurvey.id}_registered`, "true");

        setShowSuccess(true);
        setTimeout(() => {
          navigate(selectedSurvey.url); // redirect to survey
        }, 1500);
      } else {
        alert("حدث خطأ أثناء إرسال البيانات");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("تعذر إرسال البيانات");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!selectedSurvey) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl">
        لا يوجد استطلاع محدد
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingParticles isDarkMode={isDarkMode} />

      <div className="relative w-full max-w-lg mx-auto p-6">
        {/* glow border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur-2xl opacity-30"></div>

        <div className={`relative ${theme.cardBg} p-8 rounded-3xl shadow-xl border`}>
          {showSuccess ? (
            <div className="text-center">
              <Check className="mx-auto text-green-500 mb-4" size={48} />
              <h2 className={`text-2xl font-bold mb-2 ${theme.textPrimary}`}>
                ✅ تم تسجيل بياناتك بنجاح
              </h2>
              <p className={theme.textSecondary}>سيتم تحويلك الآن إلى الاستطلاع</p>
            </div>
          ) : (
            <>
              <h2 className={`text-2xl font-bold mb-6 text-center ${theme.textPrimary}`}>
                ادخل بياناتك لبدء الاستطلاع
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className={`block mb-2 text-sm font-medium ${theme.textPrimary}`}>
                    الاسم
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="name"
                      id='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="اكتب اسمك هنا"
                      className="w-full pl-10 pr-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className={`block mb-2 text-sm font-medium ${theme.textPrimary}`}>
                    رقم الهاتف
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      id='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="مثال: +201234567890"
                      className="w-full pl-10 pr-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold hover:scale-105 transition-transform disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <Zap size={20} />
                      <span>ابدأ الاستطلاع</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
