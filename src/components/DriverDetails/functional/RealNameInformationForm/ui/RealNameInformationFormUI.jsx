import React from "react";
import "./RealNameInformationForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import { IdCardContainer } from "../../../../common/icons/IdCard/functional/IdCardContainer";
import { Field, reduxForm } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";

 const RealNameInformationFormUI = ({
  passport,
  idNumber,
  issueDate,
  expiryDate,
  issuingCountry,
  issuingAuthority,
  isEdit,
  handleClick,
}) => {
  return (
      <form>
    <div className="RealNameInformationForm ProfileForm">
      <FormHeaderContainer
        isEdit={isEdit}
        handleClick={handleClick}
        formName="Real name information"
      />
      <div className="ProfileInfoBlock">
        <div>
          <span className="ProfileInfoBlock-InputName">ID type</span>
          {isEdit ? (
            <Field
              component={TextFieldContainer}
              type="text"
              name="idType"
              placeholder={passport}
            />
          ) : (
            <span className="ProfileInfoBlock-InputValue">{passport}</span>
          )}
        </div>
        <div>
          <span className="ProfileInfoBlock-InputName">ID No.</span>
          {isEdit ? (
            <Field
              component={TextFieldContainer}
              type="text"
              name="idNumber"
              placeholder={idNumber}
            />
          ) : (
            <span className="ProfileInfoBlock-InputValue">{idNumber}</span>
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
          <span className="ProfileInfoBlock-InputName">Issuing Authority</span>
          {isEdit ? (
            <Field
              component={TextFieldContainer}
              type="text"
              name="issuingAuthority"
              placeholder={issuingAuthority}
            />
          ) : (
            <span className="ProfileInfoBlock-InputValue">{issuingAuthority}        </span>
          )}
        </div>
      </div>
      <div className="ProfileInfoBlock ProfileInfoBlock_oneItem">
        <span className="ProfileInfoBlock-InputName">National ID card</span>
        <div className="ProfileInfoBlock-InputValue" id="idCard">
          <IdCardContainer />
          <IdCardContainer />
        </div>
      </div>
    </div>
    </form>
  );
};
export default reduxForm({
    form:'editForm'
})(RealNameInformationFormUI)