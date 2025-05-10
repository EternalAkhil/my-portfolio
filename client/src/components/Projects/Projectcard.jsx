import React from 'react'
import styles from './Projectcard.module.css'
import { FaArrowDown, FaChevronDown, FaAngleDown } from "react-icons/fa";
import { FaArrowUp, FaChevronUp, FaAngleUp } from "react-icons/fa";

import { useState } from 'react';


const Projectcard = (props) => {
    const [showdesc,setShowdesc] = useState(false)
    return (
        <div className={styles.container} id="projects">
            <div className={styles.image}><img src={props.project.imageSrc} alt={props.project.title} /></div>
            <h3 className={styles.title}>{props.project.title}</h3>
            <div className={`${styles.description} ${showdesc?styles.show:styles.description}`}>
                <p >{props.project.description}</p>
                {showdesc?<FaAngleUp className={styles.arrow} onClick={()=>setShowdesc(!showdesc)}/>:<FaAngleDown className={styles.arrow} onClick={()=>setShowdesc(!showdesc)}/>}
                
            </div>


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
