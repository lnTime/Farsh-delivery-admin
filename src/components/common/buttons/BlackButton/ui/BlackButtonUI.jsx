import React from "react";
import styles from "../ui/BlackButtonModule.scss";

export const BlackButtonUI = ({text, disabled}) => {
  return <button disabled={disabled} className={styles["BlackButton BlackButton_right"]}>{text}</button>;
};
