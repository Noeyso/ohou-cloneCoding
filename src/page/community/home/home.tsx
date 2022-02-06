import React from "react";
import styles from "./home.module.css";
import HomeCategory from "./homeCategory/homeCategory";

import HomeHeader from "./homeHeader/homeHeader";
import HomeShortcut from "./homeShortcut/homeShortcut";
import HomeStory from "./homeStory/homeStory";
import TodayDeal from "./todayDeal/todayDeal";

function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeShortcut />
      <HomeStory />
      <HomeCategory />
      <TodayDeal />
    </div>
  );
}

export default Home;
