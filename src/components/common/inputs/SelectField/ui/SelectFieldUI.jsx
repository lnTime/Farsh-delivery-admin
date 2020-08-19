import React from "react";
import "./SelectField.scss";

export const SelectFieldUI = React.memo(({ input, ...custom }) => {
  return (
   
      <label>
        <select {...input} onChange={e => {
          if (custom.customOnChange) {
            custom.customOnChange(e.target.value);
          }
          input.onChange(e.target.value);
        }} className="Select-Block">
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

  )
})
