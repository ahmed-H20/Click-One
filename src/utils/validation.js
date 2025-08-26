export const validateForm = (formData) => {
  const newErrors = {};
  
  // Validate name
  if (!formData.name || !formData.name.trim()) {
    newErrors.name = 'الاسم مطلوب ولا يمكن أن يكون فارغاً';
  } else if (formData.name.trim().length < 2) {
    newErrors.name = 'الاسم يجب أن يكون على الأقل حرفين';
  } else if (formData.name.trim().length > 50) {
    newErrors.name = 'الاسم طويل جداً (أقصى حد 50 حرف)';
  } else if (!/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFFa-zA-Z\s]+$/.test(formData.name.trim())) {
    newErrors.name = 'الاسم يجب أن يحتوي على أحرف فقط';
  }
  
  // Validate phone
  if (!formData.phone || !formData.phone.trim()) {
    newErrors.phone = 'رقم الهاتف مطلوب ولا يمكن أن يكون فارغاً';
  } else if (!/^\+?[\d\s\-()]{10,15}$/.test(formData.phone.trim())) {
    newErrors.phone = 'يرجى إدخال رقم هاتف صالح (10-15 رقم)';
  }
  
  return newErrors;
};

// Real-time field validation
export const validateField = (name, value) => {
  if (!value) return '';
  
  switch (name) {
    case 'name':
      if (!value.trim()) return 'الاسم مطلوب';
      if (value.trim().length < 2) return 'الاسم قصير جداً';
      if (value.trim().length > 50) return 'الاسم طويل جداً';
      if (!/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFFa-zA-Z\s]+$/.test(value.trim())) {
        return 'أحرف فقط مسموحة';
      }
      return '';
      
    case 'phone':
      if (!value.trim()) return 'رقم الهاتف مطلوب';
      if (value.trim().length < 10) return 'رقم الهاتف قصير جداً';
      if (value.trim().length > 15) return 'رقم الهاتف طويل جداً';
      if (!/^\+?[\d\s\-()]+$/.test(value.trim())) return 'تنسيق رقم الهاتف غير صحيح';
      return '';
      
    default:
      return '';
  }
};

// Check if form is completely valid
export const isFormValid = (formData) => {
  return formData.name && 
         formData.name.trim().length >= 2 && 
         formData.name.trim().length <= 50 &&
         /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFFa-zA-Z\s]+$/.test(formData.name.trim()) &&
         formData.phone && 
         formData.phone.trim().length >= 10 &&
         formData.phone.trim().length <= 15 &&
         /^\+?[\d\s\-()]{10,15}$/.test(formData.phone.trim());
};

// Sanitize input data
export const sanitizeFormData = (formData) => {
  return {
    name: formData.name ? formData.name.trim() : '',
    phone: formData.phone ? formData.phone.trim() : ''
  };
};

export const generateUserData = (participants) => {
  const userId = participants.length > 0 ? participants[participants.length - 1].id : Date.now();
  const userName = participants.length > 0 ? participants[participants.length - 1].name : 'User';
  const userEmail = `${userName.toLowerCase().replace(/\s+/g, '')}@clickone.app`;
  
  return { userId, userName, userEmail };
};

export const generateSecureHash = (userId, secureKey) => {
  return btoa(`${userId}-${secureKey}`);
};

// Phone number formatting helper
export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  if (cleaned.length <= 3) return cleaned;
  if (cleaned.length <= 7) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
};

