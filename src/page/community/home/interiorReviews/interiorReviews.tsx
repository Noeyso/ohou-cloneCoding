import React, { useEffect, useState } from "react";
import styles from "./interiorReviews.module.css";
import User from "../../../../common/images/user.png";
import { AiFillStar } from "react-icons/ai";
import { items } from "./itemData";

function InteriorReviews() {
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
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>유저들의 인테리어 시공리뷰</h2>
        <span>인테리어 전문가 더 찾기</span>
      </div>
      <ul className={styles.list}>
        {items.map((item) => (
          <li className={styles.item}>
            <div className={styles.item_container}>
              <div className={styles.img_container}>
                <img src={item.img} alt="thumbnail" className={styles.img} />
              </div>
              <div className={styles.review_container}>
                <div className={styles.stars}>
                  <AiFillStar width="1.1rem" height="1.1rem" color="#35c5f0" />
                  <AiFillStar width="1.1rem" height="1.1rem" color="#35c5f0" />
                  <AiFillStar width="1.1rem" height="1.1rem" color="#35c5f0" />
                  <AiFillStar width="1.1rem" height="1.1rem" color="#35c5f0" />
                  <AiFillStar width="1.1rem" height="1.1rem" color="#35c5f0" />
                </div>
                <div className={styles.review}>{item.des}</div>
                <div className={styles.profile}>
                  <img className={styles.user} src={User} alt="user" />
                  <span>{item.nickname}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {isResize && <div className={styles.more}>인테리어 전문가 더 찾기</div>}
    </section>
  );
}

export default InteriorReviews;
