import React from "react";
import styles from "./SideBar.module.scss";
import TodayFeaturedSite from "../TodayFeaturedSite/TodayFeaturedSite";
import TopAskerList from "../TopAskerList/TopAskerList";
import TopNetworkSites from "../TopNetworkSites/TopNetworkSites";
import siteData from "../../_SAMPLE_DATA/todayfeaturedsite.json";

const SideBar = ({askers}) => {
    return (
        <div className={styles.container}>
            <TodayFeaturedSite
                image={siteData.image}
                title={siteData.title}
                paragraph={siteData.paragraph}
                questions={siteData.questions}
                answers={siteData.answers}
                answered={siteData.answered}
            />
            <TopAskerList askers={askers}/>
            <TopNetworkSites/>
        </div>
    )
}
export default SideBar;