import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li>
                    <FaFacebook />
                </li>
                <li className={styles.list}>
                    <FaInstagram />
                </li>
                <li className={styles.list}>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.span}><span>Luna</span> &copy; 2023</p>
        </footer>
    )
}

export default Footer