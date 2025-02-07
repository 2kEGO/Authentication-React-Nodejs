import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import RegisterForm from '../components/webpages/RegisterForm/RegisterForm.jsx'
import LoginForm from '../components/webpages/LogInForm/LoginForm.jsx'
import HomePage from '../components/webpages/HomePage/HomePage.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/homepage' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/register' element={<RegisterForm/>}></Route>
      </Routes>
    </>

  )
}

export default App
