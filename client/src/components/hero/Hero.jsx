import React from 'react'
import styles from './Hero.module.css'
import heroimage from '../../assets/images/hero.png'
import pic from '../../assets/images/pic.png'
import pic2 from '../../assets/images/hero2.jpg'

const Hero = () => {
  return (
    <section className={styles.container}>
      {/* left part */}
      <div className={styles.left}>
        <h1 className={styles.title}>Hi, I'm Akhil</h1>
        <p className={styles.description}> I’m a B.Tech CSE student who’s curious, proactive, and always up for a challenge. I’ve got a solid grip on web development and data science, and I love working on cool projects using Java, Python, and JavaScript.

          Learning something new every day keeps me going — whether it’s coding, building apps, or digging into data. I'm all about growing, creating, and making an impact.</p>
        <a className={styles.contactBtn} href="mailto:akr142003@gmail.com">Contact me</a>
      </div>
      <div className={styles.right} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
