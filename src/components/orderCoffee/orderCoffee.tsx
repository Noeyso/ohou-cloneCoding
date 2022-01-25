import React, { useState } from "react";
import Bubble from "../common/bubble/bubble";
import CoffeeMenu from "../coffeeMenu/coffeeMenu";
import SayingStaff from "../sayingStaff/sayingStaff";
import styles from "./orderCoffee.module.css";
import iceCoffee from "../../common/images/iceCoffee.png";
import Minus from "../../common/images/minus.png";
import Plus from "../../common/images/plus.png";
import Home from "../../common/images/home.png";
import Button from "../common/button/button";

interface Props {
  receiveOrder(coffee: object): void;
}
function OrderCoffee({ receiveOrder }: Props) {
  const coffees = [
    "Espresso",
    "Americano",
    "CafeLatte",
    "Cappuccino",
    "CafeMocha",
    "Machiato",
  ];
  const [coffee, setCoffee] = useState("");
  const [ice, setIce] = useState(false);
  const [shot, setShot] = useState(1);
  const [syrup, setSyrup] = useState(0);
  const [order, setOrder] = useState<CoffeeOrder>();
  function selectCoffee(coffee: string) {
    setCoffee(coffee);
  }
  function isIce() {
    setIce(!ice);
  }
  function addShot(num: number) {
    if (!(shot === 1 && num === -1)) {
      setShot(shot + num);
    }
  }
  function addSirup(num: number) {
    if (!(syrup === 0 && num === -1)) {
      setSyrup(syrup + num);
    }
  }
  function selectOption() {
    setOrder({ coffee, shot, syrup, ice });
  }
  function retry() {
    setOrder(undefined);
  }
  function orderCoffee() {
    receiveOrder({ coffee, shot, syrup, ice });
  }
  function goHome() {
    setCoffee("");
  }
  return (
    <section className={styles.container}>
      <div className={styles.staffSay}>
        <SayingStaff
          text={
            coffee === ""
              ? `안녕하세요~ Cafe입니다.\n메뉴보고 주문해주세요^^`
              : order === undefined
              ? `${coffee} 주문받았습니다. \n 옵션을 선택해주세요~`
              : `${coffee}  샷 ${shot}개  시럽 ${syrup}번  ${
                  ice ? "Ice로" : "Hot으로"
                }\n 주문하시겠어요?`
          }
        />
      </div>
      <section className={styles.customerSay}>
        {coffee !== "" && (
          <button className={styles.goHome} onClick={goHome}>
            <img className={styles.home} src={Home} alt="home" />
          </button>
        )}

        {coffee === "" ? (
          <div className={styles.menu}>
            <CoffeeMenu coffees={coffees} selectCoffee={selectCoffee} />
          </div>
        ) : order === undefined ? (
          <Bubble
            text={
              <div className={styles.selectOption}>
                <ul className={styles.options}>
                  <li className={styles.option}>
                    <p>아이스</p>
                    <button
                      className={ice ? styles.ice_btn_clicked : styles.ice_btn}
                      onClick={isIce}
                    >
                      <img className={styles.ice} src={iceCoffee} alt="ice" />
                    </button>
                  </li>
                  <li className={styles.option}>
                    <p>샷</p>
                    <div className={styles.buttons}>
                      <button onClick={() => addShot(-1)}>
                        <img className={styles.ctrl} src={Minus} alt="minus" />
                      </button>
                      {shot}
                      <button onClick={() => addShot(1)}>
                        <img className={styles.ctrl} src={Plus} alt="plus" />
                      </button>
                    </div>
                  </li>
                  <li className={styles.option}>
                    <p>시럽</p>
                    <div className={styles.buttons}>
                      <button onClick={() => addSirup(-1)}>
                        <img className={styles.ctrl} src={Minus} alt="minus" />
                      </button>
                      {syrup}
                      <button onClick={() => addSirup(1)}>
                        <img className={styles.ctrl} src={Plus} alt="plus" />
                      </button>
                    </div>
                  </li>
                  <li className={`${styles.option} ${styles.select}`}>
                    <Button text={"선택완료"} onClick={selectOption} />
                  </li>
                </ul>
              </div>
            }
          />
        ) : (
          <Bubble
            text={
              <div>
                <Button text={"네"} color={"#a4d0ab"} onClick={orderCoffee} />
                <Button text={"다시추가할래요"} onClick={retry} />
              </div>
            }
          />
        )}
      </section>
    </section>
  );
}

export default OrderCoffee;
