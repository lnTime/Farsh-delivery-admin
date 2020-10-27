import React from 'react';
import {ChooseFileFieldContainer} from '../../../../common/inputs/ChooseFileField/functional/ChooseFileFieldContainer';
import styles from "./ChooseFrontAndBack.module.scss";
import { Field } from "redux-form";
import { validators } from '../../../../../utils/validators/validators';

export const ChooseFrontAndBackUI = React.memo(({isFront, handleFrontOpen, handleBackOpen, imageOnly,
    hasFrontError, hasBackError}) => {
    return (<div className={styles.FileUploadWrapper}>
    <div className={styles.AddDriverFormButtonGroup}>
        <button
            type="button"
            onClick={handleFrontOpen}
            className={`${styles['AddDriverFormButtonGroup-Button']} 
            ${isFront ? styles['AddDriverFormButtonGroup-Button_blackBorder'] : 
            styles['AddDriverFormButtonGroup-Button_noBorder']}
            ${hasFrontError ? styles['AddDriverFormButtonGroup-Button_error'] : ''}`}>
            Front
        </button>

        <button
            type="button"
            onClick={handleBackOpen}
            className={`${styles['AddDriverFormButtonGroup-Button']}
            ${!isFront ? styles['AddDriverFormButtonGroup-Button_blackBorder']: styles['AddDriverFormButtonGroup-Button_noBorder']}
            ${hasBackError ? styles['AddDriverFormButtonGroup-Button_error'] : ''}`}>
            Back
        </button>
    </div>
    <Field 
        name="front"
        validate={[validators.required]}
        component={props => <ChooseFileFieldContainer imageOnly={imageOnly} isNull={isFront} {...props} />}
    />
    <Field 
        name="back"
        validate={[validators.required]}
        component={props => <ChooseFileFieldContainer imageOnly={imageOnly} isNull={!isFront} {...props} />}
    />
</div>);
});
