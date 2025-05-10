import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Projects from './components/Projects/Projects'
import Contact from './components/contact/Contact'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      

    </div>
      )
}

      export default App
