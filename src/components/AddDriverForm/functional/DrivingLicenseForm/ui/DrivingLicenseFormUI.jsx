import React from 'react';
import {Field} from 'redux-form';
import {SelectFieldContainer} from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';
import {TextFieldContainer} from '../../../../common/inputs/TextField/functional/TextFieldContainer';
import {ChooseFrontAndBackContainer} from '../../../functional/ChooseFrontAndBack/functional/ChooseFrontAndBackContainer';
import { validators } from '../../../../../utils/validators/validators';
import styles from './DrivingLicenseFormModule.scss'

export const DrivingLicenseFormUI = React.memo(({licenseTypeOptions, image, setImage}) => {
    return (<form className= {styles['AddDriver-Form']}>
        <div className={styles.EvenInputs}>
            <Field name="licenseType" 
                component={SelectFieldContainer}
                options={licenseTypeOptions}
                placeholder="License type"  
                validate={[validators.required]}  
            />
            <Field 
                name="licenseNo"
                component={TextFieldContainer}
                placeholder="License number"
                data-halfwidth
                validate={[validators.required]}  
            />
        </div>
        <div className={styles.EvenInputs}>
            <Field 
                name="licenseIssueDate"
                component={TextFieldContainer}
                placeholder="Issue date"
                validate={[validators.required]}  
            />
            <Field 
                name="licenseExpiryDate"
                component={TextFieldContainer}
                placeholder="Expiry date"
                validate={[validators.required]}  
            />
        </div>
        <div className={styles.EvenInputs}>
            <Field 
                name="issuingCountry"
                placeholder="Issuing country"
                component={SelectFieldContainer}
                options={[{id: 1, value: 'Armenia'}]}
                validate={[validators.required]}  
            />
            <Field 
                name="licenseIssuingAuthority"
                placeholder="Issuing Authority"
                component={SelectFieldContainer}
                options={[{id: 1, value: 'Auth'}]}
                validate={[validators.required]}  
            />
        </div>
        <span className={styles['AddDriverForm-FileUpload']}>Upload your Driving License</span>
        <ChooseFrontAndBackContainer image={image} setImage={setImage} />
    </form>);
});