import React from "react";
import "./VehicleForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import { Field, reduxForm } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";
import { BlackButtonContainer } from "../../../../common/buttons/BlackButton/functional/BlackButtonContainer";

export const VehicleFormUI = ({
  plateNumber,
  model,
  make,
  registeredCountry,
  state,
  city,
  registrationNumber,
  mvpi,
  isEdit,
  handleClick,
  handleSubmit
}) => {
  return (
    <form onSubmit = {handleSubmit}>
      <div className="ProfileForm VehicleForm">
        <FormHeaderContainer
          isEdit={isEdit}
          handleClick={handleClick}
          formName="Vehicle"
        />
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">Plate number</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                name="plateNumber"
                type="text"
                data-defaultvalue = {plateNumber}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{plateNumber}</span>
            )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">Model</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                name="model"
                type="text"
                data-defaultvalue = {model}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{model}</span>
            )}
          </div>
        </div>
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">Make</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                name="make"
                type="text"
                data-defaultvalue = {make}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{make}</span>
            )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">
              Registered Country
            </span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                name="registeredCountry"
                type="text"
                data-defaultvalue = {registeredCountry}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">
                {registeredCountry}
              </span>
            )}
          </div>
        </div>
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">State</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                name="state"
                type="text"
                data-defaultvalue = {state}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{state}</span>
            )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">City</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                name="city"
                type="text"
                data-defaultvalue = {city}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{city}</span>
            )}
          </div>
        </div>
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">Registration No.</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                name="registrationNumber"
                type="text"
                data-defaultvalue = {registrationNumber}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">
                {registrationNumber}
              </span>
            )}

          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">MVPI No.</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                name="mvpi"
                type="text"
                data-defaultvalue = {mvpi}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{mvpi}</span>
            )}
          </div>
        </div>
          {isEdit ? <BlackButtonContainer text = 'Save'/> : null}
      </div>
    </form>
  );
};
export default reduxForm({
  form: "editForm",
})(VehicleFormUI);
