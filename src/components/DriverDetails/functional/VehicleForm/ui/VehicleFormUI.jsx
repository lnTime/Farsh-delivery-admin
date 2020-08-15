import React, { useEffect } from "react";
import "./VehicleForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import { Field, reduxForm } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";
import { BlackButtonContainer } from "../../../../common/buttons/BlackButton/functional/BlackButtonContainer";

export const VehicleFormUI = ({ isEdit,
  handleClick,
  handleSubmit,
  initialize,
  vehicle
}) => {
  useEffect(() => {
    initialize({ ...vehicle })
  }, [initialize, vehicle]);

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
                name="vehiclePlateNumber"
                type="text"
              />
            ) : (
                <span className="ProfileInfoBlock-InputValue">{vehicle.vehiclePlateNumber}</span>
              )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">Model</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                name="vehicleModel"
                type="text"
              />
            ) : (
                <span className="ProfileInfoBlock-InputValue">{vehicle.vehicleModel}</span>
              )}
          </div>
        </div>
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">Make</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                name="vehicleMake"
                type="text"
              />
            ) : (
                <span className="ProfileInfoBlock-InputValue">{vehicle.vehicleMake}</span>
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
                  SA
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
                <span className="ProfileInfoBlock-InputValue">State</span>
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
                <span className="ProfileInfoBlock-InputValue">City</span>
              )}
          </div>
        </div>
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">Registration No.</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                name="vehicleRegistrationNumber"
                type="text"
              />
            ) : (
                <span className="ProfileInfoBlock-InputValue">
                  {vehicle.vehicleRegistrationNumber}
                </span>
              )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">MVPI No.</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                name="mvpiNumber"
                type="text"
              />
            ) : (
                <span className="ProfileInfoBlock-InputValue">{vehicle.mvpiNumber}</span>
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
