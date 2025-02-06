import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import RegisterForm from '../components/RegisterForm/RegisterForm.jsx'
import LoginForm from '../components/LogInForm/LoginForm.jsx'
import HomePage from '../components/HomePage/HomePage.jsx'

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
