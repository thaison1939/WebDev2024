import React, {useState, useEffect} from "react";
import LoginButton from "../Login/LoginButton";
import styles from './Navbar.module.scss';

const Navbar = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);
    
    const showSearchBar = () => {
        setSearchVisible(!isSearchVisible);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 650) {
                setSearchVisible(false);
            }
        }
    

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={styles["navbar"]}>
            <div className={styles["navbar-logo"]}>
                <img id="colored_logo" src='/colored_logo.png' alt="logo"></img>
                <a href="/" className={styles["logo-text"]}>Stack<span> Exchange</span></a>
            </div>

            <ul className={styles["nav-links"]}>
                <li><a href="/tour">Tour</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/meta">Meta</a></li>
            </ul>

            <div className={styles["navbar-center"]}>
                <div className={styles["navbar-search"]}>
                    <input type="text" placeholder="Search all sites" ></input>
                </div>
            </div>

            <div className={styles["navbar-logo"]}>
                <img id="logo" src="/logo.png" alt="logo"></img>
                <img className={styles["search-mobile"]} id="search-icon" onClick={showSearchBar} src='/search_icon.png'></img>
                <LoginButton/>
                <div className={styles["toggle-search-bar"]} style={ {display: isSearchVisible ? "flex" : "none"} }>
                    <input type="text" placeholder="Search all sites" ></input>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;