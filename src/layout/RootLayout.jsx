import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Values from '../Components/Values'
import Services from '../Components/Services'
import Work from '../Components/Work'
import Footer from '../Components/Footer'
import Footer2 from '../Components/Footer2'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <Hero  />
        <About />
        <Values />
        <Services />
        <Work />
        <Footer  />
        <Footer2 />
    </div>
  )
}

export default RootLayout