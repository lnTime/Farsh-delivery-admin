import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { TextFieldContainer } from '../../TextField/functional/TextFieldContainer';
import '../ui/Login.scss';

const LoginUI = () => {
    // const LoginUI = () => {
    return (
        <div className='login'>
            <div className='login_left'>
                <form>
                    <div className='logo'></div>
                    <h2 className='login-h2'>Welcome back!</h2>
                    <span className='login-span'>Please login to your account</span>
                    <Field
                        component={TextFieldContainer}
                        placeholder='email'
                        type='email'
                    />
                    <Field
                        component={TextFieldContainer}
                        placeholder='password'
                        type='password'
                    />
                   <label> <Field name="employed" id="employed" component="input" type="checkbox" />Remember me</label>
                </form>
            </div>
            <div className='login_right'></div>
        </div>
    )
}


export default reduxForm({
    form: 'simple'  // a unique identifier for this form
})(LoginUI)