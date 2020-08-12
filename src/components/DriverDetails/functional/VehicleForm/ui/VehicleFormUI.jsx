import React, { useEffect } from "react";
import "./VehicleForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import { Field, reduxForm, initialize } from "redux-form";
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
  handleSubmit,
  initialize
}) => {
  useEffect(() =>
    initialize({
      plateNumber: plateNumber,
      model: model,
      make: make,
      registeredCountry: registeredCountry,
      state: state,
      city: city,
      registrationNumber: registrationNumber,
      mvpi: mvpi,
    }),[]
  );
  return (
    <form onSubmit={handleSubmit}>
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
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{mvpi}</span>
            )}
          </div>
        </div>
        {isEdit ? <BlackButtonContainer text="Save" /> : null}
      </div>
    </form>
  );
};
export default reduxForm({
  form: "editForm",
})(VehicleFormUI);
