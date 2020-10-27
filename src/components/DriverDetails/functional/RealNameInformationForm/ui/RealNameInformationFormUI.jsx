import React from "react";
import "./RealNameInformationForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import { IdCardContainer } from "../../../../common/icons/IdCard/functional/IdCardContainer";
import { Field, reduxForm } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";
import { BlackButtonContainer } from "../../../../common/buttons/BlackButton/functional/BlackButtonContainer";
import { SelectFieldContainer } from '../../../../common/inputs/SelectField/functional/SelectFieldContainer'
import { validators } from '../../../../../utils/validators/validators';
import { ChooseFileFieldContainer } from '../../../../common/inputs/ChooseFileField/functional/ChooseFileFieldContainer';
import { DateFieldContainer } from "../../../../common/inputs/DateField/functional/DateFieldContainer";

const RealNameInformationFormUI = ({
  realNameInformation = {},
  isEdit,
  handleClick,
  customCountryChange,
  handleSubmit,
  countries,
  idTypeOptions,
  frontImage,
  backImage,
}) => {
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
                component={DateFieldContainer}
                data-fullWidth
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
                component={DateFieldContainer}
                type="text"
                data-fullWidth
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
                customOnChange={customCountryChange}
                validate={[validators.required]}
              />
            ) : (
                <span className="ProfileInfoBlock-InputValue">
                  {realNameInformation.realNameIssueCountry?.isoCode}
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
                imageOnly
                name="idImgBack"
                initialImageSrc={backImage}
                title={null}
                actionText={null}
                buttonText="Choose Back image"
                validate={[validators.required]}
              />
            ) : (
              backImage ? <img src={backImage} alt="Back" width="154" height="90" /> : <IdCardContainer />
              )}
            {isEdit ? (
              <Field
                component={ChooseFileFieldContainer}
                type="file"
                imageOnly
                initialImageSrc={frontImage}
                name="idImgFront"
                title={null}
                actionText={null}
                buttonText="Choose Front image"
                validate={[validators.required]}
              />
            ) :
              frontImage ? <img src={frontImage} alt="Front" width="154" height="90" /> : <IdCardContainer />
            }
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
