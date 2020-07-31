import React from 'react';
import './VehicleForm.scss';
import { FormHeaderContainer } from '../../FormHeader/functional/FormHeaderContainer';

export const VehicleFormUI = ({plateNumber, model, make, 
    registeredCountry, state, city, registrationNumber, mvpi }) => {
    return (<div className="ProfileForm VehicleForm">
        <FormHeaderContainer formName="Vehicle" />
        <div className="ProfileInfoBlock">
            <div>
                <span className="ProfileInfoBlock-InputName">Plate number</span>
                <span className="ProfileInfoBlock-InputValue">{plateNumber}</span>
            </div>
            <div>   
                <span className="ProfileInfoBlock-InputName">Model</span>
                <span className="ProfileInfoBlock-InputValue">{model}</span>
            </div>
        </div>
        <div className="ProfileInfoBlock">
            <div>
                <span className="ProfileInfoBlock-InputName">Make</span>
                <span className="ProfileInfoBlock-InputValue">{make}</span>
            </div>
            <div>   
                <span className="ProfileInfoBlock-InputName">Registered Country</span>
                <span className="ProfileInfoBlock-InputValue">{registeredCountry}</span>
            </div>
        </div>
        <div className="ProfileInfoBlock">
            <div>
                <span className="ProfileInfoBlock-InputName">State</span>
                <span className="ProfileInfoBlock-InputValue">{state}</span>
            </div>
            <div>   
                <span className="ProfileInfoBlock-InputName">City</span>
                <span className="ProfileInfoBlock-InputValue">{city}</span>
            </div>
        </div>
        <div className="ProfileInfoBlock">
            <div>
                <span className="ProfileInfoBlock-InputName">Registration No.</span>
                <span className="ProfileInfoBlock-InputValue">{registrationNumber}</span>
            </div>
            <div>   
                <span className="ProfileInfoBlock-InputName">MVPI No.</span>
                <span className="ProfileInfoBlock-InputValue">{mvpi}</span>
            </div>
        </div>
    </div>);
}