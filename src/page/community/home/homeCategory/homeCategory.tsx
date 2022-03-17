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
  const showItem = 10;
  const slideItem = 5;
  const [width, setWidth] = useState(112);
  // const [temp, setTemp] = useState(0);
  // const [remain, setRemain] = useState(width * (totalItem - showItem));
  const [temp, setTemp] = useState(0);
  const [remain, setRemain] = useState(totalItem - showItem);
  const [interval, setInterval] = useState(width * slideItem);
  const [style, setStyle] = useState<CSSProperties>({});
  const [margin, setMargin] = useState(0);
  const [pullScreen, setPullScreen] = useState(0);
  const divRef = createRef<HTMLDivElement>();
  console.log(`carousel width : ${divRef.current?.clientWidth}`);
  useEffect(() => {
    console.log(`carousel width : ${divRef.current?.clientWidth}`);
  }, [window.innerWidth]);

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
      //setStyle({ marginLeft: `${-(temp + interval)}px` });
      setMargin(temp + slideItem);
    } else {
      setTemp(temp + remain);
      setRemain(0);
      //setStyle({ marginLeft: `${-(temp + remain)}px` });
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
      //setStyle({ marginLeft: `${-(temp - slideItem)}px` });
      setMargin(temp - slideItem);
    } else {
      setTemp(0);
      setRemain(remain + temp);
      //setStyle({ marginLeft: `${0}px` });
      setMargin(0);
    }
  }
  return (
    <section className={styles.container}>
      <h2>카테고리별 상품 찾기</h2>
      <div ref={divRef} className={styles.carousel}>
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
