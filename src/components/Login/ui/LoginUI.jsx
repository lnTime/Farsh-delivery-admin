import React from "react";
import "./Login.scss";
import { WhiteButttonContainer } from "../../common/buttons/WhiteButton/functional/WhiteButtonContainer";
import { BlackButtonContainer } from "../../common/buttons/BlackButton/functional/BlackButtonContainer";

const LoginUI = () => {
  return (
    <div className="Login">
      <div className="Login-Left">
        <form className="Login-Form">
          <div className="Logo"/>
          <div className="Login-Welcome">
            <h2 className="Login-H2">Welcome back!</h2>
            <span className="Login-Span">Please login to your account</span>
          </div>
          <label className="Label LoginForm-Label">
            Email Address
            <input 
              value="adil@gmail.com"
              type="text" 
              className="LoginForm-Input Label-Input"
              />
          </label>
          <label className="Label LoginForm-Label">
            Password
            <input type="password" className="LoginForm-Input Label-Input"/>
          </label>
          <div className="Login-Checkbox">
            <label>
              {/* <Field
                className="Login-Remember"
                name="employed"
                id="employed"
                component="input"
                type="checkbox"
              /> */}
              Remember me
            </label>
            <span className="Login_forgot">Forgot password</span>
          </div>

          <div>
            <BlackButtonContainer text="Login"/>
            <WhiteButttonContainer text="Sign up"/>
          </div>
        </form>
      </div>
      <div className="Login-Right">
        <div className="RightPhoto"/>
      </div>
    </div>
  );
};

export default LoginUI;
