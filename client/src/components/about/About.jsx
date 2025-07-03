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
          <img src={aboutimg} alt="About me" className={styles.aboutImg} />
        </div>
        <div className={styles.skills}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <img src={cursoricon} alt="Front-End Icon" />
            </div>
            <div>
              <h3>Front-End Developer</h3>
              <p>
                I craft beautiful, responsive, and optimized web interfaces using modern frameworks and best practices.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <img src={servericon} alt="Back-End Icon" />
            </div>
            <div>
              <h3>Back-End Developer</h3>
              <p>
                I build fast, secure APIs and scalable server-side solutions with Node.js, Express, and cloud technologies.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <img src={dataicon} alt="Data Science Icon" />
            </div>
            <div>
              <h3>Data Scientist</h3>
              <p>
                I analyze data, build ML models, and extract insights to drive smarter business decisions.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About
