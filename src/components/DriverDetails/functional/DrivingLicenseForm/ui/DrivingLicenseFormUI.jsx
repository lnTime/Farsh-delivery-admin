import React from "react";
import "./DrivingLicenseForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import front from "../../../../../assets/images/driving-license-front.png";
import back from "../../../../../assets/images/driving-license-back.png";
import { reduxForm, Field } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";

const DrivingLicenseFormUI = ({
  licenseType,
  licenseNumber,
  issueDate,
  expiryDate,
  issuingCountry,
  issuingAuthority,
  isEdit,
  handleClick,
}) => {
  return (
    <form>
      <div className="ProfileForm DrivingLicenseForm">
        <FormHeaderContainer
          isEdit={isEdit}
          handleClick={handleClick}
          formName="Driving License"
        />
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">License type</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                type="text"
                name="licenseType"
                placeholder={licenseType}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{licenseType}</span>
            )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">License number</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                type="text"
                name="licenseNumber"
                placeholder={licenseNumber}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">
                {licenseNumber}
              </span>
            )}
          </div>
        </div>
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">Issue date</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                type="text"
                name="issueDate"
                placeholder={issueDate}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{issueDate}</span>
            )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">Expiry date</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                type="text"
                name="expiryDate"
                placeholder={expiryDate}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{expiryDate}</span>
            )}
          </div>
        </div>
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">Issuing country</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                type="text"
                name="issuingCountry"
                placeholder={issuingCountry}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">
                {issuingCountry}
              </span>
            )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">
              Issuing Authority
            </span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                type="text"
                name="issuingAuthority"
                placeholder={issuingAuthority}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">
                {issuingAuthority}
              </span>
            )}
          </div>
        </div>
        <div className="ProfileInfoBlock ProfileInfoBlock_oneItem">
          <span className="ProfileInfoBlock-InputName">Driving License</span>
          <div className="ProfileInfoBlock-InputValue" id="idCard">
            <img alt="Driving License Front" src={front} />
            <img alt="Driving License Back" src={back} />
          </div>
        </div>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "edit",
})(DrivingLicenseFormUI);
