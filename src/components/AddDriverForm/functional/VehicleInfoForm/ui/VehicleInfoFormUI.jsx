import React from 'react';
import './VehicleInfoForm.scss';
import {Field} from 'redux-form';
import {SelectFieldContainer} from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';
import {TextFieldContainer} from '../../../../common/inputs/TextField/functional/TextFieldContainer';

export const VehicleInfoFormUI = () => {
    return (<form className="AddDriver-Form">
        <div className="EvenInputs">
            <Field 
                name="plateNumber" 
                placeholder="Plate number"
                component={TextFieldContainer}
            />
            <Field 
                name="modelYear"
                placeholder="Model year"
                component={TextFieldContainer}
            />
        </div>
        <div className="EvenInputs">
            <Field 
                name="make"
                placeholder="Make"
                component={SelectFieldContainer}
                options={[{id: 1, value: 'Make'}]}
            />
            <Field 
                name="registeredCountry"
                placeholder="Registered Country"
                component={SelectFieldContainer}
                options={[{id: 1, value: 'Armenia'}]}
            />
        </div>
        <div className="EvenInputs">
            <Field 
                name="state"
                placeholder="State"
                component={SelectFieldContainer}
                options={[{id: 1, value: '0801'}]}
            />
            <Field 
                name="city"
                placeholder="City"
                component={SelectFieldContainer}
                options={[{id: 1, value: 'Masis'}]}
            />
        </div>
        <div className="EvenInputs">
            <Field 
                name="registrationNumber"
                placeholder="Registration No."
                component={TextFieldContainer}
            />
            <Field 
                name="mvpi"
                placeholder="MVPI No."
                component={TextFieldContainer}
            />
        </div>
    </form>);
}