import React, { useState } from "react";
import Bubble from "../bubble/bubble";
import CoffeeMenu from "../coffeeMenu/coffeeMenu";
import SayingStaff from "../sayingStaff/sayingStaff";
import styles from "./orderCoffee.module.css";
import iceCoffee from "../../common/images/iceCoffee.png";

function OrderCoffee() {
  const [coffee, setCoffee] = useState("");
  const [shot, setShot] = useState(1);
  const [sirup, setSirup] = useState(0);
  function selectCoffee(coffee: string) {
    setCoffee(coffee);
  }
  function addShot(num: number) {
    if (!(shot == 1 && num == -1)) {
      setShot(shot + num);
    }
  }
  function addSirup(num: number) {
    if (!(sirup == 0 && num == -1)) {
      setSirup(sirup + num);
    }
  }
  function selectOption() {}
  return (
    <div className={styles.container}>
      <div className={styles.staff}>
        <SayingStaff
          text={
            coffee === ""
              ? `안녕하세요~ Cafe입니다.\n메뉴보고 주문해주세요^^`
              : `${coffee} 주문받았습니다. \n 옵션을 선택해주세요~`
          }
        />
      </div>
      {coffee === "" ? (
        <div className={styles.menu}>
          <CoffeeMenu selectCoffee={selectCoffee} />
        </div>
      ) : (
        <Bubble
          text={
            <div>
              <ul className={styles.options}>
                <li>
                  아이스
                  <div>
                    <img className={styles.ice} src={iceCoffee} />
                  </div>
                </li>
                <li>
                  샷
                  <div>
                    <button
                      className={styles.minus}
                      onClick={() => addShot(-1)}
                    >
                      -
                    </button>
                    {shot}
                    <button className={styles.plus} onClick={() => addShot(1)}>
                      +
                    </button>
                  </div>
                </li>
                <li>
                  시럽
                  <div>
                    <button
                      className={styles.minus}
                      onClick={() => addSirup(-1)}
                    >
                      -
                    </button>
                    {sirup}
                    <button className={styles.plus} onClick={() => addSirup(1)}>
                      +
                    </button>
                  </div>
                </li>
                <li>
                  <button onClick={selectOption}>선택완료</button>
                </li>
              </ul>
            </div>
          }
        />
      )}
    </div>
  );
}

export default OrderCoffee;
