import React from "react";
import styles from "../ui/BlackButtonModule.scss";

export const BlackButtonUI = ({text}) => {
  return <button className={styles["BlackButton BlackButton_right"]}>{text}</button>;
};
