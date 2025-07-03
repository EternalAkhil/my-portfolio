import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [hamopen, setHamopen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">Portfolio<span className={styles.accent}>.</span></a>
      </div>
      <ul className={`${styles.sections} ${hamopen ? styles.menuopen : ''}`}>
        <li><a href="#about" onClick={() => setHamopen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setHamopen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setHamopen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setHamopen(false)}>Contact</a></li>
      </ul>
      <div className={styles.menu}>
        {hamopen ? (
          <FaTimes className={styles.ham} size={28} color="white" onClick={() => setHamopen(false)} />
        ) : (
          <FaBars className={styles.ham} size={28} color="white" onClick={() => setHamopen(true)} />
        )}
      </div>
    </nav>
  )
}

export default Navbar
