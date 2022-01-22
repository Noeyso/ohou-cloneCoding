import React from "react";
import styles from "./bubble.module.css";
interface Props {
  text: React.AllHTMLAttributes<HTMLDivElement>;
}

function Bubble({ text }: Props) {
  return <div className={styles.container}>{text}</div>;
}

export default Bubble;
