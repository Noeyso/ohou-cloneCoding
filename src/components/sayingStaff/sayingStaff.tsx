import React from "react";
import styles from "./sayingStaff.module.css";
import Employee from "../../common/images/employee.png";

interface Props {
  text: string;
}
function SayingStaff({ text }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.saying}>{text}</div>
      <img className={styles.employee} src={Employee} alt="staff" />
    </div>
  );
}

export default SayingStaff;
