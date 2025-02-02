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
        <Route path='/loggedIn' element={<HomePage/>}></Route>
        <Route path='/Login' element={<LoginForm/>}></Route>
        <Route path='/Register' element={<RegisterForm/>}></Route>
      </Routes>
    </>

  )
}

export default App
