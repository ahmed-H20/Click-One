/* eslint-disable no-unused-vars */
import React, { useState, useEffect, use } from "react";
import Navbar from "./components/common/Navbar";
import HomePage from "./components/pages/HomePage";
import CPXFramePage from "./components/pages/CPXFramePage";
import RedirectPage from "./components/pages/RedirectPage";
import DataPage from "./components/pages/DataPage";
import { validateForm } from "./utils/validation";
import "./styles/globals.css";
import { UserInfoPage } from "./components/pages/UserInfoPage";
import TheoremReachFramePage from "./components/pages/TheoremReachFramePage";
import BitLabsSurveyPage from "./components/pages/BitLabsSurveyPage";
import ClickOneLandingPage from "./components/pages/LandingPageForms";
import AdminLogin from "./components/pages/AdminLogin";
import AddVideos from "./components/pages/AddVideos";
import { Form } from "./components/pages/Form";
import { Router } from "react-router-dom";
import AppRoutes from "./Routes/Routes";

const App = () => {
  // const [currentPage, setCurrentPage] = useState("home");
  // const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [participants, setParticipants] = useState([]);
  // const [formData, setFormData] = useState({ name: "", phone: "" });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [showSuccess, setShowSuccess] = useState(false);
  // const [errors, setErrors] = useState({});
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

  // Load saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const commonProps = { isDarkMode, participants, isVisible };


  // const handleSurveySelect = (survey) => {
  //   setSelectedSurvey(survey);

  //   // For BitLabs, go directly to survey list page without user info
  //   if (survey.id === "bitlabs") {
  //     setCurrentPage("bitlabs");
  //   } else {
  //     setCurrentPage("userInfo");
  //   }
  //   setErrors({});
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));

  //   // Clear error for this field when user starts typing
  //   if (errors[name]) {
  //     setErrors((prev) => ({ ...prev, [name]: "" }));
  //   }
  // };

  // const handleSubmit = async () => {
  //   const newErrors = validateForm(formData);

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   // Simulate API call delay
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  //   const newParticipant = {
  //     id: Date.now(),
  //     name: formData.name.trim(),
  //     phone: formData.phone.trim(),
  //     surveyTitle: selectedSurvey.title,
  //     surveyId: selectedSurvey.id,
  //     submissionDate: new Date().toISOString(),
  //     status: "Completed",
  //   };

  //   setParticipants((prev) => [...prev, newParticipant]);
  //   setIsSubmitting(false);
  //   setShowSuccess(true);

  //   // Auto redirect after success message
  //   setTimeout(() => {
  //     if (selectedSurvey.type === "iframe") {
  //       if (selectedSurvey.url === "cpx-research") {
  //         setCurrentPage("cpxFrame");
  //       } else if (selectedSurvey.url === "theoremreach") {
  //         setCurrentPage("theoremreach");
  //       }
  //       setShowSuccess(false);
  //     } else {
  //       setCurrentPage("redirect");
  //       setTimeout(() => {
  //         window.open(selectedSurvey.url, "_blank");
  //         setCurrentPage("home");
  //         setShowSuccess(false);
  //       }, 2000);
  //     }
  //   }, 1500);
  // };

  // const renderCurrentPage = () => {
  //   const commonProps = {
  //     isDarkMode,
  //     participants,
  //     setCurrentPage,
  //     isVisible,
  //   };

  //   switch (currentPage) {
  //     case "home":
  //       return (
  //         <HomePage {...commonProps} handleSurveySelect={handleSurveySelect} />
  //       );
  //     case "userInfo":
  //       return (
  //         <UserInfoPage
  //           {...commonProps}
  //           selectedSurvey={selectedSurvey}
  //           formData={formData}
  //           errors={errors}
  //           isSubmitting={isSubmitting}
  //           showSuccess={showSuccess}
  //           handleInputChange={handleInputChange}
  //           handleSubmit={handleSubmit}
  //         />
  //       );
  //     case "landingForm":
  //       return(
  //         <ClickOneLandingPage
  //           isDarkMode={isDarkMode}
  //           setCurrentPage={setCurrentPage}
  //         />
  //       );
  //     case "form":
  //       return (
  //         <Form
  //           {...commonProps}
  //           selectedSurvey={selectedSurvey}
  //           formData={formData}
  //           errors={errors}
  //           isSubmitting={isSubmitting}
  //           showSuccess={showSuccess}
  //           handleInputChange={handleInputChange}
  //           handleSubmit={handleSubmit}
  //         />
  //       );  
  //     case "cpxFrame":
  //       return <CPXFramePage {...commonProps} />;
  //     case "theoremreach":
  //       return <TheoremReachFramePage {...commonProps} />;
  //     case "bitlabs":
  //       return <BitLabsSurveyPage {...commonProps} />;
  //     case "clickone-landing":
  //       return (
  //         <ClickOneLandingPage
  //           isDarkMode={isDarkMode}
  //           setCurrentPage={setCurrentPage}
  //         />
  //       );
  //     case "admin-login":
  //       return (
  //         <AdminLogin isDarkMode={isDarkMode} setCurrentPage={setCurrentPage} />
  //       );
  //     case "AddVideos":
  //       // يمكنك إضافة صفحة إدارة الفيديوهات هنا لاحقاً
  //       return <AddVideos isDarkMode={isDarkMode} setCurrentPage={setCurrentPage} />;
  //     case "redirect":
  //       return (
  //         <RedirectPage
  //           isDarkMode={isDarkMode}
  //           selectedSurvey={selectedSurvey}
  //         />
  //       );
  //     case "data":
  //       return <DataPage {...commonProps} />;
  //     default:
  //       return (
  //         <HomePage {...commonProps} handleSurveySelect={handleSurveySelect} />
  //       );
  //   }
  // };

  return (
    // <div className={`font-sans min-h-screen ${isDarkMode ? "dark" : ""}`}>
    //   {/* Fixed Navbar */}
    //   <Navbar
    //     isDarkMode={isDarkMode}
    //     toggleDarkMode={toggleDarkMode}
    //     currentPage={currentPage}
    //     setCurrentPage={setCurrentPage}
    //   />

    //   {/* Main Content with padding for navbar */}
    //   <main className="pt-16 md:pt-20"><HomePage /></main>
    // </div>

      <div className={`font-sans min-h-screen ${isDarkMode ? "dark" : ""}`}>
        <Navbar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <main className="pt-16 md:pt-20">
          <AppRoutes {...commonProps} />
        </main>
      </div>      
  );
};

export default App;
