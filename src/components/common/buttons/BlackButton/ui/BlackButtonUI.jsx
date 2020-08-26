import React from "react";
import styles from "./BlackButton.module.scss";

export const BlackButtonUI = ({text, disabled}) => {
  return <button disabled={disabled} className={styles["BlackButton"]}>{text}</button>;
};
