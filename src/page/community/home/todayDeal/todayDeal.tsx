import React, { CSSProperties, useState } from "react";
import { listItems } from "./itemData";
import styles from "./todayDeal.module.css";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function TodayDeal() {
  const [temp, setTemp] = useState(0);
  const [remain, setRemain] = useState(1752);
  const [style, setStyle] = useState<CSSProperties>({});

  function moveNext() {
    console.log(`temp: ${temp} remain:${remain}`);
    if (remain === 0) {
      console.log("뒤로 이동 불가");
      return;
    }
    console.log("move next");
    if (remain >= 1168) {
      setRemain(remain - 1168);
      setTemp(temp + 1168);
      setStyle({ marginLeft: `${-(temp + 1168)}px` });
    } else {
      setTemp(temp + remain);
      setRemain(0);
      setStyle({ marginLeft: `${-(temp + remain)}px` });
    }
  }
  function movePrev() {
    console.log(`temp: ${temp} remain:${remain}`);
    if (temp === 0) {
      console.log("앞으로 이동 불가");
      return;
    }
    console.log("move prev");
    if (temp >= 1168) {
      setTemp(temp - 1168);
      setRemain(temp + 1168);
      setStyle({ marginLeft: `${-(temp - 1168)}px` });
    } else {
      setTemp(0);
      setRemain(remain + temp);
      setStyle({ marginLeft: `${0}px` });
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.deal}>
        <div className={styles.header}>
          <h2>오늘의딜</h2>
          <span>더보기</span>
        </div>
        <div className={styles.carousel}>
          <div className={styles.list_prev}>
            <button className={`${styles.move_btn} ${styles.left}`}>
              <IoIosArrowBack color="#fff" size="1rem" onClick={movePrev} />
            </button>
          </div>
          <ul className={styles.menu} style={style}>
            {listItems.map((item, idx) => (
              <li key={idx} className={styles.item}>
                <div className={styles.img_box}>
                  <img src={item.img} alt="item" />
                </div>
                <span className={styles.company}>{item.company}</span>
                <span className={styles.title}>{item.title}</span>
                <div className={styles.item_price}>
                  <span className={styles.sale}>{item.sale}%</span>
                  <span className={styles.price}>{item.price}</span>
                </div>
                <div className={styles.item_status}>
                  <AiFillStar width="1.1rem" height="1.1rem" color="#35c5f0" />
                  <span className={styles.rate}>{item.rate}</span>
                  <span className={styles.review}>리뷰 {item.review}</span>
                </div>
                {item.isFreeShip && (
                  <span className={styles.freeShip}>무료배송</span>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.list_next}>
            <button className={`${styles.move_btn} ${styles.right}`}>
              <IoIosArrowForward color="#fff" size="1rem" onClick={moveNext} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodayDeal;
