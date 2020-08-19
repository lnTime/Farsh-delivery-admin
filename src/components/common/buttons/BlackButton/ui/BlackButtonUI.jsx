import React from "react";
import "../ui/BlackButton.scss";

export const BlackButtonUI = ({text, disabled}) => {
  return <button disabled={disabled} className="BlackButton BlackButton_right">{text}</button>;
};
