import React from 'react'
import Nav from './Components/Nav.jsx'
import Footer from './components/Footer.jsx' 
import Achievements from './components/Achievements.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Hero from './components/Hero.jsx'

function App() {
  return (
    <>
      <Nav />
      <div className= 'max-w-[1200px] w-[90%] mx-auto'>
        <Hero />
        <Achievements />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App