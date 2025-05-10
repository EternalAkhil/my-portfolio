import React from 'react'
import styles from './Contact.module.css';
const Contact = () => {
    return (
        <footer id="contact">
            <div className={styles.text}><h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <div className={styles.contacts}>
                <div><img src="public/contact/emailIcon.png" alt="email" /><a href="mailto:akr142003@gmial.com">akr142003@gmial.com</a></div>
                <div><img src="public/contact/githubIcon.png" alt="github" /><a href="https://github.com/EternalAkhil">github.com/EternalAkhil</a></div>
                <div><img src="public/contact/linkedinIcon.png" alt="linkedin" /><a href="https://linkedin.com/in/akr-reddy">linkedin.com/akr-reddy</a></div>
            </div>

        </footer>
    )
}

export default Contact
