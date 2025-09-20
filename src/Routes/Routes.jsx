import { Route, Router } from 'react-router-dom'
import React from 'react'
import { Form } from '../components/pages/Form'
import HomePage from '../components/pages/HomePage'
import App from '../App'

const Routes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/form" element={<Form />} />
        </Routes>
    </Router>
  )
}

export default Routes
