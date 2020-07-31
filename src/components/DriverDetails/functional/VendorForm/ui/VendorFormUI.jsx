import React from 'react';
import './VendorForm.scss';
import { FormHeaderContainer } from '../../FormHeader/functional/FormHeaderContainer';

export const VendorFormUI = ({vendor}) => {
    return (<div className="VendorForm ProfileForm">
        <FormHeaderContainer formName="Vendor"/>
        <div  className="ProfileInfoBlock ProfileInfoBlock_oneItem">
            <span className="ProfileInfoBlock-InputName">Vendor</span>
            <span className="ProfileInfoBlock-InputValue">{vendor}</span>
        </div>
    </div>)
}