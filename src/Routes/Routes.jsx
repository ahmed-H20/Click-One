import { Route, Router, Routes } from 'react-router-dom'
import React from 'react'
import HomePage from '../components/pages/HomePage'
import { UserInfoPage } from '../components/pages/UserInfoPage'
import CPXFramePage from '../components/pages/CPXFramePage'
import TheoremReachFramePage from '../components/pages/TheoremReachFramePage'
import BitLabsSurveyPage from '../components/pages/BitLabsSurveyPage'
import ClickOneLandingPage from '../components/pages/LandingPageForms'
import AdminLogin from '../components/pages/AdminLogin'
import AddVideos from '../components/pages/AddVideos'
import { Form } from '../components/pages/Form'
import RedirectPage from '../components/pages/RedirectPage'
import DataPage from '../components/pages/DataPage'


const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage {...props} />} />
      <Route path="/clickone" element={<ClickOneLandingPage {...props} />} /> 
      <Route path="/user-info" element={<UserInfoPage {...props} />} />
      <Route path="/form" element={<Form {...props} />} />
      <Route path="/cpx-frame" element={<CPXFramePage {...props} />} />
      <Route path="/theoremreach" element={<TheoremReachFramePage {...props} />} />
      <Route path="/bitlabs" element={<BitLabsSurveyPage {...props} />} />
      <Route path="/admin-login" element={<AdminLogin {...props} />} />
      <Route path="/add-videos" element={<AddVideos {...props} />} />
      <Route path="/redirect" element={<RedirectPage {...props} />} />
      <Route path="/data" element={<DataPage {...props} />} />
      {/* fallback route */}
      <Route path="*" element={<HomePage {...props} />} />
    </Routes>
  )
}

export default AppRoutes
