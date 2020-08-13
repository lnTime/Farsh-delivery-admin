import React, { useEffect } from "react";
import "./ProfileForm.scss";
import { FormHeaderContainer } from "../../FormHeader/functional/FormHeaderContainer";
import Avatar from "../../../../../assets/avatars/avatar-80.png";
import { Field, reduxForm } from "redux-form";
import { TextFieldContainer } from "../../../../common/inputs/TextField/functional/TextFieldContainer";
import { BlackButtonContainer } from "../../../../common/buttons/BlackButton/functional/BlackButtonContainer";

export const ProfileFormUI = ({
  name,
  mobile,
  country,
  state,
  city,
  address,
  password,
  handleClick,
  isEdit,
  handleSubmit,
  initialize,
}) => {
  useEffect(() => {
    initialize({
      name: name,
      mobile: mobile,
      country: country,
      state: state,
      city: city,
      address: address,
      password: password,
    });
  }, []);

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
              <span className="ProfileFormAvatar-Name">{name}</span>
            )}
          </div>
        </div>
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">Mobile</span>
            {isEdit ? (
              <Field name="mobile" component={TextFieldContainer} type="text" />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{mobile}</span>
            )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">Country</span>
            {isEdit ? (
              <Field
                name="country"
                component={TextFieldContainer}
                type="text"
              />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{country}</span>
            )}
          </div>
        </div>
        <div className="ProfileInfoBlock">
          <div>
            <span className="ProfileInfoBlock-InputName">State</span>
            {isEdit ? (
              <Field name="state" type="text" component={TextFieldContainer} />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{state}</span>
            )}
          </div>
          <div>
            <span className="ProfileInfoBlock-InputName">City</span>
            {isEdit ? (
              <Field name="city" type="text" component={TextFieldContainer} />
            ) : (
              <span className="ProfileInfoBlock-InputValue">{city}</span>
            )}
          </div>
        </div>
        <div className="ProfileInfoBlock ProfileInfoBlock_oneItem">
          <span className="ProfileInfoBlock-InputName">Address</span>
          {isEdit ? (
            <Field name="address" type="text" component={TextFieldContainer} />
          ) : (
            <span className="ProfileInfoBlock-InputValue">{address}</span>
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
              {password.split("").map((v, index) => (
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
