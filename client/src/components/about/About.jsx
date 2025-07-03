import React from 'react'
import styles from './About.module.css'
import aboutimg from '../../assets/about/aboutImage.png'
import cursoricon from '../../assets/about/cursorIcon.png'
import servericon from '../../assets/about/serverIcon.png'
import dataicon from '../../assets/about/data.png'


const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h1 className={styles.title}>About</h1>
      <div className={styles.container2} >
        <div className={styles.left}>
          <div className={styles.imgWrapper}>
            <img src={aboutimg} alt="aboutimg" className={styles.aboutImg} />
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <img src={cursoricon} alt="cursor icon" />
            </div>
            <div>
              <h3>Front-End Developer</h3>
              <p>
                I craft responsive, accessible, and visually engaging web interfaces using modern frameworks and best practices.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <img src={servericon} alt="server icon" />
            </div>
            <div>
              <h3>Back-End Developer</h3>
              <p>
                I build fast, secure APIs and scalable server-side logic with Node.js, Express, and database integrations.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <img src={dataicon} alt="data icon" />
            </div>
            <div>
              <h3>Data Scientist</h3>
              <p>
                I analyze data, build ML models, and extract insights to drive smarter decisions and innovative solutions.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About
