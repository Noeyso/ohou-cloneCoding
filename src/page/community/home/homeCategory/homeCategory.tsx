import React, {
  CSSProperties,
  useState,
  useEffect,
  useRef,
  createRef,
} from "react";
import styles from "./homeCategory.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { menuItems } from "./itemData";

function HomeCategory() {
  const totalItem = menuItems.length;
  const [showItem, setShowItem] = useState(10);
  const slideItem = 5;
  const [temp, setTemp] = useState(0);
  const [remain, setRemain] = useState(totalItem - showItem);
  const [margin, setMargin] = useState(0);

  function updateResize() {
    if (window.innerWidth < 768) {
      setMargin(0);
      setShowItem(4);
    } else if (window.innerWidth < 1024) {
      setMargin(0);
      setShowItem(6);
    } else {
      setMargin(0);
      setShowItem(10);
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
      <h2>카테고리별 상품 찾기</h2>
      <div className={styles.carousel}>
        <div className={styles.list_prev}>
          <button
            className={temp === 0 ? "" : `${styles.move_btn} ${styles.left}`}
          >
            <IoIosArrowBack color="#fff" size="1rem" onClick={movePrev} />
          </button>
        </div>

        <ul
          className={styles.list}
          style={{
            width: `calc(100% + 100% * ${(totalItem - showItem) / showItem})`,
            marginLeft: `calc( 100% / ${showItem} * ${-margin})`,
          }}
        >
          {menuItems.map((item, idx) => (
            <li key={idx} style={{ width: `calc( 100% / ${showItem})` }}>
              <div className={styles.img_container}>
                <img src={item.img} alt="icon" />
              </div>
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
