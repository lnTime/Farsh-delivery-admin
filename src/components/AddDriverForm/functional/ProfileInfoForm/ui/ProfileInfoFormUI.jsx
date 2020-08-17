import React from 'react';
import styles from './ProfileInfoFormModule.scss';
import {FileFieldContainer} from '../../../../common/inputs/FileField/functional/FileFieldContainer';
import {TextFieldContainer} from '../../../../common/inputs/TextField/functional/TextFieldContainer';
import {SelectFieldContainer} from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';
import {Field} from 'redux-form';
import {validators} from '../../../../../utils/validators/validators';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';


export const ProfileInfoFormUI = React.memo(({phoneNumber, onPhoneNumberBlur, handlePhoneNumberChange,
    states, countries, cities, customCountryChange, customStateChange, handleSubmit, src, 
    hasError, handleImageChange}) => {

    return (<div className={styles["AddDriver-Form"]} onSubmit={handleSubmit}>
        <FileFieldContainer src={src} onChange={handleImageChange} data-haserror={hasError}/>
        <div className={styles.EvenInputs}>
            <Field 
                name='firstName'
                validate={[validators.onlyCharacters, validators.required]}
                component={TextFieldContainer}
                placeholder="First Name" 
            />
            <Field 
                name='lastName'
                component={TextFieldContainer}
                validate={[validators.onlyCharacters, validators.required]}
                placeholder="Last Name" 
            />
        </div>
        <div className={styles.EvenInputs}>
            <IntlTelInput 
                preferredCountries={["sa"]}
                separateDialCode={true}
                format={true}
                value={phoneNumber.mobileNumber}
                placeholder=""
                onPhoneNumberBlur={onPhoneNumberBlur}
                fieldId="phoneNumber"
                onPhoneNumberChange={handlePhoneNumberChange}
                containerClassName={`intl-tel-input  ${styles['intl-tel-input']} ${phoneNumber.isValid ? '' : styles['intl-tel-input-error']} intl-tel-input-error`}
                inputClassName="form-control"
            />
            <Field 
                name="country"
                customOnChange={customCountryChange}
                component={SelectFieldContainer}
                options={countries} 
                validate={[validators.required]}
            />
        </div>
        <div className={styles.EvenInputs}>
            <Field 
                name="state"
                component={SelectFieldContainer}
                customOnChange={customStateChange}
                options={states}
                placeholder="State" 
                validate={[validators.required]}
            />
            <Field 
                name="city"
                component={SelectFieldContainer}
                options={cities}
                placeholder="City" 
                validate={[validators.required]}
            />
        </div>
        <div className={styles.EvenInputs}>
            <Field name="address"
                component={TextFieldContainer}
                placeholder="Address"
                data-fullwidth
                validate={[validators.required]}
            />
        </div>
        <div className={styles.EvenInputs}>
            <Field name="password"
                component={TextFieldContainer}
                placeholder="Password"
                validate={[validators.required]}
                type="password"
            />
            <Field name="confirmPassword"
                component={TextFieldContainer}
                placeholder="Confirm Password"
                validate={[validators.required]}
                type="password"
            />
        </div>
    </div>);
})