import React, { useEffect, useState } from "react";
import styles from "./makeCoffee.module.css";
import Grinder from "../../common/images/grinder.png";
import HeatUp from "../../common/images/heating.png";
import CoffeeMachine from "../../common/images/coffeeMachine.png";
import Milk from "../../common/images/milk.png";
import Choco from "../../common/images/syrup.png";
import IceCream from "../../common/images/affogato.png";
import Barista from "../../common/images/barista.png";

interface Props {
  coffee: CoffeeCup;
  coffeeName: string;
}
function MakeCoffee({ coffee, coffeeName }: Props) {
  const [process, setProcess] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [comment, setComment] = useState("");
  const [img, setImg] = useState("");
  useEffect(() => {
    runMachine("커피콩을 갈고 있습니다...", Grinder, 0);
    runMachine("커피머신을 예열중입니다..", HeatUp, 2000);
    runMachine(
      `${coffee.shots}개의 샷을 추출하고 있습니다..`,
      CoffeeMachine,
      4000
    );
    console.log(coffeeName);
    switch (coffeeName) {
      case "Americano":
        serveCoffee(6000);
        break;
      case "CafeLatte":
        runMachine("우유를 추가하고 있습니다..", Milk, 6000);
        serveCoffee(8000);
        break;
      case "CafeMocha":
        runMachine("초코시럽을 추가하고 있습니다..", Choco, 6000);
        serveCoffee(8000);
        break;
      case "Affogato":
        runMachine("아이스크림을 추가하고 있습니다..", IceCream, 6000);
        serveCoffee(8000);
        break;
      default:
        throw new Error("wrong coffee type");
    }
  }, []);

  function runMachine(text: string, image: string, time: number) {
    setTimeout(() => {
      setImg(image);
      setComment(text);
    }, time);
  }
  function serveCoffee(time: number) {
    setTimeout(() => {
      setIsDone(true);
      setImg(Barista);
      setComment("주문하신 커피 나왔습니다^^");
    }, time);
  }

  return (
    <section className={styles.container}>
      {!isDone && (
        <span className={styles.title}>
          주문하신 {coffeeName}을(를) 만들고 있어요!
        </span>
      )}
      <img className={styles.img} src={img} alt="img" />
      <span className={styles.comment}>{comment}</span>
    </section>
  );
}
export default MakeCoffee;
