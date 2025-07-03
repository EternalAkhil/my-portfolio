import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [hamopen, setHamopen] = useState(false)

  // Close menu on link click (mobile)
  const handleNavClick = () => {
    if (hamopen) setHamopen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.mobile}>
        <h1 className={styles.title}>
          <a href="/">Portfolio</a>
        </h1>
        <div className={styles.menu}>
          {hamopen ? (
            <FaTimes
              className={styles.ham}
              size={28}
              color="white"
              aria-label="Close menu"
              onClick={() => setHamopen(false)}
            />
          ) : (
            <FaBars
              className={styles.ham}
              size={28}
              color="white"
              aria-label="Open menu"
              onClick={() => setHamopen(true)}
            />
          )}
        </div>
      </div>
      <ul
        className={`${styles.sections} ${hamopen ? styles.menuopen : ''}`}
        onClick={handleNavClick}
      >
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
