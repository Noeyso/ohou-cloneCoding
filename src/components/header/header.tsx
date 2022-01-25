import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import Logo from "../../common/images/logo.png";
import Play from "../../common/images/play.png";
import Pause from "../../common/images/pause.png";
import Bgm from "../../common/sound/bgm.mp3";
interface Props {
  playMusic(): void;
  stopMusic(): void;
  isPlay: boolean;
}
function Header({ isPlay, playMusic, stopMusic }: Props) {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h2>Cafe</h2>
        <img className={styles.img} src={Logo} alt="logo" />
      </div>
      <div className={styles.music}>
        {isPlay ? (
          <button className={styles.musicButton} onClick={stopMusic}>
            <img className={styles.pause} src={Pause} alt="pause" />
            <span className={styles.text}>Music Stop</span>
          </button>
        ) : (
          <button className={styles.musicButton} onClick={playMusic}>
            <img className={styles.play} src={Play} alt="play" />
            <span className={styles.text}>Music Start</span>
          </button>
        )}
      </div>
    </header>
  );
}
export default Header;
