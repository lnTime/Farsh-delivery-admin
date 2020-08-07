import React from 'react';
import './ProfileInfoForm.scss';
import {FileFieldContainer} from '../../../../common/inputs/FileField/functional/FileFieldContainer';
import {TextFieldContainer} from '../../../../common/inputs/TextField/functional/TextFieldContainer';
import {SelectFieldContainer} from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';
import {Field} from 'redux-form';
import {validators} from '../../../../../utils/validators/validators';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';


export const ProfileInfoFormUI = ({phoneNumber, onPhoneNumberBlur, handlePhoneNumberChange}) => {

    return (<form className="AddDriver-Form">
        <FileFieldContainer />
        <div className="EvenInputs">
            <Field name='firstName'
                validate={[validators.onlyCharacters]}
                component={TextFieldContainer}
                placeholder="First Name" />
            <Field name='lastName'
                component={TextFieldContainer}
                validate={[validators.onlyCharacters]}
                placeholder="Last Name" />
        </div>
        <div className="EvenInputs">
            <IntlTelInput 
                preferredCountries={["sa"]}
                separateDialCode={true}
                format={true}
                value={phoneNumber.mobileNumber}
                placeholder=""
                onPhoneNumberBlur={onPhoneNumberBlur}
                fieldId={`phoneNumber`}
                onPhoneNumberChange={handlePhoneNumberChange}
                containerClassName={`intl-tel-input ${phoneNumber.isValid ? '' : 'intl-tel-input-error'}`}
                inputClassName="form-control"
            />
            <Field name="county"
                component={SelectFieldContainer}
                options={[{ id: 1, value: 'Saudi Arabia' }, { id: 2, value: 'Armenia' }]} />
        </div>
        <div className="EvenInputs">
            <Field name="state"
                component={SelectFieldContainer}
                options={[{ id: 1, value: '0801' }, { id: 2, value: '0802' }]}
                placeholder="State" />
            <Field name="city"
                component={SelectFieldContainer}
                options={[{ id: 1, value: 'Masis' }, { id: 2, value: 'Ararat' }]}
                placeholder="City" />
        </div>
        <div className="EvenInputs">
            <Field name="address"
                component={TextFieldContainer}
                placeholder="Address"
                data-fullwidth
            />
        </div>
        <div className="EvenInputs">
            <Field name="password"
                component={TextFieldContainer}
                placeholder="Password"
            />
            <Field name="confirmPassword"
                component={TextFieldContainer}
                placeholder="Confirm Password"
            />
        </div>
    </form>);
}