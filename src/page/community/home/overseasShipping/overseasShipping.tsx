import React, { CSSProperties, useEffect, useState } from "react";
import { listItems } from "./itemData";
import styles from "./overseasShipping.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function OverseasShipping() {
  const totalItem = listItems.length;
  const [showItem, setShowItem] = useState(4);
  const slideItem = 4;
  const [temp, setTemp] = useState(0);
  const [remain, setRemain] = useState(totalItem - showItem);
  const [margin, setMargin] = useState(0);

  function updateResize() {
    if (window.innerWidth < 768) {
      setMargin(0);
      setShowItem(2.5);
    } else {
      setMargin(0);
      setShowItem(4);
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
        <h2>해외 프리미엄 인기 상품 모아보기!</h2>
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
        <ul
          className={styles.list}
          style={{
            width: `calc(100% + 100% * ${(totalItem - showItem) / showItem})`,
            marginLeft: `calc( 100% / ${showItem} * ${-margin})`,
          }}
        >
          {listItems.map((item) => (
            <li
              className={styles.item}
              style={{ width: `calc( 100% / ${showItem})` }}
            >
              <div className={styles.img_container}>
                <img src={item.img} alt="thumbnail" />
              </div>
              <span className={styles.title}>
                {item.title.length > 42
                  ? `${item.title.substring(0, 42)}...`
                  : item.title}
              </span>
              <div className={styles.price_info}>
                <span className={styles.sale}>{item.sale}%</span>
                <span className={styles.price}>{item.price}</span>
              </div>
            </li>
          ))}
        </ul>
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
export default OverseasShipping;
