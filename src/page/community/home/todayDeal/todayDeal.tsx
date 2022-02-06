import React from "react";
import { listItems } from "./itemData";
import styles from "./todayDeal.module.css";
function TodayDeal() {
  return (
    <section className={styles.container}>
      <div className={styles.deal}>
        <ul>
          {listItems.map((item, idx) => (
            <li key={idx}>
              <img src={item.img} alt="item" />
              <span>{item.company}</span>
              <span>{item.title}</span>
              <div>
                <span>{item.sale}%</span>
                <span>{item.price}</span>
              </div>
              <div>
                <span>{item.rate}</span>
                <span>리뷰 {item.review}</span>
              </div>
              {item.isFreeShip && <div>무료배송</div>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TodayDeal;
