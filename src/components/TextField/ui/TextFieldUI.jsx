import React from "react";
import { Field } from "redux-form";

export const TextFieldUI = (props) => {
  return (
    <>
      <div className = 'Login-Input_block'>
        <input className="Login-Input" {...props} /> 
        <span className="Login-Placeholder">{props.type}</span>
      </div>
    </>
  );
};
