import React from 'react';
import styles from './VendorForm.module.scss';
import {Field} from 'redux-form';
import {SelectFieldContainer} from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';

export const VendorFormUI = () => {
    return (<div className={styles["AddDriver-Form"]}>
        <div className='EvenInputs'>
            <Field 
                data-fullWidth
                name="vendorId"
                component={SelectFieldContainer}
                options={[{id: 10, value: 'Vendor 1'}]}
                placeholder="Select Vendor"
            />

        </div>
    </div>);
}