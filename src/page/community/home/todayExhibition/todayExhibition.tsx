import React, { CSSProperties, useState } from "react";
import { listItems } from "./itemData";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./todayExhibition.module.css";
function TodayExhibition() {
  const [temp, setTemp] = useState(0);
  const [remain, setRemain] = useState(784);
  const [style, setStyle] = useState<CSSProperties>({});

  function moveNext() {
    console.log(`temp: ${temp} remain:${remain}`);
    if (remain === 0) {
      console.log("뒤로 이동 불가");
      return;
    }
    console.log("move next");
    if (remain >= 1176) {
      setRemain(remain - 1176);
      setTemp(temp + 1176);
      setStyle({ marginLeft: `${-(temp + 1176)}px` });
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
    if (temp >= 1176) {
      setTemp(temp - 1176);
      setRemain(remain + 1176);
      setStyle({ marginLeft: `${-(temp - 1176)}px` });
    } else {
      setTemp(0);
      setRemain(remain + temp);
      setStyle({ marginLeft: `${0}px` });
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>오늘의 기획전</h2>
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
        <ul className={styles.list} style={style}>
          {listItems.map((item) => (
            <li className={styles.item}>
              <img src={item.img} alt="thumbnail" />
              <span className={styles.subTitle}>{item.subTitle}</span>
              <span className={styles.title}>{item.title}</span>
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

export default TodayExhibition;
