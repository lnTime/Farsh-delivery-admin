import React from "react";
import "./FormHeader.scss";
import { EditContainer } from "../../../../common/icons/Edit/functional/EditContainer";

export const FormHeaderUI = ({ formName, handleClick, isEdit }) => {
  return (
    <div className="FormHeader">
      <div className="FormHeaderWrapper">
        <span className="FormHeader-FormName">{formName}</span>
        <div className="Icon-Span-Wrapper" onClick={handleClick}>
          <EditContainer isEdit={isEdit} />
          <span className="FormHeader-Edit">Edit</span>
        </div>
      </div>
    </div>
  );
};
