import React from 'react';
import './VendorForm.scss';
import {Field} from 'redux-form';
import {SelectFieldContainer} from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';

export const VendorFormUI = () => {
    return (<form className="AddDriver-Form">
        <div className="EvenInputs">
            <Field 
                name="vendorId"
                component={SelectFieldContainer}
                options={[{id: 1, value: 'Vendor 1'}]}
                placeholder="Select Vendor"
            />
        </div>
    </form>);
}