import React from "react";
import styles from "./homeShortcut.module.css";
import Shopping from "../../../../common/images/shortcut/cart.png";
import Delivery from "../../../../common/images/shortcut/delivery.png";
import Area from "../../../../common/images/shortcut/area.png";
import Space from "../../../../common/images/shortcut/sofa.png";
import Consulting from "../../../../common/images/shortcut/counseler.png";
import Move from "../../../../common/images/shortcut/trolley.png";
import Deal from "../../../../common/images/shortcut/sale.png";
import Fortune from "../../../../common/images/shortcut/tiger.png";

function HomeShortcut() {
  return (
    <nav className={styles.container}>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <div className={styles.item_img}>
            <img src={Shopping} alt="shopping" />
          </div>
          쇼핑하기
        </li>
        <li className={styles.item}>
          <div className={styles.item_img}>
            <img src={Delivery} alt="delivery" />
          </div>
          빠른가구배송
        </li>
        <li className={styles.item}>
          <div className={styles.item_img}>
            <img src={Area} alt="area" />
          </div>
          평수별집구경
        </li>
        <li className={styles.item}>
          <div className={styles.item_img}>
            <img src={Space} alt="space" />
          </div>
          공간별사진
        </li>
        <li className={styles.item}>
          <div className={styles.item_img}>
            <img src={Consulting} alt="consulting" />
          </div>
          빠른시공상담
        </li>
        <li className={styles.item}>
          <div className={styles.item_img}>
            <img src={Move} alt="move" />
          </div>
          오늘의집이사
        </li>
        <li className={styles.item}>
          <div className={styles.item_img}>
            <img src={Deal} alt="deal" />
          </div>
          오늘의딜
        </li>
        <li className={styles.item}>
          <div className={styles.item_img}>
            <img src={Fortune} alt="fortune" />
          </div>
          22년 신년운세
        </li>
      </ul>
    </nav>
  );
}

export default HomeShortcut;
