import React from "react";
import styles from "../ui/blackButtonModule.scss";

export const BlackButtonUI = ({text}) => {
  return <button className={styles["BlackButton BlackButton_right"]}>{text}</button>;
};
