import React from 'react';
import './ProfileInfoForm.scss';
import { FileFieldContainer } from '../../../../common/inputs/FileField/functional/FileFieldContainer';
import { TextFieldContainer } from '../../../../common/inputs/TextField/functional/TextFieldContainer';
import { SelectFieldContainer } from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';
import { Field } from 'redux-form';
import { validators } from '../../../../../utils/validators/validators';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';


export const ProfileInfoFormUI = React.memo(({ states, countries, cities, 
    customCountryChange, customStateChange, src, prefferedCountry,
    hasError, handleImageChange }) => {
    return (<div className='AddDriver-Form'>
        <FileFieldContainer src={src} onChange={handleImageChange} data-haserror={hasError} />
        <div className='EvenInputs'>
            <Field
                data-halfwidth
                name='firstName'
                validate={[validators.onlyCharacters, validators.required]}
                component={TextFieldContainer}
                placeholder="First Name"
            />
            <Field
                data-halfwidth
                name='lastName'
                component={TextFieldContainer}
                validate={[validators.onlyCharacters, validators.required]}
                placeholder="Last Name"
            />
        </div>
        <div className='EvenInputs'>
            <Field
                name="country"
                customOnChange={customCountryChange}
                component={SelectFieldContainer}
                options={countries}
                validate={[validators.required]}
                data-halfwidth
            />
            <Field
                data-halfwidth
                name="state"
                component={SelectFieldContainer}
                customOnChange={customStateChange}
                options={states}
                placeholder="State"
                validate={[validators.required]}
            />
        </div>
        <div className='EvenInputs'>
            <Field
                data-halfwidth
                name="city"
                component={SelectFieldContainer}
                options={cities}
                placeholder="City"
                validate={[validators.required]}
            />
            <Field 
                name="mobileNumber" 
                validate={[validators.validatePhoneNumber]}
                component = {props => <IntlTelInput
                    data-halfwidth
                    preferredCountries={[prefferedCountry]}
                    separateDialCode={true}
                    format={true}
                    placeholder=""
                    onPhoneNumberBlur={(isValid, phoneNumber) => props.input.onBlur({ number: phoneNumber, isValid })}
                    fieldId="phoneNumber"
                    onPhoneNumberChange={(isValid, phoneNumber) => {props.input.onChange(phoneNumber)}}
                    containerClassName={`intl-tel-input intl-tel-input ${(props.meta.error && props.meta.touched)? 'intl-tel-input-error' : ''}`}
                    inputClassName="form-control"
                />}
            />
        </div>
        <div className='EvenInputs'>
            <Field name="address"
                component={TextFieldContainer}
                placeholder="Address"
                data-fullwidth
                validate={[validators.required]}
            />
        </div>
        <div className='EvenInputs'>
            <Field name="password"
                data-halfwidth
                component={TextFieldContainer}
                placeholder="Password"
                validate={[validators.required]}
                type="password"
            />
            <Field name="confirmPassword"
                data-halfwidth
                component={TextFieldContainer}
                placeholder="Confirm Password"
                validate={[validators.required]}
                type="password"
            />
        </div>
    </div>);
})