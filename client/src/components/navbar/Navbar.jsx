import React from 'react'
import styles from './Navbar.module.css'
import { FaBars } from 'react-icons/fa'; // Font Awesome 'Bars' icon
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [hamopen, setHamopen] = useState(false)
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.mobile}>
          <h1 className={styles.title}><a href="/">Portfolio</a></h1>
          <div className={styles.menu}>
            {hamopen ? <FaBars className={styles.ham} size={24} color="white" onClick={() => {
              setHamopen(!hamopen)
            }} /> : <FaTimes className={styles.ham} size={24} color="white" onClick={() => {
              setHamopen(!hamopen)
            }} />}
          </div>
        </div>
        <ul onClick={() => {
          setHamopen(!hamopen)
        }} className={`${hamopen ? styles.menuclose : styles.menuopen} ${styles.sections}`}>
          <li><a href='#about'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
