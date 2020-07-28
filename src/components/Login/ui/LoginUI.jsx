import React from "react";
import { Field, reduxForm } from "redux-form";
import { TextFieldContainer } from "../../TextField/functional/TextFieldContainer";
import "../ui/Login.scss";
import { WhiteButttonContainer } from "../../common/buttons/WhiteButton/functional/WhiteButtonContainer";
import { BlackButtonContainer } from "../../common/buttons/BlackButton/functional/BlackButtonContainer";

const LoginUI = () => {
  return (
    <div className="Login">
      <div className="Login-Left">
        <form className="Login-Form">
          <div className="Logo"></div>
          <div className="Login-Welcome">
            <h2 className="Login-h2">Welcome back!</h2>
            <span className="Login-Span">Please login to your account</span>
          </div>
          <Field
            component={TextFieldContainer}
            placeholder="email"
            type="email"
          />
          <Field
            component={TextFieldContainer}
            placeholder="password"
            type="password"
          />

          <div className="Login-Checkbox">
            <label>
              <Field
                className="Login_Remember"
                name="employed"
                id="employed"
                component="input"
                type="checkbox"
              />
              Remember me
            </label>
            <label className="Login_forgott">Forgott password</label>
          </div>

          <div>
            <BlackButtonContainer />
            <WhiteButttonContainer />
          </div>
        </form>
      </div>
      <div className="Login-Right">
        <div className="RightPhoto"></div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "simple", // a unique identifier for this form
})(LoginUI);
