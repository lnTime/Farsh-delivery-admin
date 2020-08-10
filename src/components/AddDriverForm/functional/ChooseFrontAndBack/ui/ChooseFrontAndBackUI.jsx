import React from 'react';
import './ChooseFrontAndBack.scss';
import {ChooseFileFieldContainer} from '../../../../common/inputs/ChooseFileField/functional/ChooseFileFieldContainer';

export const ChooseFrontAndBackUI = React.memo(({isFront, handleBackOpen, 
    handleFrontOpen, handleImageChange, isFrontChoosed, isBackChoosed,
    hasFrontError, hasBackError}) => { 
    return (<div className="FileUploadWrapper">
    <div className="AddDriverFormButtonGroup">
        <button 
            type="button"
            onClick={handleFrontOpen}
            className={`AddDriverFormButtonGroup-Button 
            ${isFront ? 'AddDriverFormButtonGroup-Button_blackBorder': 'AddDriverFormButtonGroup-Button_noBorder'}
            ${hasFrontError ? 'AddDriverFormButtonGroup-Button_error' : ''}`}>
            Front {isFrontChoosed ? '(choosed)' : ''}
        </button>
        <button
            type="button" 
            onClick={handleBackOpen}
            className={`AddDriverFormButtonGroup-Button 
            ${!isFront ? 'AddDriverFormButtonGroup-Button_blackBorder': 'AddDriverFormButtonGroup-Button_noBorder'}
            ${hasBackError ? 'AddDriverFormButtonGroup-Button_error' : ''}`}>
            Back {isBackChoosed ? '(choosed)' : ''}
        </button>
    </div>
    <ChooseFileFieldContainer onChange={handleImageChange} />
</div>);
});