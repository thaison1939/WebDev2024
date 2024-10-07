import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/stack-exchange-logo.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-logo"]}>
          <img src={logo} alt="Company Logo" className={styles["footer-logo-img"]} />  
        </div>

        <div className={styles["footer-navigator"]}>
          <div className={styles["footer-column"]}>
            <h5 className={styles["title"]}><a href="/">STACK EXCHANGE</a></h5>
            <ul>
              <li><a className={styles["link"]} href="/">About</a></li>
              <li><a className={styles["link"]} href="/">Contact</a></li>
              <li><a className={styles["link"]} href="/">Feedback</a></li>
            </ul>
          </div>
          <div className={styles["footer-column"]}>
            <h5 className={styles["title"]}><a href="/">COMPANY</a></h5>
            <ul>
              <li><a className={styles["link"]} href="/">Stack Overflow</a></li>
              <li><a className={styles["link"]} href="/">Teams</a></li>
              <li><a className={styles["link"]} href="/">Advertising</a></li>
              <li><a className={styles["link"]} href="/">Talent</a></li>
              <li><a className={styles["link"]} href="/">Press</a></li>
              <li><a className={styles["link"]} href="/">Legal</a></li>
              <li><a className={styles["link"]} href="/">Privacy Policy</a></li>
              <li><a className={styles["link"]} href="/">Terms of Service</a></li>
              <li><a className={styles["link"]} href="/">Cookie Settings</a></li>
              <li><a className={styles["link"]} href="/">Cookie Policy</a></li>
            </ul>
          </div>
          <div className={styles["footer-column"]}>
            <h5 className={styles["title"]}><a href="/">STACK EXCHANGE NETWORK</a></h5>
            <ul>
              <li><a className={styles["link"]} href="/">Technology</a></li>
              <li><a className={styles["link"]} href="/">Culture & recreation</a></li>
              <li><a className={styles["link"]} href="/">Life & arts</a></li>
              <li><a className={styles["link"]} href="/">Science</a></li>
              <li><a className={styles["link"]} href="/">Professional</a></li>
              <li><a className={styles["link"]} href="/">Business</a></li>
              <li><a className={styles["link"]} href="/">API</a></li>
              <li><a className={styles["link"]} href="/">Data</a></li>
            </ul>
          </div>
        </div>

        <div className={styles["footer-social"]}>
            <ul>
              <li><a className={styles["link"]} href="/">Blog</a></li>
              <li><a className={styles["link"]} href="/">Facebook</a></li>
              <li><a className={styles["link"]} href="/">Twitter</a></li>
              <li><a className={styles["link"]} href="/">LinkedIn</a></li>
              <li><a className={styles["link"]} href="/">Instagram</a></li>
            </ul>
            <p>
              <span>Site design / logo © 2024 Stack Exchange Inc; user contributions licensed under CC BY-SA.</span>
            </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
