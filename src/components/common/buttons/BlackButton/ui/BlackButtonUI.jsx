import React from "react";
import styles from "./BlackButtonModule.scss";

export const BlackButtonUI = ({text, disabled}) => {
  return <button disabled={disabled} className={styles["BlackButton BlackButton_right"]}>{text}</button>;
};
