import React from 'react';
import styles from './ActivationForm.module.scss';
import { Field } from 'redux-form';
import { SwitchFieldContainer } from '../../../../common/inputs/SwitchField/functional/SwitchFieldContainer';
import { validators } from '../../../../../utils/validators/validators';
import { DateFieldContainer } from '../../../../common/inputs/DateField/functional/DateFieldContainer';


export const ActivationFormUI = ({ setActivated, activated }) => {
    return (<div className={styles.ActivationForm}>
        <div className={styles.EvenInputs}>
            <Field
                name="activationStartDate"
                validate={[validators.required]}
                component={DateFieldContainer}
                placeholder="Start date"
            />
            <Field
                name="activationEndDate"
                validate={[validators.required]}
                component={DateFieldContainer}
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
