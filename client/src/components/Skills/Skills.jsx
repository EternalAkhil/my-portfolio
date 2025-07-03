import React from 'react'
import styles from './Skills.module.css'
import skillimg from '../../assets/images/skillBanner.png'
import skills from '../../data/skills.json'

const Skills = () => {
  return (
    <section className={styles.container} id='skills'>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsRow}>
        
        <div className={styles.skillsGrid}>
          {skills.map((item, id) => (
            <div className={styles.skillCard} key={id}>
              <div className={styles.imageContainer}>
                <img src={item.imageSrc} alt={item.title} />
              </div>
              <p className={styles.skillName}>{item.title}</p>
            </div>
          ))}
          
        </div>
        <div className={styles.bannerAnim}>
          <img src={skillimg} alt="Skill banner" />
        </div>
      </div>
    </section>
  )
}

export default Skills
