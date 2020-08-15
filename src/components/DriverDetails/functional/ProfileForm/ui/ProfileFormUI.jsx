import React, { useEffect } from "react";
import "./ProfileForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import Avatar from "../../../../../assets/avatars/avatar-80.png";
import { Field, reduxForm } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";
import { BlackButtonContainer } from "../../../../common/buttons/BlackButton/functional/BlackButtonContainer";

export const ProfileFormUI = ({
  profile,
  handleClick,
  isEdit,
  handleSubmit,
  initialize,
}) => {
  useEffect(() => {
    initialize({ ...profile, name: `${profile.firstName} ${profile.lastName}` });
  }, [profile, initialize]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="ProfileForm">
        <FormHeaderContainer
          isEdit={isEdit}
          handleClick={handleClick}
          formName="Profile"
        />
        <div className="ProfileFormAvatar">
          <img alt="Avatar" src={Avatar} />
          <div className="ProfileFormInfo">
            <span className="ProfileFormAvatar-name_name">Name</span>
            {isEdit ? (
              <Field
                name="name"
                component={TextFieldContainer}
                type="text"
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
              <Field name="mobileNumber" component={TextFieldContainer} type="text" />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{profile.mobileNumber}</span>
            )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">Country</span>
            {isEdit ? (
              <Field
                name="address.country.countryName"
                component={TextFieldContainer}
                type="text"
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
              <Field name="address.state" type="text" component={TextFieldContainer} />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{profile.address?.state}</span>
            )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">City</span>
            {isEdit ? (
              <Field name="address.city" type="text" component={TextFieldContainer} />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{profile.address?.city}</span>
            )}
          </div>
        </div>
        <div className="ProfileInfoBlock ProfileInfoBlock_oneItem">
          <span className="ProfileInfoBlock-InputName">Address</span>
          {isEdit ? (
            <Field name="address.address" type="text" component={TextFieldContainer} />
          ) : (
            <span className="ProfileInfoBlock-InputValue">{profile.address}</span>
          )}
        </div>
        <div className="ProfileInfoBlock ProfileInfoBlock_oneItem">
          <span className="ProfileInfoBlock-InputName">Password</span>
          {isEdit ? (
            <Field
              name="password"
              type="password"
              component={TextFieldContainer}
            />
          ) : (
            <div className="Password">
              {"aaaaaaaaa".split("").map((v, index) => (
                <div
                  className="ProfileInfoBlock-InputValue_cycle"
                  key={index}
                ></div>
              ))}
            </div>
          )}
          {isEdit ? <BlackButtonContainer text="Save" /> : null}
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "editProfileForm",
})(ProfileFormUI);
