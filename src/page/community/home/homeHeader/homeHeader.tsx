import React, { useEffect, useRef } from "react";
import styles from "./homeHeader.module.css";
import User from "../../../../common/images/user.png";
import House from "../../../../common/images/banners/house.png";
import House1 from "../../../../common/images/banners/house1.png";
import House2 from "../../../../common/images/banners/house2.png";
import House3 from "../../../../common/images/banners/house3.png";
function HomeHeader() {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);
  const refArr = [inputRef1, inputRef2, inputRef3, inputRef4];

  useEffect(() => {
    inputRef1.current!.checked = true;
    let idx = 0;
    setInterval(function () {
      refArr[idx].current!.checked = true;
      idx++;
      if (idx > refArr.length - 1) {
        idx = 0;
      }
    }, 10000);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.top_story}>
        <img
          className={styles.top_story_img}
          src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164111427310602212.jpg?gif=1&w=2560"
          alt="story"
        />
        <div className={styles.content_wrap}>
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
      </div>

      <div className={styles.top_banner}>
        <div className={styles.banner}>
          <input ref={inputRef1} type="radio" name="radio-btn" id="radio1" />
          <input ref={inputRef2} type="radio" name="radio-btn" id="radio2" />
          <input ref={inputRef3} type="radio" name="radio-btn" id="radio3" />
          <input ref={inputRef4} type="radio" name="radio-btn" id="radio4" />

          <ul className={styles.slides}>
            <li className={styles.slide}>
              <img src={House} alt="house" />
            </li>
            <li className={styles.slide}>
              <img src={House1} alt="house" />
            </li>
            <li className={styles.slide}>
              <img src={House2} alt="house" />
            </li>
            <li className={styles.slide}>
              <img src={House3} alt="house" />
            </li>
          </ul>

          <div className={styles.navigation_auto}>
            <div className={styles.auto_btn1}></div>
            <div className={styles.auto_btn2}></div>
            <div className={styles.auto_btn3}></div>
            <div className={styles.auto_btn4}></div>
          </div>
        </div>
        <div className={styles.navigation_manual}>
          <label htmlFor="radio1" className={styles.manual_btn}></label>
          <label htmlFor="radio2" className={styles.manual_btn}></label>
          <label htmlFor="radio3" className={styles.manual_btn}></label>
          <label htmlFor="radio4" className={styles.manual_btn}></label>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
