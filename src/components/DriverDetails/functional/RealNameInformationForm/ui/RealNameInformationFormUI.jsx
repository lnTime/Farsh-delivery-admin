import React, { useEffect } from "react";
import "./RealNameInformationForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import { IdCardContainer } from "../../../../common/icons/IdCard/functional/IdCardContainer";
import { Field, reduxForm, initialize } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";
import { FileFieldContainer } from "../../../../common/inputs/FileField/functional/FileFieldContainer";
import { BlackButtonContainer } from "../../../../common/buttons/BlackButton/functional/BlackButtonContainer";

const RealNameInformationFormUI = ({
  passport,
  idNumber,
  issueDate,
  expiryDate,
  issuingCountry,
  issuingAuthority,
  isEdit,
  handleClick,
  handleSubmit,
  initialize,
}) => {
  useEffect(() => {
    initialize({
      passport: passport,
      idNumber: idNumber,
      issueDate: issueDate,
      expiryDate: expiryDate,
      issuingCountry: issuingCountry,
      issuingAuthority: issuingAuthority,
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
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
                name="passport"
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
          <span className="ProfileInfoBlock-InputName">National ID card</span>
          <div className="ProfileInfoBlock-InputValue" id="idCard">
            {isEdit ? (
              <Field component={FileFieldContainer} type="file" name="idCard" />
            ) : (
              <IdCardContainer />
            )}
            {isEdit ? (
              <Field component={FileFieldContainer} type="file" name="idCard" />
            ) : (
              <IdCardContainer />
            )}
          </div>
          {isEdit ? <BlackButtonContainer text="Save" /> : null}
        </div>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "editRealName",
})(RealNameInformationFormUI);
