import React from 'react'
import styles from './Projectcard.module.css'
import { FaArrowDown, FaChevronDown, FaAngleDown } from "react-icons/fa";
import { FaArrowUp, FaChevronUp, FaAngleUp } from "react-icons/fa";

import { useState } from 'react';


const Projectcard = (props) => {
    const [showdesc, setShowdesc] = useState(false)
    return (
        <div className={styles.container} id="projects">
            <div className={styles.imagecontainer}> <img className={styles.image} src={props.project.imageSrc} alt={props.project.title} /></div>

            <h3 className={styles.title}>{props.project.title}</h3>
                <p className={styles.description}>{props.project.description}</p>
            <ul>
                {
                    props.project.skills.map((skill, id) => {
                        return <li key={id}>{skill}</li>
                    })
                }
            </ul>
            <div className={styles.links}><a href={props.project.demo}>Demo</a>
                <a href={props.project.source}>Git</a></div>

        </div>
    )
}

export default Projectcard
