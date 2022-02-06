import React, { CSSProperties, useState } from "react";
import styles from "./homeCategory.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function HomeCategory() {
  const menuItems = [
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/164333421927911367.png?gif=1&w=180&h=180&c=c",
      text: "가구",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823225115177697.png?gif=1&w=144&h=144&c=c 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823225115177697.png?gif=1&w=180&h=180&c=c 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823225115177697.png?gif=1&w=256&h=256&c=c 3x",
      text: "패브릭",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823225665741013.png?gif=1&w=180&h=180&c=c",
      text: "조명",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823226017937426.png?gif=1&w=144&h=144&c=c",
      text: "가전",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823226903946200.png?gif=1&w=144&h=144&c=c",
      text: "주방용품",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823227719846773.png?gif=1&w=144&h=144&c=c",
      text: "데코/식물",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823228178967968.png?gif=1&w=144&h=144&c=c",
      text: "수납/정리",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/163609843911228804.png?gif=1&w=144&h=144&c=c",
      text: "생활용품",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/164333398177552131.png?gif=1&w=144&h=144&c=c",
      text: "서랍/수납장",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/163575474448469686.png?gif=1&w=144&h=144&c=c",
      text: "생필품",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823230480918647.png?gif=1&w=144&h=144&c=c",
      text: "공구/DIY",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823230908544036.png?gif=1&w=144&h=144&c=c",
      text: "인테리어시공",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823231401891024.png?gif=1&w=144&h=144&c=c",
      text: "반려동물",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823242317048198.png?gif=1&w=144&h=144&c=c",
      text: "캠핑용품",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823231949249287.png?gif=1&w=144&h=144&c=c",
      text: "실내운동",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/164148743817769527.png?gif=1&w=144&h=144&c=c",
      text: "렌탈",
    },
  ];
  const [interval, setInterval] = useState(0);
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
      setRemain(temp + 560);
      setStyle({ marginLeft: `${-(temp - 560)}px` });
    } else {
      setTemp(0);
      setRemain(remain + temp);
      setStyle({ marginLeft: `${0}px` });
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.category}>
        <h2>카테고리별 상품 찾기</h2>
        <div className={styles.carousel}>
          <div className={styles.list_prev}>
            <button className={`${styles.move_btn} ${styles.left}`}>
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
            <button className={`${styles.move_btn} ${styles.right}`}>
              <IoIosArrowForward color="#fff" size="1rem" onClick={moveNext} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomeCategory;
