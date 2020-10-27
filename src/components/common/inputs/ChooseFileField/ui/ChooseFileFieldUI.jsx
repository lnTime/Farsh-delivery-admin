import React from 'react';
import './ChooseFileField.scss';
import { UploadContainer } from '../../../../common/icons/Upload/functional/UploadContainer';

export const ChooseFileFieldUI = React.memo(({ title = 'JPG , PNG or PDF smaller than 10MB',
    actionText = 'Drag and drop your image here or', handleFileChange, imageOnly, handleHover, handleHoverClose, hovered,
    buttonText = 'Choose file', isNull, initialImageSrc, hasError, setHasError, setPreview, ...props }) => {

    return (<div
                onMouseOut={handleHoverClose}
                onMouseEnter={handleHover}
                className={`ChooseFileField 
                ${isNull ? 'ChooseFileField_none' : ''}
                ${hasError ? 'ChooseFileField_error' : ''}`}>
                    { !initialImageSrc || hovered ? <>
                        <input {...props} onChange={handleFileChange} type="file" accept={imageOnly ? 'image/*' : ''} className="ChooseFileField-Input" />
                        <div className="ChooseFileFieldUploadSection">
                            <UploadContainer />
                            {title && <span className="ChooseFileFieldUploadSection-Title">{title}</span>}
                            {actionText && <span className="ChooseFileFieldUploadSection-ActionText">{actionText}</span>}
                            {buttonText && <button type="button" className="ChooseFileFieldUploadSection-Button">{buttonText}</button>}
                        </div>
                    </>
                        :
                        <img src={initialImageSrc} alt="Already Uploaded" />
                    }
    </div>);
});