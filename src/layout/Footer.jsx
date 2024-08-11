import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./footer.module.css"
function Footer() {
    return (
    <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li><FaGithub /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
        </ul>
        <p className={styles.copy_right}><span>Costs</span> &copy; 2024</p>
    </footer>
    )
}
export default Footer;