import React from "react";
import "./VendorForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import { Field, reduxForm } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";
import { BlackButtonContainer } from "../../../../common/buttons/BlackButton/functional/BlackButtonContainer";

export const VendorFormUI = ({ vendor, isEdit, handleClick, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="VendorForm ProfileForm">
        <FormHeaderContainer
          isEdit={isEdit}
          handleClick={handleClick}
          formName="Vendor"
        />
        <div className="ProfileInfoBlock ProfileInfoBlock_oneItem">
          <span className="ProfileInfoBlock-InputName">Vendor</span>
          {isEdit ? (
            <Field
              component={TextFieldContainer}
              type="text"
              name="vendor"
              placeholder={vendor}
            />
          ) : (
            <span className="ProfileInfoBlock-InputValue">{vendor}</span>
          )}
          {isEdit ? <BlackButtonContainer text="Save" /> : null}
        </div>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "editForm",
})(VendorFormUI);
