import React from 'react';
import {ChooseFileFieldContainer} from '../../../../common/inputs/ChooseFileField/functional/ChooseFileFieldContainer';
import styles from "./ChooseFrontAndBack.module.scss";


export const ChooseFrontAndBackUI = React.memo(({isFront, handleBackOpen, 
    handleFrontOpen, handleImageChange, isFrontChoosed, isBackChoosed,
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
            Front {isFrontChoosed ? '(choosed)' : ''}
        </button>
        
        <button
            type="button" 
            onClick={handleBackOpen}
            className={`${styles['AddDriverFormButtonGroup-Button']}
            ${!isFront ? styles['AddDriverFormButtonGroup-Button_blackBorder']: styles['AddDriverFormButtonGroup-Button_noBorder']}
            ${hasBackError ? styles['AddDriverFormButtonGroup-Button_error'] : ''}`}>
            Back {isBackChoosed ? '(choosed)' : ''}
        </button>
    </div>
    <ChooseFileFieldContainer  onChange={handleImageChange} />
</div>);
});