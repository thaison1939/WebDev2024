import React from 'react';
import styles from './Header.module.scss'; 

function Header() {
  return (
    <header className={styles["siteHeader"]}>
      <div className={styles["logo-container"]}>
        <a href ="http://localhost:3000/">
        <img src="/se-logo.png" alt="StackExchange Logo" className={styles["logo-header"]} />
        </a>

      </div>
      <nav className={styles["header-nav-links"]}>
        <a href="#all-sites" className={styles["inside-header-link"]}>All Sites</a>
        <a href="#top-users" className={styles["inside-header-link"]}>Top 400 Users</a>
        <a href="#digests" className={styles["inside-header-link"]}>Digests</a>
      </nav>
    </header>
  );
}

export default Header;
