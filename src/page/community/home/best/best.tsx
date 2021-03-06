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
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>?????????</h2>
      </div>
      <ul className={styles.menu}>
        <li
          className={menu !== "all" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("all")}
        >
          ??????
        </li>
        <li
          className={menu !== "furniture" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("furniture")}
        >
          ??????
        </li>
        <li
          className={menu !== "fabric" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("fabric")}
        >
          ?????????
        </li>
        <li
          className={menu !== "light" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("light")}
        >
          ??????
        </li>
        <li
          className={menu !== "appliances" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("appliances")}
        >
          ??????
        </li>
        <li
          className={menu !== "kitchen" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("kitchen")}
        >
          ????????????
        </li>
        <li
          className={menu !== "deco" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("deco")}
        >
          ??????/??????
        </li>
        <li
          className={menu !== "acceptance" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("acceptance")}
        >
          ??????/??????
        </li>
        <li
          className={menu !== "houseGoods" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("houseGoods")}
        >
          ????????????
        </li>
        <li
          className={
            menu !== "dailyNecessity" ? styles.menu_item : styles.clicked
          }
          onClick={() => setRank("dailyNecessity")}
        >
          ?????????
        </li>
        <li
          className={menu !== "diy" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("diy")}
        >
          ??????/DIY
        </li>
        <li
          className={menu !== "interior" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("interior")}
        >
          ??????????????????
        </li>
        <li
          className={menu !== "conimal" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("conimal")}
        >
          ????????????
        </li>
        <li
          className={menu !== "camping" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("camping")}
        >
          ????????????
        </li>
        <li
          className={
            menu !== "indoorExercise" ? styles.menu_item : styles.clicked
          }
          onClick={() => setRank("indoorExercise")}
        >
          ????????????
        </li>
        <li
          className={menu !== "child" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("child")}
        >
          ??????/??????
        </li>
        <li
          className={menu !== "rental" ? styles.menu_item : styles.clicked}
          onClick={() => setRank("rental")}
        >
          ??????
        </li>
      </ul>
      <section>
        <div className={styles.list_container}>
          <ul className={styles.list}>
            {items.map((item) => (
              <li>
                <div className={styles.img_container}>
                  <img src={item.img} alt="" />
                </div>
                <div className={styles.product_info}>
                  <span className={styles.title}>{item.title}</span>
                  <div className={styles.item_price}>
                    <span className={styles.sale}>
                      {item.sale > 0 ? `${item.sale}%` : ""}
                    </span>
                    <span className={styles.price}>
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.more}>
            <div className={styles.more_container}>
              <div className={styles.more_content}>
                <span>??????????????? ?????????</span>
                <button className={styles.arrow}>
                  <IoIosArrowForward size="1.5rem" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Best;
