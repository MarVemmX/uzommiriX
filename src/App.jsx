import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Homepage'
import AboutPage from './AboutPage'
import TweensNteens from './TweensNteens'
import Gallery from './Gallery'
import CommunityService from './components/Community/Community'
import FaithFormation from './components/FaithFormation.jsx/Faithformation'
import YoungAdults from './components/YoungAdults/YoungAdults'
import Donate from './components/Donate/Donate'

// import HeroSection from './components/Hero/HeroSection'

function App() {
  

  return (
    <Router>
    <Routes>
      {/* <Route path='*' element={<NotFound/>}/>               */}
      <Route path='/' element={<Homepage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/tweensandteens' element={<TweensNteens/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/communityservice' element={<CommunityService/>} />
      <Route path='/faithformation' element={<FaithFormation/>} />
      <Route path='/youngadults' element={<YoungAdults/>} />
      <Route path='/donate' element={<Donate/>} />
    </Routes>
    </Router>

     
  )
}

export default App

 {/* <YoungAdults/> */}
      {/* <FaithFormation/> */}
      {/* <CommunityService/> */}
      {/* <Gallery/> */}
      {/* <TweensNteens/> */}
      {/* <AboutPage/> */}
      {/* <Homepage/> */}
