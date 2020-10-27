import React from 'react';
import { Field } from 'redux-form';
import { SelectFieldContainer } from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';
import { TextFieldContainer } from '../../../../common/inputs/TextField/functional/TextFieldContainer';
import { ChooseFrontAndBackContainer } from '../../../functional/ChooseFrontAndBack/functional/ChooseFrontAndBackContainer';
import { validators } from '../../../../../utils/validators/validators';
import styles from './DrivingLicenseForm.module.scss';
import { DateFieldContainer } from '../../../../common/inputs/DateField/functional/DateFieldContainer';

export const DrivingLicenseFormUI = React.memo(({ licenseTypeOptions, 
    issuingAuthority, customStateChange, image, countries, setImage }) => {
    return (<div className={styles['AddDriver-Form']}>
        <div className="EvenInputs">
            <Field name="licenseType"
                data-halfwidth
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
        <div className="EvenInputs">
            <Field
                data-halfwidth
                name="licenseIssueDate"
                component={DateFieldContainer}
                placeholder="Issue date"
                validate={[validators.required]}
            />
            <Field
                data-halfwidth
                name="licenseExpiryDate"
                component={DateFieldContainer}
                placeholder="Expiry date"
                validate={[validators.required]}
            />
        </div>
        <div className="EvenInputs">
            <Field
                data-halfwidth
                name="issuingCountry"
                placeholder="Issuing country"
                component={SelectFieldContainer}
                options={countries}
                customOnChange={customStateChange}
                validate={[validators.required]}
            />
            <Field
                data-halfwidth
                name="licenseIssuingAuthority"
                placeholder="Issuing Authority"
                component={SelectFieldContainer}
                options={issuingAuthority}
                customOnChange={customStateChange}
                validate={[validators.required]}
            />
        </div>
        <span className={styles['AddDriverForm-FileUpload']}>Upload your Driving License</span>
        <ChooseFrontAndBackContainer 
                imageOnly  />
    </div>);
});
