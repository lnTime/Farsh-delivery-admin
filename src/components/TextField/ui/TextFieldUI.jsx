import React from "react";

export const TextFieldUI = (props) => {
  return (
    <div className={`InputBlock ${props.className}`}>
      <input {...props} className="Login-Input"  />
      <span className="Login-Placeholder">{props.type}</span>
    </div>
  );
};
