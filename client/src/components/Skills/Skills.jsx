import React from 'react'
import styles from './Skills.module.css'
import skillimg from '../../assets/images/skillBanner.png'
import skills from '../../data/skills.json'
const Skills = () => {
  return (

    <section className={styles.container} id='skills' >
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.container2}>
      <div className={styles.skillsContainer}>
          {
            skills.map((item,id)=>{
              return (<div>
                <div className={styles.imageContainer}><img src={item.imageSrc} alt={item.title} /></div>
              <p className={styles.skillName}>
                {item.title}
              </p>
              </div>)
            })

          }
      </div>
      <div className={styles.skillsBanner}>
          <img src={skillimg} alt="skill banner" />
      </div>

      </div>
      
      
  </section>

    
  )
}

export default Skills
