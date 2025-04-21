import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import styles from './components/Navbar'

import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Registraion from './pages/Registration'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Login from './pages/Login'



const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      
      <Navbar />  
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/doctors' element={< Doctors/>} />
        <Route path='/doctors/:speciality' element={< Doctors/>} />
        <Route path='/registration' element={< Registraion/>} />
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={< About/>} />
        <Route path='/contact' element={< Contact/>} />
        <Route path='/my-profile' element={< MyProfile/>} />
        <Route path='/my-appointments' element={< MyAppointment/>} />
        <Route path='/appointment/:docId' element={< Appointment/>} />
      </Routes>
    </div>
  )
}

export default App