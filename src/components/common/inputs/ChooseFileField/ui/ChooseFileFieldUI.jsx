import React from 'react';
import './ChooseFileField.scss';
import {UploadContainer} from '../../../../common/icons/Upload/functional/UploadContainer';

export const ChooseFileFieldUI = React.memo(({title = 'JPG , PNG or PDF smaller than 10MB', 
                                            actionText = 'Drag and drop your image here or',
                                            buttonText = 'Choose file', hasError, ...props}) => {
    return (<div className={`ChooseFileField ${hasError ? 'ChooseFileField_error' : ''}`}>
        <input {...props} onChange={e => {
              e.preventDefault();
              // convert files to an array
              const files = [ ...e.target.files ];
              props.input.onChange(files[0])
        }} type="file" className="ChooseFileField-Input" />
        <div className="ChooseFileFieldUploadSection">
            <UploadContainer />
            {title && <span className="ChooseFileFieldUploadSection-Title">{title}</span>}
            {actionText && <span className="ChooseFileFieldUploadSection-ActionText">{actionText}</span>}
            {buttonText && <button type="button" className="ChooseFileFieldUploadSection-Button">{buttonText}</button>}
        </div>
    </div>);
});