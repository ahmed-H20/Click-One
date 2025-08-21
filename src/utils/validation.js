export const validateForm = (formData) => {
  const newErrors = {};
  
  if (!formData.name.trim()) {
    newErrors.name = 'الاسم مطلوب';
  } else if (formData.name.trim().length < 2) {
    newErrors.name = 'الاسم يجب أن يكون على الأقل حرفين';
  }
  
  if (!formData.phone.trim()) {
    newErrors.phone = 'رقم الهاتف مطلوب';
  } else if (!/^\+?[\d\s\-()]{10,15}$/.test(formData.phone.trim())) {
    newErrors.phone = 'يرجى إدخال رقم هاتف صالح';
  }
  
  return newErrors;
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