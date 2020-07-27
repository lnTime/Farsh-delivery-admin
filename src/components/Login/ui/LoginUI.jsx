import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {TextFieldContainer} from '../../TextField/functional/TextFieldContainer';

const LoginUI = ({ placeholder }) => {
    return (
        <div className='login'>
            <div className='login_left'>
                <form>
                    <div className='logo'></div>
                    <h2 className='login-h2'></h2>
                    <span className='login-span'></span>
                    <TextFieldContainer
                        placeholder={placeholder}
                    />
                    <TextFieldContainer />
                </form>

            </div>
            <div className='login_right'></div>
        </div>
    )
}


export default reduxForm({
    form: 'simple'  // a unique identifier for this form
  })(LoginUI)