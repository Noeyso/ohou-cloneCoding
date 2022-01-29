import React, { useState } from "react";
import styles from "./subHeader.module.css";
import Icon from "../../../common/images/icon.png";

interface Props {
  menu: string[];
}
function SubHeader({ menu }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  function clickMenu() {
    setIsClicked(true);
  }

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {menu.map((menuItem, idx) => (
          <li className={styles.menu_item} key={idx} onClick={clickMenu}>
            {menuItem}
          </li>
        ))}
      </ul>
      <button className={styles.interior_btn}>
        <img className={styles.icon} src={Icon} alt="icon" />
        <span className={styles.text}>3D인테리어</span>
        <span className={styles.tag}>BETA</span>
      </button>
    </div>
  );
}

export default SubHeader;
