import React from "react";
import { items } from "./itemData";
import styles from "./popularPhotos.module.css";
import User from "../../../../common/images/user.png";
function PopularPhotos() {
  return (
    <section className={styles.container}>
      <div className={styles.photos}>
        <div className={styles.header}>
          <h2>오늘의 인기 사진</h2>
          <span>더보기</span>
        </div>
        <ul className={styles.list}>
          {items.map((item) => (
            <li className={styles.item}>
              <div className={styles.image_container}>
                <img className={styles.image} src={item.img} alt="img" />
                <div className={styles.detail}>
                  <div className={styles.user_info}>
                    <img className={styles.user} src={User} alt="user" />
                    <span>{item.nickname}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PopularPhotos;
