import React from 'react'
import styles from './Skills.module.css'
import skillimg from '../../assets/images/skillBanner.png'
import skills from '../../data/skills.json'

const Skills = () => {
  return (
    <section className={styles.container} id='skills'>
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.container2}>
        <div className={styles.skillsContainer}>
          {skills.map((item, id) => (
            <div key={id} className={styles.skillMainCard} >
              <h3>{item.name}</h3>
              <div className={styles.skillCard}>
                {item.skills.map((skill, id) => (
                <div className={styles.oneskillcard}>
                  <div className={styles.imageContainer}>

                    <img src={skill.imageSrc} alt={skill.title} />
                  </div>
                  <p className={styles.skillName}>{skill.title}</p>
                </div>


              ))}

              </div>
              


            </div>
          ))}
        </div>
        {/* <div className={styles.skillsBanner}>
          <img src={skillimg} alt="skill banner" />
        </div> */}
      </div>
    </section>
  )
}

export default Skills
