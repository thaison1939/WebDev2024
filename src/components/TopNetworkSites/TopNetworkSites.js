import React from "react";
import styles from'./TopNetworkSites.module.scss';

function TopNetworkSites(){
    return (
        <div className={styles.container}>
            <div className={styles["heading"]}>Top Network Sites</div>
            <nav className={styles["topnetworksites-nav-links"]}>
                <a href = "https://stackoverflow.com/" className={styles["topnetworksites-link"]}>
                    <img className={styles["topnetworksites-logo"]} src="https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico" alt = "Stack Overflow logo"/>
                     Stack Overflow 
                </a>
                <a href = "https://math.stackexchange.com/" className={styles["topnetworksites-link"]}>
                    <img className={styles["topnetworksites-logo"]} src="https://cdn.sstatic.net/Sites/math/Img/favicon.ico" alt="Mathematics logo"/>
                     Mathematics 
                </a>
                <a href = "https://superuser.com/" className={styles["topnetworksites-link"]}>
                    <img className={styles["topnetworksites-logo"]} src="https://cdn.sstatic.net/Sites/superuser/Img/favicon.ico" alt="Super User logo"/>
                     Super User 
                </a>
                <a href = "https://askubuntu.com/" className={styles["topnetworksites-link"]}>
                    <img className={styles["topnetworksites-logo"]} src="https://cdn.sstatic.net/Sites/askubuntu/Img/favicon.ico" alt="Ask Ubuntu logo"/>
                     Ask Ubuntu 
                </a>
                <a href = "https://meta.stackexchange.com/" className={styles["topnetworksites-link"]}>
                    <img className={styles["topnetworksites-logo"]} src="https://meta.stackexchange.com/Content/Sites/stackexchangemeta/Img/favicon.ico" alt="Meta Stack Exchange logo"/>
                     Meta Stack Exchange 
                </a>
                <a href = "https://serverfault.com/" className={styles["topnetworksites-link"]}>
                    <img className={styles["topnetworksites-logo"]} src="https://cdn.sstatic.net/Sites/serverfault/Img/favicon.ico" alt="Server Fault logo"/>
                     Server Fault 
                </a>
                <a href = "https://unix.stackexchange.com/" className={styles["topnetworksites-link"]}>
                    <img className={styles["topnetworksites-logo"]} src="https://cdn.sstatic.net/Sites/unix/Img/favicon.ico" alt="Unix & Linux logo"/>
                     Unix & Linux 
                </a>
                <a href = "https://ru.stackoverflow.com/" className={styles["topnetworksites-link"]}>
                    <img className={styles["topnetworksites-logo"]} src="https://cdn.sstatic.net/Sites/ru/Img/favicon.ico" alt="Stack Overflow на русском logo "/>
                     Stack Overflow на русском 
                </a>
                <a href = "https://english.stackexchange.com/" className={styles["topnetworksites-link"]}>
                    <img className={styles["topnetworksites-logo"]} src="https://cdn.sstatic.net/Sites/english/Img/favicon.ico?v=678003fec3e2" alt="English Language & Usage logo"/>
                     English Language & Usage 
                </a>
                <a href = "https://physics.stackexchange.com/" className={styles["topnetworksites-link"]}>
                    <img className={styles["topnetworksites-logo"]} src="https://cdn.sstatic.net/Sites/physics/Img/favicon.ico?v=678003fec3e2" alt="Physics logo"/>
                     Physics 
                </a>
            </nav>
            <p className={styles["topnetworksites-footer"]}>
                <a href = "https://stackexchange.com/sites" className={styles["topnetworksites-footer"]}>
                    <b>view all 182 sites »</b>
                </a>
            </p>
        </div>
    );
}

export default TopNetworkSites;