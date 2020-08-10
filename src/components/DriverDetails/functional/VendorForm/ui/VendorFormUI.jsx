import React from "react";
import "./VendorForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import { Field, reduxForm } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";

export const VendorFormUI = ({ vendor, isEdit, handleClick }) => {
  return (
      <form>
    <div className="VendorForm ProfileForm">
      <FormHeaderContainer
        isEdit={isEdit}
        handleClick={handleClick}
        formName="Vendor"
      />
      <div className="ProfileInfoBlock ProfileInfoBlock_oneItem">
        <span className="ProfileInfoBlock-InputName">Vendor</span>
        {
            isEdit ? (<Field component = {TextFieldContainer} type = "text" name = "vendor" placeholder = {vendor} />) : (
                <span className="ProfileInfoBlock-InputValue">{vendor}</span>
            )
        }
      </div>
    </div>
    </form>
  );
};
export default reduxForm({
    form:'editForm'
})(VendorFormUI);
