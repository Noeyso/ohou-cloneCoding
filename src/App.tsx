import React, { useRef, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import MakeCoffee from "./components/makeCoffee/makeCoffee";
import OrderCoffee from "./components/orderCoffee/orderCoffee";
import Door from "./common/images/door.png";
import DoorOpen from "./common/images/doorOpen.png";
import Bgm from "./common/sound/bgm.mp3";

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [isIn, setIsIn] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  const [order, setOrder] = useState<CoffeeOrder | undefined>();
  const audioRef = useRef<HTMLAudioElement>(null);

  function receiveOrder(coffee: CoffeeOrder) {
    setIsOrder(true);
    setOrder(coffee);
  }
  function goHome() {
    setIsOrder(false);
  }

  function enter() {
    setIsIn(true);
    playMusic();
  }

  function playMusic() {
    setIsPlay(true);
    audioRef.current!.play();
  }
  function stopMusic() {
    setIsPlay(false);
    audioRef.current!.pause();
  }

  return (
    <div className={styles.container}>
      <Header isPlay={isPlay} playMusic={playMusic} stopMusic={stopMusic} />
      <audio ref={audioRef} src={Bgm} />
      {!isIn ? (
        <div className={styles.out}>
          <div className={styles.entrance}>
            <img className={styles.door} src={Door} alt="door" />
            <img
              className={styles.doorOpen}
              src={DoorOpen}
              alt="doorOpen"
              onClick={enter}
            />
          </div>
        </div>
      ) : !isOrder ? (
        <OrderCoffee receiveOrder={receiveOrder} /> //
      ) : (
        <MakeCoffee order={order} goHome={goHome} />
      )}
    </div>
  );
}

export default App;
