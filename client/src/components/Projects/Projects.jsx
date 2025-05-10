import React from 'react'
import projects from '../../data/projects.json'
import Projectcard from './Projectcard'
import styles from './Projects.module.css'
const Projects = () => {
  return (
    <section className={styles.sections}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
        {projects.map((item,index)=>{
            return <Projectcard key ={index} project={item}/>
        })}

        </div>
        

    </section>
  )
}

export default Projects
