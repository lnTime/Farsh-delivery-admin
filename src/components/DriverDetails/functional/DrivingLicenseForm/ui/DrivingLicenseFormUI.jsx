import React, { useEffect } from "react";
import "./DrivingLicenseForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import front from "../../../../../assets/images/driving-license-front.png";
import back from "../../../../../assets/images/driving-license-back.png";
import { reduxForm, Field, initialize } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";
import { ChooseFileFieldContainer } from "../../../../common/inputs/ChooseFileField/functional/ChooseFileFieldContainer";
import { BlackButtonContainer } from "../../../../common/buttons/BlackButton/functional/BlackButtonContainer";

const DrivingLicenseFormUI = ({
  licenseType,
  licenseNumber,
  issueDate,
  expiryDate,
  issuingCountry,
  issuingAuthority,
  isEdit,
  handleClick,
  handleSubmit,
  initialize
}) => {
  useEffect(() => {
    initialize({
      licenseType: licenseType,
      licenseNumber: licenseNumber,
      issueDate: issueDate,
      expiryDate: expiryDate,
      issuingCountry: issuingCountry,
      issuingAuthority: issuingAuthority,
    });
  });
  return (
    <form onSubmit={handleSubmit}>
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
            {isEdit ? (
              <Field
                component={ChooseFileFieldContainer}
                type="file"
                name="drivingLicenseFront"
              />
            ) : (
              <img alt="Driving License Front" src={front} />
            )}
            {isEdit ? (
              <Field
                component={ChooseFileFieldContainer}
                type="file"
                name="drivingLicenseBack"
              />
            ) : (
              <img alt="Driving License Back" src={back} />
            )}
          </div>
          {isEdit ? <BlackButtonContainer text="Save" /> : null}
        </div>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "edit",
})(DrivingLicenseFormUI);
