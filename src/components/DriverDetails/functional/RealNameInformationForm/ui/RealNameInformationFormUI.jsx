import React, { useEffect } from "react";
import "./RealNameInformationForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import { IdCardContainer } from "../../../../common/icons/IdCard/functional/IdCardContainer";
import { Field, reduxForm } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";
import { FileFieldContainer } from "../../../../common/inputs/FileField/functional/FileFieldContainer";
import { BlackButtonContainer } from "../../../../common/buttons/BlackButton/functional/BlackButtonContainer";

const RealNameInformationFormUI = ({
  realNameInformation,
  isEdit,
  handleClick,
  handleSubmit,
  initialize,
}) => {
  useEffect(() => {
    initialize({ ...realNameInformation });
  }, [initialize, realNameInformation]);

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
                name="realNameIdType"
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{realNameInformation.realNameIdType}</span>
            )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">ID No.</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                type="text"
                name="realNameIdNo"
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{realNameInformation.realNameIdNo}</span>
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
                name="realNameIssueDate"
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{realNameInformation.realNameIssueDate}</span>
            )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">Expiry date</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                type="text"
                name="realNameExpiryDate"
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{realNameInformation.realNameExpiryDate}</span>
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
                name="realNameIssueCountry.countryName"
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">
                {realNameInformation.realNameIssueCountry.isoCode}
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
                name="realNameIssueAuthority"
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">
                {realNameInformation.realNameIssueAuthority}
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
