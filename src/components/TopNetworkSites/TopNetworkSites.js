import React from "react";
import Sites from "../Sites/Sites";
import styles from'./TopNetworkSites.module.scss';

const TopNetworkSites = ({ sites = [] }) => {
    return (
      <div className={styles.container}>
        <div className={styles.heading}>Top Network Sites</div>
        <nav className={styles["topnetworksites-nav-links"]}>
          {sites.length > 0 ? (
            sites.map((site, index) => (
              <div key={index} className={styles["topnetworksites-link"]}>
                <Sites
                  name={site.name}
                  image={site.image}
                  link={site.link}
                  content={site.content}
                />
              </div>
            ))
          ) : (
            <p>No sites available.</p>
          )}
        </nav>
        <p className={styles["topnetworksites-footer"]}>
          <a
            href="https://stackexchange.com/sites"
            className={styles["topnetworksites-footer"]}
          >
            <b>View all 182 sites »</b>
          </a>
        </p>
      </div>
    );
  };
  
export default TopNetworkSites;