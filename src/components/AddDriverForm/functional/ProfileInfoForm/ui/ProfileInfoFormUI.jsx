import React from 'react';
import './ProfileInfoForm.scss';
import { FileFieldContainer } from '../../../../common/inputs/FileField/functional/FileFieldContainer';
import { TextFieldContainer } from '../../../../common/inputs/TextField/functional/TextFieldContainer';
import { SelectFieldContainer } from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';
import { Field } from 'redux-form';
import { validators } from '../../../../../utils/validators/validators';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';


export const ProfileInfoFormUI = React.memo(({ phoneNumber, onPhoneNumberBlur, handlePhoneNumberChange,
    states, countries, cities, customCountryChange, customStateChange, handleSubmit, src,
    hasError, handleImageChange }) => {

    return (<div className='AddDriver-Form' onSubmit={handleSubmit}>
        <FileFieldContainer src={src} onChange={handleImageChange} data-haserror={hasError} />
        <div className = 'EvenInputs'>
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
            <IntlTelInput
                data-halfwidth
                preferredCountries={["sa"]}
                separateDialCode={true}
                format={true}
                value={phoneNumber.mobileNumber}
                placeholder=""
                onPhoneNumberBlur={onPhoneNumberBlur}
                fieldId="phoneNumber"
                onPhoneNumberChange={handlePhoneNumberChange}
                containerClassName={`intl-tel-input intl-tel-input ${phoneNumber.isValid ? '' : 'intl-tel-input-error'} intl-tel-input-error`}
                inputClassName="form-control"
            />
            <Field
                name="country"
                customOnChange={customCountryChange}
                component={SelectFieldContainer}
                options={countries}
                validate={[validators.required]}
                data-halfwidth
            />
        </div>
        <div className='EvenInputs'>
            <Field
                data-halfwidth
                name="state"
                component={SelectFieldContainer}
                customOnChange={customStateChange}
                options={states}
                placeholder="State"
                validate={[validators.required]}
            />
            <Field
                data-halfwidth
                name="city"
                component={SelectFieldContainer}
                options={cities}
                placeholder="City"
                validate={[validators.required]}
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