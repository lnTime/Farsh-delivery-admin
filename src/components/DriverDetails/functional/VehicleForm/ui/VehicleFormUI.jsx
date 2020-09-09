import React  from "react";
import "./VehicleForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import { Field, reduxForm } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";
import { BlackButtonContainer } from "../../../../common/buttons/BlackButton/functional/BlackButtonContainer";
import {SelectFieldContainer} from "../../../../common/inputs/SelectField/functional/SelectFieldContainer";
import {validators} from "../../../../../utils/validators/validators";

export const VehicleFormUI = ({isEdit,
  handleClick,
  handleSubmit,
  vehicle = {},
  address,
  customStateChange,
  customCountryChange
}) => {
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
                <span className="ProfileInfoBlock-InputValue">{vehicle?.vehiclePlateNumber}</span>
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
                <span className="ProfileInfoBlock-InputValue">{vehicle?.vehicleModel}</span>
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
                <span className="ProfileInfoBlock-InputValue">{vehicle?.vehicleMake}</span>
              )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">
              Registered Country
            </span>
            {isEdit ? (
              <Field
                data-halfwidth
                name="registeredCountry"
                placeholder="Registered country"
                component={SelectFieldContainer}
                customOnChange={customCountryChange}
                options={address.countries}
                validate={[validators.required]}
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
                data-halfwidth
                name="state"
                component={SelectFieldContainer}
                customOnChange={customStateChange}
                options={address.states}
                placeholder="State"
                validate={[validators.required]}
              />
            ) : (
                <span className="ProfileInfoBlock-InputValue">State</span>
              )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">City</span>
            {isEdit ? (
              <Field
                data-halfwidth
                name="city"
                component={SelectFieldContainer}
                options={address.cities}
                placeholder="City"
                validate={[validators.required]}
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
                  {vehicle?.vehicleRegistrationNumber}
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
                <span className="ProfileInfoBlock-InputValue">{vehicle?.mvpiNumber}</span>
              )}
          </div>
        </div>
        {isEdit ? <BlackButtonContainer text="Save" /> : null}
      </div>
    </form>
  );
};
export default reduxForm({
  form: "vehicleEditForm",
})(VehicleFormUI);
