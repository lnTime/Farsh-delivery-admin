import React from 'react';
import styles from './ActivationForm.module.scss';
import { Field } from 'redux-form';
import { TextFieldContainer } from '../../../../common/inputs/TextField/functional/TextFieldContainer';
import { SwitchFieldContainer } from '../../../../common/inputs/SwitchField/functional/SwitchFieldContainer';
import { validators } from '../../../../../utils/validators/validators';


export const ActivationFormUI = ({ setActivated, activated }) => {
    return (<div className={styles.ActivationForm}>
        <div className={styles.EvenInputs}>
            <Field 
                name="startDate"
                validate={[validators.required]}
                component={TextFieldContainer}
                placeholder="Start date"
            />
            <Field 
                name="endDate"
                validate={[validators.required]}
                component={TextFieldContainer}
                placeholder="End date"
            />
        </div>
        <div className={styles.SwitchWrapper}>
            <p className={styles['SwitchWrapper-Text']}>Activated</p>
            <SwitchFieldContainer 
                checked={activated}
                setActivated={setActivated}
                />
        </div>
    </div>);
}