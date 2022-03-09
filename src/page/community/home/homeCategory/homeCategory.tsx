import React, { CSSProperties, useState } from "react";
import styles from "./homeCategory.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { menuItems } from "./itemData";

function HomeCategory() {
  const [temp, setTemp] = useState(0);
  const [remain, setRemain] = useState(672);
  const [style, setStyle] = useState<CSSProperties>({});

  function moveNext() {
    console.log(`temp: ${temp} remain:${remain}`);
    if (remain === 0) {
      console.log("뒤로 이동 불가");
      return;
    }
    console.log("move next");
    if (remain >= 560) {
      setRemain(remain - 560);
      setTemp(temp + 560);
      setStyle({ marginLeft: `${-(temp + 560)}px` });
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
    if (temp >= 560) {
      setTemp(temp - 560);
      setRemain(remain + 560);
      setStyle({ marginLeft: `${-(temp - 560)}px` });
    } else {
      setTemp(0);
      setRemain(remain + temp);
      setStyle({ marginLeft: `${0}px` });
    }
  }
  return (
    <section className={styles.container}>
      <h2>카테고리별 상품 찾기</h2>
      <div className={styles.carousel}>
        <div className={styles.list_prev}>
          <button
            className={temp === 0 ? "" : `${styles.move_btn} ${styles.left}`}
          >
            <IoIosArrowBack color="#fff" size="1rem" onClick={movePrev} />
          </button>
        </div>

        <ul className={styles.list} style={style}>
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <img src={item.img} alt="icon" />
              {item.text}
            </li>
          ))}
        </ul>
        <div className={styles.list_next}>
          <button
            className={remain === 0 ? "" : `${styles.move_btn} ${styles.right}`}
          >
            <IoIosArrowForward color="#fff" size="1rem" onClick={moveNext} />
          </button>
        </div>
      </div>
    </section>
  );
}
export default HomeCategory;
