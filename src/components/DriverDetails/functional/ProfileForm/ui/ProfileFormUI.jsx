import React, { memo } from "react";
import "./ProfileForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import { Field, reduxForm } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";
import { BlackButtonContainer } from "../../../../common/buttons/BlackButton/functional/BlackButtonContainer";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { validators } from "../../../../../utils/validators/validators";
import { SelectFieldContainer } from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';


export const ProfileFormUI = ({
  profile,
  hasError,
  handleClick,
  isEdit,
  handleSubmit,
  phoneNumber,
  handlePhoneNumberChange,
  onPhoneNumberBlur,
  invalid,
  submitting,
  pristine,
  address,
  customStateChange,
  customCountryChange,
  ImageComponent,
  handleImageChange
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className="ProfileForm">
        <FormHeaderContainer
          isEdit={isEdit}
          handleClick={handleClick}
          formName="Profile"
        />
        <div className="ProfileFormAvatar">
          {
            isEdit ? <div className={`UploadImage ProfileFormAvatar-UploadImage ${hasError ? 'ProfileFormAvatar-UploadImage_error' : ''}`}>
              <ImageComponent />
              <input type="file" onChange={handleImageChange}  accept="image/*" className="UploadImage-UploadInput"/>
            </div>
            : <ImageComponent />
          }
          <div className="ProfileFormInfo">
            <span className="ProfileFormAvatar-name_name">Name</span>
            {isEdit ? (
              <Field
                name="name"
                component={TextFieldContainer}
                type="text"
                validate={[validators.required]}
                className="InputBlock_withoutMargin"
              />
            ) : (
            <span className="ProfileFormAvatar-Name">{profile.firstName} {profile.lastName}</span>
            )}
          </div>
        </div>
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">Mobile</span>
            {isEdit ? (
                <IntlTelInput
                  preferredCountries={["am"]}
                  separateDialCode={true}
                  format={true}
                  value={phoneNumber.mobileNumber}
                  placeholder=""
                  onPhoneNumberBlur={onPhoneNumberBlur}
                  fieldId="phoneNumber"
                  onPhoneNumberChange={handlePhoneNumberChange}
                  containerClassName={`intl-tel-input ${phoneNumber.isValid ? '' : 'intl-tel-input-error'}`}
                  inputClassName="form-control"
            />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{profile.mobileNumber}</span>
            )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">Country</span>
            {isEdit ? (
              <Field
                name="country"
                customOnChange={customCountryChange}
                component={SelectFieldContainer}
                options={address.countries}
                validate={[validators.required]}
            />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{profile.address?.country?.countryName}</span>
            )}
          </div>
        </div>
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">State</span>
            {isEdit ? (
              <Field
                name="state"
                customOnChange={customStateChange}
                component={SelectFieldContainer}
                options={address.states}
                validate={[validators.required]}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{profile.address?.state}</span>
            )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">City</span>
            {isEdit ? (
              <Field name="city"
                component={SelectFieldContainer}
                options={address.cities}
                validate={[validators.required]}
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{profile.address?.city}</span>
            )}
          </div>
        </div>
        <div className="ProfileInfoBlock ProfileInfoBlock_oneItem">
          <span className="ProfileInfoBlock-InputName">Address</span>
          {isEdit ? (
            <Field
              validate={[validators.required]}
              name="address"
              type="text"
              component={TextFieldContainer} />
          ) : (
            <span className="ProfileInfoBlock-InputValue">{profile.address?.address}</span>
          )}
        </div>
        <div className="ProfileInfoBlock ProfileInfoBlock_oneItem">
          <span className="ProfileInfoBlock-InputName">Password</span>
          {isEdit ? (
            <Field
              name="password"
              type="password"
              validate={[validators.required]}
              component={TextFieldContainer}
            />
          ) : (
            <div className="Password">
              {"aaaaaaaaa".split("").map((v, index) => (
                <div
  className="ProfileInfoBlock-InputValue_cycle"
  key={index}
  />
              ))}
            </div>
          )}
        </div>
        {isEdit ?
          <BlackButtonContainer
            disabled={invalid || submitting || pristine}
            text="Save" /> : null}
      </div>
    </form>
  );
};

export default reduxForm({
  form: "editProfileForm",
})(memo(ProfileFormUI));
