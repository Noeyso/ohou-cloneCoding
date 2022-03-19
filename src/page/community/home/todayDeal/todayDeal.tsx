import React, { CSSProperties, useEffect, useState } from "react";
import { listItems } from "./itemData";
import styles from "./todayDeal.module.css";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function TodayDeal() {
  const totalItem = listItems.length;
  const [showItem, setShowItem] = useState(4);
  const slideItem = 4;
  const [temp, setTemp] = useState(0);
  const [remain, setRemain] = useState(totalItem - showItem);
  const [margin, setMargin] = useState(0);
  const [isOne, setIsOne] = useState(false);

  function updateResize() {
    if (window.innerWidth < 768) {
      setIsOne(true);
    } else if (window.innerWidth < 1024) {
      setMargin(0);
      setShowItem(3);
      setIsOne(false);
    } else {
      setMargin(0);
      setShowItem(4);
      setIsOne(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", updateResize);
  }, []);

  function moveNext() {
    console.log(`temp: ${temp} remain:${remain}`);
    if (remain === 0) {
      console.log("뒤로 이동 불가");
      return;
    }
    console.log("move next");
    if (remain >= slideItem) {
      setRemain(remain - slideItem);
      setTemp(temp + slideItem);
      setMargin(temp + slideItem);
    } else {
      setTemp(temp + remain);
      setRemain(0);
      setMargin(temp + remain);
    }
  }
  function movePrev() {
    console.log(`temp: ${temp} remain:${remain}`);
    if (temp === 0) {
      console.log("앞으로 이동 불가");
      return;
    }
    console.log("move prev");
    if (temp >= slideItem) {
      setTemp(temp - slideItem);
      setRemain(remain + slideItem);
      setMargin(temp - slideItem);
    } else {
      setTemp(0);
      setRemain(remain + temp);
      setMargin(0);
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>오늘의딜</h2>
        <span>더보기</span>
      </div>
      <div className={styles.carousel}>
        <div className={styles.list_prev}>
          <button
            className={temp === 0 ? "" : `${styles.move_btn} ${styles.left}`}
          >
            <IoIosArrowBack
              className={temp === 0 ? styles.icon_hide : ""}
              size="1.5rem"
              onClick={movePrev}
            />
          </button>
        </div>
        {!isOne ? (
          <ul
            className={styles.menu}
            style={{
              width: `calc(100% + 100% * ${(totalItem - showItem) / showItem})`,
              marginLeft: `calc( 100% / ${showItem} * ${-margin})`,
            }}
          >
            {listItems.map((item, idx) => (
              <li key={idx} style={{ width: `calc( 100% / ${showItem})` }}>
                <div className={styles.img_box}>
                  <img src={item.img} alt="thumbnail" />
                </div>
                <div className={styles.product_info}>
                  <span className={styles.company}>{item.company}</span>
                  <span className={styles.title}>{item.title}</span>
                  <div className={styles.item_price}>
                    <span className={styles.sale}>{item.sale}%</span>
                    <span className={styles.price}>
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </div>
                  <div className={styles.item_status}>
                    <AiFillStar size="15" color="#35c5f0" />
                    <span className={styles.rate}>{item.rate}</span>
                    <span className={styles.review}>리뷰 {item.review}</span>
                  </div>
                  {item.isFreeShip && (
                    <div className={styles.freeShip}>
                      <span>무료배송</span>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.product_one}>
            <div className={styles.one}>
              <div className={styles.one_img}>
                <img src={listItems[0].img} alt="thumbnail" />
              </div>
              <div className={styles.one_info}>
                <div>
                  <div className={styles.one_tag}>6일 남음</div>
                  <span className={styles.one_title}>{listItems[0].title}</span>
                  <div className={styles.one_sale}>
                    <span>{listItems[0].sale}</span>%
                  </div>
                </div>
                <span>특가 223개 더보기 {">"}</span>
              </div>
            </div>
          </div>
        )}

        <div className={styles.list_next}>
          <button
            className={remain === 0 ? "" : `${styles.move_btn} ${styles.right}`}
          >
            <IoIosArrowForward
              className={remain === 0 ? styles.icon_hide : ""}
              size="1.5rem"
              onClick={moveNext}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TodayDeal;
