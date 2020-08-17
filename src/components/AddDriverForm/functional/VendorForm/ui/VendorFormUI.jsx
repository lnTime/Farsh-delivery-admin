import React from 'react';
import styles from './VendorFormModule.scss';
import {Field} from 'redux-form';
import {SelectFieldContainer} from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';

export const VendorFormUI = () => {
    return (<form className={styles["AddDriver-Form"]}>
        <div className={styles.EvenInputs}>
            <Field 
                name="vendorId"
                component={SelectFieldContainer}
                options={[{id: 1, value: 'Vendor 1'}]}
                placeholder="Select Vendor"
            />

        </div>
    </form>);
}