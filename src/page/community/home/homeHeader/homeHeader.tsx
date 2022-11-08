import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import styles from "./homeHeader.module.css";
import User from "../../../../common/images/user.png";
import { slideImgArr, slideImgArr_hor } from "./itemData";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function HomeHeader() {
  const [slideItems, setSlideItems] = useState(slideImgArr);
  const [slideWidth, setSlideWidth] = useState(272);
  const size = slideItems.length;
  const slideSpeed = 3000;
  const [currentLoopIdx, setCurrentLoopIdx] = useState(0);

  function updateResize() {
    if (window.innerWidth < 768) {
      setSlideItems(slideImgArr_hor);
      setSlideWidth(window.innerWidth);
    } else if (window.innerWidth < 1024) {
      setSlideItems(slideImgArr);
      setSlideWidth(window.innerWidth * 0.25);
    } else {
      setSlideItems(slideImgArr);
      setSlideWidth(272);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", updateResize);
  }, []);

  const getStaticIndex = useCallback(
    (loopIndex) => {
      let rest = loopIndex % size;
      if (rest < 0) {
        rest += size;
      }
      return rest;
    },
    [size]
  );

  useLayoutEffect(() => {
    let intervalId = setInterval(() => {
      setCurrentLoopIdx(currentLoopIdx + 1);
    }, slideSpeed);
    console.log(currentLoopIdx);

    return () => clearTimeout(intervalId);
  }, [setCurrentLoopIdx, currentLoopIdx]);

  const getNearestLoopIndex = useCallback(
    (staticIndex) => {
      const currentStaticIndex = getStaticIndex(currentLoopIdx);
      const diff = staticIndex - currentStaticIndex;
      return currentLoopIdx + diff;
    },
    [currentLoopIdx, getStaticIndex]
  );

  return (
    <div className={styles.container}>
      <div className={styles.top_story}>
        <div className={styles.top_story_img}>
          <img
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164111427310602212.jpg?gif=1&w=2560"
            alt="story"
          />
        </div>
        <div className={styles.detail}>
          <div>
            <h1 className={styles.detail_title}>
              노랑 포인트가 빛나는 화이트 톤 신혼집
            </h1>
            <div className={styles.detail_user}>
              <img className={styles.user} src={User} alt="user" />
              <span className={styles.nickname}>소연하우스</span>
            </div>
          </div>
          <button className={styles.go_btn}>보러가기</button>
        </div>
      </div>

      <div
        style={{
          width: `${slideWidth}px`,
        }}
        className={styles.top_banner}
      >
        <div
          className={styles.slide_list_wrapper}
          style={{
            transform: `translateX(${
              -slideWidth * size - slideWidth * currentLoopIdx
            }px)`,
            transition: "0.2s",
          }}
        >
          <div
            className={styles.slide_list}
            style={{
              width: `${slideWidth * (size * 2 + 1)}px`,
              transform: `translateX(${slideWidth * currentLoopIdx}px)`,
            }}
          >
            {Array(size * 2 + 1)
              .fill(1)
              .map((_, index) => {
                const loopIndexToShow = currentLoopIdx + index - size;
                console.log('render items')
                console.log(loopIndexToShow)
                return {
                  staticIndex: getStaticIndex(loopIndexToShow),
                  loopIndexToShow,
                };
              })
              .map(({ staticIndex, loopIndexToShow }, index) => (
                <div
                  className={styles.slide_content}
                  style={{ width: `${slideWidth}px` }}
                  key={loopIndexToShow}
                >
                  <img
                    style={{ width: `${slideWidth}px` }}
                    src={slideItems[staticIndex]}
                    alt="slideContent"
                  />
                </div>
              ))}
          </div>
        </div>
        <div className={styles.slide_operation}>
          <button
            className={`${styles.slide_btn} ${styles.prev}`}
            onClick={() => setCurrentLoopIdx(currentLoopIdx - 1)}
          >
            <IoIosArrowBack color="white" />
          </button>
          <ul className={styles.dots}>
            {[...Array(size)].map((n, index) => (
              <li
                key={index}
                className={
                  getStaticIndex(currentLoopIdx) === index
                    ? `${styles.dot} ${styles.dot_selected}`
                    : styles.dot
                }
                onClick={() => setCurrentLoopIdx(getNearestLoopIndex(index))}
              ></li>
            ))}
          </ul>
          <button
            className={`${styles.slide_btn} ${styles.next}`}
            onClick={() => setCurrentLoopIdx(currentLoopIdx + 1)}
          >
            <IoIosArrowForward color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
