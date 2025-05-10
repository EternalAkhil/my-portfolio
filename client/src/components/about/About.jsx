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
          <img src={aboutimg} alt="aboutimg" />
        </div>
        <div className={styles.skills}>
          <div className={styles.card}>
            <img src={cursoricon} alt="cursor icon" />
            <div>
              <h3>Front-End developer</h3>
              <p>I'm a frontend developer with experience in building responsive
                and optimized sites</p>
            </div>

          </div>
          <div className={styles.card}>
            <img src={servericon} alt="cursor icon" />
            <div>
              <h3>Back-End developer</h3>
              <p>I can build fast and secure APIs using nodeJS and expressJS.</p>
            </div>

          </div>
          <div className={styles.card}>
          <img src={dataicon} alt="server icon" />
            <div>
            <h3>Data Scientist</h3>
              <p>Expert in data analysis and statistics. Can build ML projects to gain valuable insights from data</p>
            </div>
            
          </div>
        </div>

      </div>

    </section>
  )
}

export default About
