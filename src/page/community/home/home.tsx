import React from "react";
import styles from "./home.module.css";
import HomeCategory from "./homeCategory/homeCategory";

import HomeHeader from "./homeHeader/homeHeader";
import HomeShortcut from "./homeShortcut/homeShortcut";
import HomeStory from "./homeStory/homeStory";
import PopularPhotos from "./popularPhotos/popularPhotos";
import TodayDeal from "./todayDeal/todayDeal";

function Home() {
  return (
    <div className={styles.container}>
      <HomeHeader />
      <div className={styles.content}>
        <HomeShortcut />
        <HomeStory />
        <HomeCategory />
        <TodayDeal />
        <PopularPhotos />
      </div>
    </div>
  );
}

export default Home;
