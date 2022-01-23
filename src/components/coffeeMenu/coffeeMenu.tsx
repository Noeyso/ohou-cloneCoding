import React, { useRef } from "react";
import styles from "./coffeeMenu.module.css";
import Coffee from "../../common/images/coffee.png";
import Milk from "../../common/images/milk.png";
import Sugar from "../../common/images/sugar.png";
interface Props {
  selectCoffee(coffee: string): void;
}
function CoffeeMenu({ selectCoffee }: Props) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Menu</h2>
      <ul className={styles.menu}>
        <div className={styles.page1}>
          <li
            className={styles.coffee}
            onClick={() => selectCoffee("Espresso")}
          >
            Espresso
          </li>
          <li
            className={styles.coffee}
            onClick={() => selectCoffee("Americano")}
          >
            Americano
          </li>
          <li
            className={styles.coffee}
            onClick={() => selectCoffee("CafeLatte")}
          >
            CafeLatte
          </li>
        </div>
        <div className={styles.page2}>
          <li
            className={styles.coffee}
            onClick={() => selectCoffee("CafeMocha")}
          >
            CafeMocha
          </li>
          <li
            className={styles.coffee}
            onClick={() => selectCoffee("Cappuccino")}
          >
            Cappuccino
          </li>
          <li
            className={styles.coffee}
            onClick={() => selectCoffee("Macchiato")}
          >
            Macchiato
          </li>
        </div>
      </ul>
    </section>
  );
}

export default CoffeeMenu;
