import React from "react";
import "./SelectField.scss";

export const SelectFieldUI = ({ input, ...custom }) => {
    


  return (
    <div className="Select-Div">
      <label>
        <select {...input} className="Select-Block">
          {custom.placeholder ? (
            <option value="" disabled hidden>
              {custom.placeholder}
            </option>
          ) : null}
          {custom.options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
