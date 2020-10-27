import React from 'react';
import styles from './RealNameInformation.module.scss';
import { Field } from 'redux-form';
import { SelectFieldContainer } from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';
import { TextFieldContainer } from '../../../../common/inputs/TextField/functional/TextFieldContainer';
import { ChooseFrontAndBackContainer } from '../../ChooseFrontAndBack/functional/ChooseFrontAndBackContainer';
import { validators } from '../../../../../utils/validators/validators';
import { DateFieldContainer } from '../../../../common/inputs/DateField/functional/DateFieldContainer';


export const RealNameInformationFormUI = React.memo(({
    customStateChange, idTypeOptions, countries, issuingAuthorities }) => {
    return (<div className={styles["AddDriver-Form"]}>
        <div className='EvenInputs'>
            <Field name="realNameIdType"
                data-halfwidth
                component={SelectFieldContainer}
                options={idTypeOptions}
                placeholder="ID type"
                validate={[validators.required]}
            />
            <Field
                data-halfwidth
                name="realNameIdNo"
                component={TextFieldContainer}
                placeholder="ID No."
                validate={[validators.required]}

            />
        </div>
        <div className='EvenInputs'>
            <Field
                data-halfwidth
                name="realNameIssueDate"
                component={DateFieldContainer}
                placeholder="Issue date"
                validate={[validators.required]}
            />
            <Field
                data-halfwidth
                name="realNameExpiryDate"
                component={DateFieldContainer}
                placeholder="Expiry date"
                validate={[validators.required]}
            />
        </div>
        <div className='EvenInputs'>
            <Field
                data-halfwidth
                name="issuingCountry"
                placeholder="Issuing country"
                component={SelectFieldContainer}
                customOnChange={customStateChange}
                options={countries}
                validate={[validators.required]}
            />
            <Field
                data-halfwidth
                name="issuingAuthority"
                placeholder="Issuing Authority"
                component={SelectFieldContainer}
                options={issuingAuthorities}
                validate={[validators.required]}
            />
        </div>
        <span className={styles["AddDriverForm-FileUpload"]}>Upload your National ID Card</span>
        <ChooseFrontAndBackContainer
            imageOnly
        />
    </div>);
});
