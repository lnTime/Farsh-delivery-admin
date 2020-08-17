import React from 'react';
import styles from './RealNameInformationModule.scss';
import { Field } from 'redux-form';
import {SelectFieldContainer} from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';
import {TextFieldContainer} from '../../../../common/inputs/TextField/functional/TextFieldContainer';
import { ChooseFrontAndBackContainer } from '../../ChooseFrontAndBack/functional/ChooseFrontAndBackContainer';
import { validators } from '../../../../../utils/validators/validators';

export const RealNameInformationFormUI = React.memo(({idTypeOptions, image, setImage}) => {
    return (<form className={styles["AddDriver-Form"]}>
        <div className={styles.EvenInputs}>
            <Field name="realNameIdType" 
                component={SelectFieldContainer}
                options={idTypeOptions}
                placeholder="ID type"    
                validate={[validators.required]}
            />
            <Field 
                name="realNameIdNo"
                data-halfwidth
                component={TextFieldContainer}
                placeholder="ID No."
                validate={[validators.required]}
            />
        </div>
        <div className={styles.EvenInputs}>
            <Field 
                name="realNameIssueDate"
                component={TextFieldContainer}
                placeholder="Issue date"
                validate={[validators.required]}
            />
            <Field 
                name="realNameExpiryDate"
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
                name="issuingAuthority"
                placeholder="Issuing Authority"
                component={SelectFieldContainer}
                options={[{id: 1, value: 'Auth'}]}
                validate={[validators.required]}
            />
        </div>
        <span className={styles["AddDriverForm-FileUpload"]}>Upload your National ID Card</span>
        <ChooseFrontAndBackContainer 
            image={image}
            setImage={setImage}
            />
    </form>);
});