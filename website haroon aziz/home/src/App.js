import React from 'react'
import Header from './my portfolio/Header'
import Hero from './my portfolio/Hero'
import Skill from './my portfolio/Skill'
import Project from './my portfolio/Project'
import Experience from './my portfolio/Experience'
import Education from './my portfolio/Education'
import Certification from './my portfolio/Certification'
import Achievements from './my portfolio/Achivement'
import Cervices from './my portfolio/Cervices'
import Showcase from './my portfolio/Showcase'
import About from './my portfolio/About'
import Navbar from './my portfolio/Navbar'
import Contect from './my portfolio/Contect'
import Footer from './my portfolio/Footer'
const App = () => {
  return (
    <div>
  <div className="sidebar">
    <Navbar />
  </div>

  <div className="main-content">
    <Header />
    <About />
    {/* <Hero /> */}
    <Skill />
    <Project />
    <Experience />
    <Education />
    <Certification />
    <Achievements />
    <Cervices />
    {/* <Showcase /> */}
    <Contect />
    <Footer />
  </div>
</div>

  )
}

export default App
