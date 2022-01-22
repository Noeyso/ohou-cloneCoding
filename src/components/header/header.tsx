import React from "react";
import styles from "./header.module.css";
import Logo from "../../common/images/logo.png";
function Header() {
  return (
    <header className={styles.container}>
      <h2>Cafe</h2>
      <img className={styles.img} src={Logo} alt="logo" />
    </header>
  );
}
export default Header;
