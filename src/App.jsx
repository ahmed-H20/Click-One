import React, { useState, useEffect } from 'react';
import DarkModeToggle from './components/common/DarkModeToggle';
import HomePage from './components/pages/HomePage';
import CPXFramePage from './components/pages/CPXFramePage';
import RedirectPage from './components/pages/RedirectPage';
import DataPage from './components/pages/DataPage';
import { DEFAULT_SETTINGS } from './data/surveyPlatforms';
import { validateForm } from './utils/validation';
import './styles/globals.css';
import { UserInfoPage } from './components/pages/UserInfoPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [userPoints, setUserPoints] = useState(DEFAULT_SETTINGS.INITIAL_POINTS);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSurveySelect = (survey) => {
    setSelectedSurvey(survey);
    setCurrentPage('userInfo');
    setFormData({ name: '', phone: '' });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async () => {
    const newErrors = validateForm(formData);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newParticipant = {
      id: Date.now(),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      surveyTitle: selectedSurvey.title,
      surveyId: selectedSurvey.id,
      submissionDate: new Date().toISOString(),
      status: 'Completed'
    };
    
    setParticipants(prev => [...prev, newParticipant]);
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Auto redirect after success message
    setTimeout(() => {
      if (selectedSurvey.type === 'iframe') {
        setCurrentPage('cpxFrame');
      } else {
        setCurrentPage('redirect');
        setTimeout(() => {
          window.open(selectedSurvey.url, '_blank');
          setCurrentPage('home');
          setShowSuccess(false);
        }, 2000);
      }
    }, 1500);
  };

  const renderCurrentPage = () => {
    const commonProps = {
      isDarkMode,
      userPoints,
      participants,
      setCurrentPage,
      isVisible
    };

    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            {...commonProps}
            handleSurveySelect={handleSurveySelect}
          />
        );
      case 'userInfo':
        return (
          <UserInfoPage
            {...commonProps}
            selectedSurvey={selectedSurvey}
            formData={formData}
            errors={errors}
            isSubmitting={isSubmitting}
            showSuccess={showSuccess}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        );
      case 'cpxFrame':
        return (
          <CPXFramePage 
            {...commonProps}
            setUserPoints={setUserPoints}
          />
        );
      case 'redirect':
        return (
          <RedirectPage 
            isDarkMode={isDarkMode}
            selectedSurvey={selectedSurvey}
          />
        );
      case 'data':
        return (
          <DataPage 
            {...commonProps}
          />
        );
      default:
        return (
          <HomePage 
            {...commonProps}
            handleSurveySelect={handleSurveySelect}
          />
        );
    }
  };

  return (
    <div className="font-sans">
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {renderCurrentPage()}
    </div>
  );
};

export default App;