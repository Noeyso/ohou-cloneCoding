import React from "react";
import styles from "./sayingStaff.module.css";
import Employee from "../../common/images/employee.png";

interface Props {
  text: string;
  img?: string;
}
function SayingStaff({ text, img }: Props) {
  const staff: string = img || Employee;
  return (
    <div className={styles.container}>
      <div className={styles.saying}>{text}</div>
      <img className={styles.employee} src={staff} alt="staff" />
    </div>
  );
}

export default SayingStaff;
