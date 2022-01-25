import React, { useRef } from "react";
import styles from "./coffeeMenu.module.css";
import BtnSound from "../../common/sound/buttonClick.mp3";

interface Props {
  coffees: string[];
  selectCoffee(coffee: string): void;
}
function CoffeeMenu({ selectCoffee, coffees }: Props) {
  const btnSound = new Audio(BtnSound);
  function select(coffee: string) {
    btnSound.play();
    selectCoffee(coffee);
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Menu</h2>
      <ul className={styles.menu}>
        {coffees.map((coffee, idx) => (
          <li
            key={idx}
            className={styles.coffee}
            onClick={() => select(coffee)}
          >
            {coffee}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CoffeeMenu;
