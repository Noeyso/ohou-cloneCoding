import React, { useRef } from "react";
import styles from "./coffeeMenu.module.css";
import Coffee from "../../common/images/coffee.png";
import Milk from "../../common/images/milk.png";
import Sugar from "../../common/images/sugar.png";
interface Props {
  coffees: string[];
  selectCoffee(coffee: string): void;
}
function CoffeeMenu({ selectCoffee, coffees }: Props) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Menu</h2>
      <ul className={styles.menu}>
        {coffees.map((coffee, idx) => (
          <li
            key={idx}
            className={styles.coffee}
            onClick={() => selectCoffee(coffee)}
          >
            {coffee}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CoffeeMenu;
