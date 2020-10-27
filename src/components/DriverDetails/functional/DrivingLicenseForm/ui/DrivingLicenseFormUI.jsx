import React  from "react";
import "./DrivingLicenseForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import { reduxForm, Field } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";
import { ChooseFileFieldContainer } from "../../../../common/inputs/ChooseFileField/functional/ChooseFileFieldContainer";
import { BlackButtonContainer } from "../../../../common/buttons/BlackButton/functional/BlackButtonContainer";
import { SelectFieldContainer } from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';
import { validators } from '../../../../../utils/validators/validators';
import { DateFieldContainer } from "../../../../common/inputs/DateField/functional/DateFieldContainer";

const DrivingLicenseFormUI = ({
  drivingLicense = {},
  isEdit,
  handleClick,
  handleSubmit,
  countries,
}) => {
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
                data-halfwidth
                name="licenseType"
                placeholder="Issuing Authority"
                component={SelectFieldContainer}
                options={[{ value: 'LTE', id: 'LTE' }]}
                validate={[validators.required]}
              />
            ) : (
                <span className="ProfileInfoBlock-InputValue">{drivingLicense.licenseType}</span>
              )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">License number</span>
            {isEdit ? (
              <Field
                component={TextFieldContainer}
                type="text"
                name="licenseNo"
              />
            ) : (
                <span className="ProfileInfoBlock-InputValue">
                  {drivingLicense.licenseNo}
                </span>
              )}
          </div>
        </div>
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">Issue date</span>
            {isEdit ? (
              <Field
                component={DateFieldContainer}
                type="text"
                name="licenseIssueDate"
                data-fullWidth
              />
            ) : (
                <span className="ProfileInfoBlock-InputValue">{drivingLicense.licenseIssueDate}</span>
              )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">Expiry date</span>
            {isEdit ? (
              <Field
                component={DateFieldContainer}
                data-fullWidth
                type="text"
                name="licenseExpiryDate"
              />
            ) : (
                <span className="ProfileInfoBlock-InputValue">{drivingLicense.licenseExpiryDate}</span>
              )}
          </div>
        </div>
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">Issuing country</span>
            {isEdit ? (
              <Field
                data-halfwidth
                name="licenseIssuingCountry.isoCode"
                placeholder="Issuing country"
                component={SelectFieldContainer}
                options={countries}
                validate={[validators.required]}
              />
            ) : (
                <span className="ProfileInfoBlock-InputValue">
                  {drivingLicense.licenseIssuingCountry?.countryName || 'SA'}
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
                name="licenseIssuingAuthority"
                placeholder="Issuing Authority"
                component={SelectFieldContainer}
                options={countries}
                validate={[validators.required]}
              />
            ) : (
                <span className="ProfileInfoBlock-InputValue">
                  {drivingLicense.licenseIssuingAuthority}
                </span>
              )}
          </div>
        </div>
        <div className="ProfileInfoBlock ProfileInfoBlock_oneItem">
          <span className="ProfileInfoBlock-InputName">Driving License</span>
          <div className="ProfileInfoBlock-InputValue" id="idCard">
            {!drivingLicense.drivingLicenseFrontImage || isEdit ? (
              <Field
                component={ChooseFileFieldContainer}
                type="file"
                name="driverLicenceFrontImgFile"
                title={null}
                imageOnly
                actionText={null}
                buttonText="Choose Front image"
                validate={validators.required}
              />
            ) : (
                <img alt="Driving License Front" src={drivingLicense.drivingLicenseFrontImage} width="154" height="90" />
              )}
            {!drivingLicense.drivingLicenseBackImage || isEdit ? (
              <Field
                component={ChooseFileFieldContainer}
                imageOnly
                type="file"
                name="driverLicenceBackImgFile"
                title={null}
                actionText={null}
                buttonText="Choose Back image"
                validate={validators.required}
              />
            ) : (
                <img alt="Driving License Back" src={drivingLicense.drivingLicenseBackImage} width="154" height="90" />
              )}
          </div>
          {isEdit ? <BlackButtonContainer text="Save" /> : null}
        </div>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "editDrivingLicense",
})(DrivingLicenseFormUI);












