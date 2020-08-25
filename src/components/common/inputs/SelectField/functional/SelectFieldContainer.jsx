import React from "react";
import { SelectFieldUI } from "../ui/SelectFieldUI";
import '../ui/SelectField.scss';


export const SelectFieldContainer = (props) => {
  return (
    <div className = {`Select-Div ${props['data-fullWidth'] ? "Select-Div_fullWidth" : ''}`}>
      <SelectFieldUI {...props} />
    </div>
  )

};
