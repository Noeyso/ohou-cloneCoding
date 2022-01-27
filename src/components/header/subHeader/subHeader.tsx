import React from "react";
import styles from "./subHeader.module.css";
import Icon from "../../../common/images/icon.png";

interface Props {
  menu: string[];
}
function SubHeader({ menu }: Props) {
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {menu.map((menuItem, idx) => (
          <li key={idx}>{menuItem}</li>
        ))}
      </ul>
      <button>
        <img className={styles.icon} src={Icon} alt="icon" />
        3D인테리어
        <span>BETA</span>
      </button>
    </div>
  );
}

export default SubHeader;
