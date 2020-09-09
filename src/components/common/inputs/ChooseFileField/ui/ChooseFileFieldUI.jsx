import React from 'react';
import './ChooseFileField.scss';
import { UploadContainer } from '../../../../common/icons/Upload/functional/UploadContainer';

export const ChooseFileFieldUI = React.memo(({ title = 'JPG , PNG or PDF smaller than 10MB',
    actionText = 'Drag and drop your image here or', handleFileChange,
    buttonText = 'Choose file', isNull, hasError, setHasError, setPreview, ...props }) => {
    return (<div className={`ChooseFileField 
    ${isNull ? 'ChooseFileField_none' : ''}
    ${hasError ? 'ChooseFileField_error' : ''}`}>
        <input {...props} onChange={handleFileChange} type="file" className="ChooseFileField-Input" />
        <div className="ChooseFileFieldUploadSection">
            <UploadContainer />
            {title && <span className="ChooseFileFieldUploadSection-Title">{title}</span>}
            {actionText && <span className="ChooseFileFieldUploadSection-ActionText">{actionText}</span>}
            {buttonText && <button type="button" className="ChooseFileFieldUploadSection-Button">{buttonText}</button>}
        </div>
    </div>);
});