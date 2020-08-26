import React, { useEffect } from "react";
import "./RealNameInformationForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import { IdCardContainer } from "../../../../common/icons/IdCard/functional/IdCardContainer";
import { Field, reduxForm } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";
import { BlackButtonContainer } from "../../../../common/buttons/BlackButton/functional/BlackButtonContainer";
import { SelectFieldContainer } from '../../../../common/inputs/SelectField/functional/SelectFieldContainer'
import { validators } from '../../../../../utils/validators/validators';
import { ChooseFileFieldContainer } from '../../../../common/inputs/ChooseFileField/functional/ChooseFileFieldContainer';

const RealNameInformationFormUI = ({
  realNameInformation,
  isEdit,
  handleClick,
  handleSubmit,
  initialize,
  countries,
  idTypeOptions,
  imageHasError,
  setImageHasError
}) => {
  useEffect(() => {
    initialize({ ...realNameInformation, realNameIssueCountry: realNameInformation.realNameIssueCountry.isoCode });
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
                component={SelectFieldContainer}
                name="realNameIdType"
                options={idTypeOptions}
                required={[validators.required]}
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
                data-halfwidth
                name="realNameIssueCountry"
                placeholder="Issue country"
                component={SelectFieldContainer}
                options={countries}
                validate={[validators.required]}
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
                data-halfwidth
                name="realNameIssueAuthority"
                placeholder="Issue authority"
                component={SelectFieldContainer}
                options={countries}
                validate={[validators.required]}
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
              <Field
                component={ChooseFileFieldContainer}
                type="file"
                name="idImgBack"
                title={null}
                actionText={null}
                buttonText="Choose Back image"
                validate={validators.required}
                hasError={imageHasError.back}
                setHasError={value => setImageHasError(prev => ({ ...prev, back: value }))}
              />
            ) : (
                <IdCardContainer />
              )}
            {isEdit ? (
              <Field
                component={ChooseFileFieldContainer}
                type="file"
                name="idImgFront"
                title={null}
                actionText={null}
                buttonText="Choose Front image"
                hasError={imageHasError.front}
                setHasError={value => setImageHasError(prev => ({ ...prev, front: value }))}
                validate={validators.required}
              />
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
