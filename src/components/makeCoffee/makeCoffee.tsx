import React, { useEffect, useState } from "react";
import styles from "./makeCoffee.module.css";
import Barista from "../../common/images/barista.png";
import Grinder from "../../common/images/coffeeGrinder.png";
import HeatUp from "../../common/images/coffeeMachine.png";
import ExtractShot from "../../common/images/extractShot.png";
import Steamer from "../../common/images/steamer.png";
import MilkFoam from "../../common/images/milkFoam.png";
import AddMilk from "../../common/images/addMilk.png";
import AddWater from "../../common/images/pourWater.png";
import Caramel from "../../common/images/caramelSyrup.png";
import Choco from "../../common/images/chocoSyrup.png";
import IceCoffee from "../../common/images/iceCoffee.png";
import SayingStaff from "../sayingStaff/sayingStaff";
import Button from "../common/button/button";
type MetaData = {
  img: string;
  des: string;
};
interface Props {
  order: CoffeeOrder | undefined;
  goHome(): void;
}
/*
- 에스프레소 : 원두 갈기 → 머신 예열 → 샷 추출  → 커피완성
- 아메리카노 : 원두 갈기 → 머신 예열 → 샷 추출 → 물 추가 →  커피 완성
- 카페라떼  : 원두 갈기 → 머신 예열 → 샷 추출 → 우유 스팀하기 → 우유 추가 → 커피 완성
- 카푸치노  : 원두 갈기 → 머신 예열 → 샷 추출 → 우유 스팀하기 → 우유 추가 →  커피 완성
- 카페모카  : 원두 갈기 → 머신 예열 → 샷 추출 →  초코시럽 추가 → 우유 스팀하기 → 우유 추가 → 우유거품 추가→ 커피 완성
- 마끼아토  : 원두 갈기 → 머신 예열 → 샷 추출 → 우유 스팀하기 → 우유 추가 →  카라멜 시럽 추가 → 커피 완성
 */
function MakeCoffee({ order, goHome }: Props) {
  const base: MetaData[] = [
    { img: Grinder, des: "커피콩 가는중..." },
    { img: HeatUp, des: "커피머신 예열중.." },
    { img: ExtractShot, des: `${order?.shot}개의 샷 추출중...` },
  ];
  const milk: MetaData[] = [
    { img: Steamer, des: "우유 스팀 중..." },
    { img: AddMilk, des: "우유 추가.." },
  ];
  const [isDone, setIsDone] = useState(false);
  const [comment, setComment] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    switch (order?.coffee) {
      case "Espresso":
        makeCoffee(base);
        break;
      case "Americano":
        makeCoffee(
          base.concat({ img: AddWater, des: "물을 추가하고 있습니다.." })
        );
        break;
      case "CafeLatte":
        makeCoffee(base.concat(milk));
        break;
      case "Cappuccino":
        makeCoffee(
          base.concat(milk, {
            img: MilkFoam,
            des: "우유거품을 추가하고 있습니다..",
          })
        );
        break;
      case "CafeMocha":
        makeCoffee(
          base.concat(
            { img: Choco, des: "초코시럽을 추가하고 있습니다.." },
            milk
          )
        );
        break;
      case "Macchiato":
        makeCoffee(
          base.concat(
            { img: Caramel, des: "카라멜시럽을 추가하고 있습니다.." },
            milk
          )
        );
        break;
      default:
        throw new Error("wrong coffee type");
    }
  }, []);

  return (
    <section className={styles.container}>
      {!isDone && (
        <span className={styles.title}>
          주문하신 {order?.coffee}를 만들고 있습니다,,
        </span>
      )}
      {!isDone ? (
        <div className={styles.process}>
          <img className={styles.img} src={img} alt="img" />
          <span className={styles.comment}>{comment}</span>
        </div>
      ) : (
        <div className={styles.process}>
          <SayingStaff
            img={Barista}
            text={`주문하신 ${order?.coffee} 나왔습니다~^^`}
          />
          <Button text={"홈으로"} onClick={goHome} />
        </div>
      )}
    </section>
  );

  function makeCoffee(process: MetaData[]) {
    let time = 0;
    if (order?.ice) {
      setTimeout(() => {
        setImg(IceCoffee);
        setComment("컵에 얼음을 담습니다.");
      }, time);
      time += 2000;
    }
    if (order?.ice) {
      setTimeout(() => {
        setImg(Caramel);
        setComment(`컵에 시럽을 ${order?.syrup}번 추가합니다.`);
      }, time);
      time += 2000;
    }
    process.forEach((item) => {
      setTimeout(() => {
        setImg(item.img);
        setComment(item.des);
      }, time);
      time += 2000;
    });
    process.forEach((item) => {
      setTimeout(() => {
        setIsDone(true);
      }, time);
      time += 2000;
    });
  }
}

export default MakeCoffee;
