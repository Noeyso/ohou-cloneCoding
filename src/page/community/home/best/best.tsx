import React, { useState } from "react";
import styles from "./best.module.css";
import {
  acceptance,
  all,
  appliances,
  camping,
  child,
  conimal,
  dailyNecessity,
  deco,
  diy,
  fabric,
  furniture,
  houseGoods,
  indoorExercise,
  interior,
  kitchen,
  light,
  rental,
} from "./itemData";
import { IoIosArrowForward } from "react-icons/io";

type Menu = {
  img: string;
  title: string;
  sale: number;
  price: number;
};
function Best() {
  const [items, setItems] = useState<Array<Menu>>(all);
  const [menu, setMenu] = useState("all");

  function setRank(menu: string) {
    switch (menu) {
      case "all":
        setItems(all);
        setMenu("all");
        break;
      case "furniture":
        setItems(furniture);
        setMenu("furniture");
        break;
      case "fabric":
        setItems(fabric);
        setMenu("fabric");
        break;
      case "light":
        setItems(light);
        setMenu("light");
        break;
      case "appliances":
        setItems(appliances);
        setMenu("appliances");
        break;
      case "kitchen":
        setItems(kitchen);
        setMenu("kitchen");
        break;
      case "deco":
        setItems(deco);
        setMenu("deco");
        break;
      case "acceptance":
        setItems(acceptance);
        setMenu("acceptance");
        break;
      case "houseGoods":
        setItems(houseGoods);
        setMenu("houseGoods");
        break;
      case "dailyNecessity":
        setItems(dailyNecessity);
        setMenu("dailyNecessity");
        break;
      case "diy":
        setItems(diy);
        setMenu("diy");
        break;
      case "interior":
        setItems(interior);
        setMenu("interior");
        break;
      case "conimal":
        setItems(conimal);
        setMenu("conimal");
        break;
      case "camping":
        setItems(camping);
        setMenu("camping");
        break;
      case "indoorExercise":
        setItems(indoorExercise);
        setMenu("indoorExercise");
        break;
      case "child":
        setItems(child);
        setMenu("child");
        break;
      case "rental":
        setItems(rental);
        setMenu("rental");
        break;
    }
  }
  return (
    <section className="container">
      <div className={styles.header}>
        <h2>베스트</h2>
      </div>
      <ul className={styles.menu}>
        <li
          className={menu !== "all" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("all")}
        >
          전체
        </li>
        <li
          className={menu !== "furniture" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("furniture")}
        >
          가구
        </li>
        <li
          className={menu !== "fabric" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("fabric")}
        >
          패브릭
        </li>
        <li
          className={menu !== "light" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("light")}
        >
          조명
        </li>
        <li
          className={menu !== "appliances" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("appliances")}
        >
          가전
        </li>
        <li
          className={menu !== "kitchen" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("kitchen")}
        >
          주방용품
        </li>
        <li
          className={menu !== "deco" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("deco")}
        >
          데코/식물
        </li>
        <li
          className={menu !== "acceptance" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("acceptance")}
        >
          수납/정리
        </li>
        <li
          className={menu !== "houseGoods" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("houseGoods")}
        >
          생활용품
        </li>
        <li
          className={
            menu !== "dailyNecessity" ? styles.menu_item : styles.clicked
          }
          onClick={() => setRank("dailyNecessity")}
        >
          생필품
        </li>
        <li
          className={menu !== "diy" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("diy")}
        >
          공구/DIY
        </li>
        <li
          className={menu !== "interior" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("interior")}
        >
          인테리어시공
        </li>
        <li
          className={menu !== "conimal" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("conimal")}
        >
          반려동물
        </li>
        <li
          className={menu !== "camping" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("camping")}
        >
          캠핑용품
        </li>
        <li
          className={
            menu !== "indoorExercise" ? styles.menu_item : styles.clicked
          }
          onClick={() => setRank("indoorExercise")}
        >
          실내운동
        </li>
        <li
          className={menu !== "child" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("child")}
        >
          유아/아동
        </li>
        <li
          className={menu !== "rental" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("rental")}
        >
          렌탈
        </li>
      </ul>
      <section>
        <ul className={styles.list}>
          {items.map((item) => (
            <li>
              <div className={styles.img_container}>
                <img src={item.img} alt="" />
              </div>
              <span>{item.title}</span>
              <div>
                <span>{item.sale > 0 ? `${item.sale}%` : ""}</span>
                <span>{item.price}</span>
              </div>
            </li>
          ))}
          <li className={styles.more_container}>
            <div className={styles.more}>
              <span>베스트셀러 더보기</span>
              <button className={styles.arrow}>
                <IoIosArrowForward size="1.5rem" />
              </button>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Best;
