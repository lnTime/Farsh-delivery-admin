import React from "react";

export const TextFieldUI = (props) => {
  return (
    <div className="InputBlock">
      <input className="Login-Input" {...props} />
      <span className="Login-Placeholder">{props.type}</span>
    </div>
  );
};
