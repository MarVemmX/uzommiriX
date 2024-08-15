import React, { useEffect } from 'react'
import HeroSection from './components/Hero/HeroSection'
import Activities from './components/Activities'
import Calendar from './components/Calender'
import Leaders from './components/Leaders'
import Footer from './components/Footer'

const Homepage = () => {
  
  useEffect(() => {
    document.title = "UZOMMIRI"; 
  }, []);
  return (
    <div>
        <HeroSection/>
        <Activities/>
        <Calendar/>
        <Leaders/>
        <Footer/>
        
    </div>
  )
}

export default Homepage