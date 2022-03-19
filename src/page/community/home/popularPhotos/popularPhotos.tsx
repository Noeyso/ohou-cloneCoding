import React, { useEffect, useState } from "react";
import { items } from "./itemData";
import styles from "./popularPhotos.module.css";
import User from "../../../../common/images/user.png";
import { IoCopy } from "react-icons/io5";
function PopularPhotos() {
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
        <h2>오늘의 인기 사진</h2>
        <span>더보기</span>
      </div>
      <ul className={styles.list}>
        {items.map((item) => (
          <li className={styles.item}>
            <div className={styles.image_container}>
              <div className={styles.copy}>
                <IoCopy color="hsla(0,0%,100%,.74)" />
              </div>
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
      {isResize && <div className={styles.more}>인기 사진 더보기</div>}
    </section>
  );
}

export default PopularPhotos;
