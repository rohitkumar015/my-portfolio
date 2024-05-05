import React from 'react'
import Headerr from '../component/Headerr'
import Introsection from '../component/Introsection'
import Sectionseparation from '../component/Sectionseparation'
import About from '../component/About'
import Projects from '../component/Projects'
import Skills from '../component/Skills'
import Experience from '../component/Experience'
import Contact from '../component/Contact'
import Lastsection from '../component/Lastsection'

const Homepage = () => {
  return (
    <div>
        <Headerr></Headerr>
        <Introsection></Introsection>
        <Sectionseparation></Sectionseparation>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Experience></Experience>
        <Contact></Contact>
        <Lastsection></Lastsection>
        
       
       

    </div>
  )
}

export default Homepage