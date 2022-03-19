import React, { useEffect, useState } from "react";
import Best from "./best/best";
import styles from "./home.module.css";
import HomeCategory from "./homeCategory/homeCategory";

import HomeHeader from "./homeHeader/homeHeader";
import HomeShortcut from "./homeShortcut/homeShortcut";
import HomeStory from "./homeStory/homeStory";
import InteriorReviews from "./interiorReviews/interiorReviews";
import OverseasShipping from "./overseasShipping/overseasShipping";
import PopularPhotos from "./popularPhotos/popularPhotos";
import TodayDeal from "./todayDeal/todayDeal";
import TodayExhibition from "./todayExhibition/todayExhibition";

function Home() {
  const [isResize, setIsResize] = useState(false);
  function updateResize() {
    if (window.innerWidth < 768) {
      setIsResize(true);
    } else {
      setIsResize(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", updateResize);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.home_header}>
          <HomeHeader />
        </div>

        <HomeShortcut />
        <HomeStory />
        <HomeCategory />
        <TodayDeal />
        <PopularPhotos />
        <img
          className={styles.banner}
          src={
            isResize
              ? "https://image.ohou.se/i/bucketplace-v2-development/uploads/home/marketing/164723979289495348.jpg?gif=1&w=1536"
              : "https://image.ohou.se/i/bucketplace-v2-development/uploads/home/marketing/164723978136971589.jpg?gif=1&w=2560"
          }
          alt="banner"
        />
        <InteriorReviews />
        <TodayExhibition />
        <OverseasShipping />
        <img
          className={styles.banner}
          src="https://image.ohou.se/i/bucketplace-v2-development/uploads/home/marketing/164601332921793262.png?gif=1&w=2560"
          alt="banner"
        />
        <Best />
        <div className={styles.about_member}>
          <div className={styles.member}>
            <span>전문가 가입신청</span>
            <span>인테리어 전문가님! 오늘의집과 함께하세요</span>
          </div>
          <div className={styles.member}>
            <span>사업자 구매 회원 전환</span>
            <span>사업자 회원에게 구매 시 혜택을 드립니다</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
