import React from "react";
import {FormHeaderUI} from "../ui/FormHeaderUI";

export const FormHeaderContainer = ({ formName, handleClick, isEdit }) => {
  return (
    <FormHeaderUI
      isEdit={isEdit}
      formName={formName}
      handleClick={handleClick}
    />
  );
};
