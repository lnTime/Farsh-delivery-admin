import React from "react";
import { BlackButtonUI } from "../ui/BlackButtonUI";

export const BlackButtonContainer = ({text, disabled}) => {
  return <BlackButtonUI text = {text} disabled={disabled}/>;
};
