import React from "react";
import styles from "./interiorReviews.module.css";
import User from "../../../../common/images/user.png";
import { AiFillStar } from "react-icons/ai";
import { items } from "./itemData";

function InteriorReviews() {
  return (
    <section className="container">
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
              <div className={styles.stars}>
                <AiFillStar width="1.1rem" height="1.1rem" color="#35c5f0" />
                <AiFillStar width="1.1rem" height="1.1rem" color="#35c5f0" />
                <AiFillStar width="1.1rem" height="1.1rem" color="#35c5f0" />
                <AiFillStar width="1.1rem" height="1.1rem" color="#35c5f0" />
                <AiFillStar width="1.1rem" height="1.1rem" color="#35c5f0" />
              </div>
              <span>
                {item.des.length > 95
                  ? `${item.des.substring(0, 95)}...`
                  : item.des}
              </span>
              <div className={styles.profile}>
                <img className={styles.user} src={User} alt="user" />
                <span>{item.nickname}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default InteriorReviews;
