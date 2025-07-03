import React from 'react'
import styles from './Projectcard.module.css'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projectcard = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.imagecontainer}>
                <img className={styles.image} src={props.project.imageSrc} alt={props.project.title} />
            </div>
            <h3 className={styles.title}>{props.project.title}</h3>
            <p className={styles.description}>{props.project.description}</p>
            <ul className={styles.skillList}>
                {props.project.skills.map((skill, id) => (
                    <li className={styles.skillItem} key={id}>{skill}</li>
                ))}
            </ul>
            <div className={styles.links}>
                <a href={props.project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                </a>
                <a href={props.project.source} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Source
                </a>
            </div>
        </div>
    )
}

export default Projectcard
