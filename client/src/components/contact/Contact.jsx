import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.text}>
                <p>Feel free to reach out</p>
            </div>
            <div className={styles.contacts}>
                <div>
                    <img src="contact/emailIcon.png" alt="email" />
                    <a href="mailto:akr142003@gmail.com">akr142003@gmail.com</a>
                </div>
                <div>
                    <img src="contact/githubIcon.png" alt="github" />
                    <a href="https://github.com/EternalAkhil" target="_blank" rel="noopener noreferrer">
                        github.com/EternalAkhil
                    </a>
                </div>
                <div>
                    <img src="contact/linkedinIcon.png" alt="linkedin" />
                    <a href="https://linkedin.com/in/akr-reddy" target="_blank" rel="noopener noreferrer">
                        linkedin.com/akr-reddy
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Contact
