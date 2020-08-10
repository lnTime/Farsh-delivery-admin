import React from 'react';
import './ChooseFileField.scss';
import {UploadContainer} from '../../../../common/icons/Upload/functional/UploadContainer';

export const ChooseFileFieldUI = React.memo((props) => {
    return (<div className="ChooseFileField">
        <input {...props} type="file" className="ChooseFileField-Input" />
        <div className="ChooseFileFieldUploadSection">
            <UploadContainer />
            <span className="ChooseFileFieldUploadSection-Title">JPG , PNG or PDF smaller than 10MB</span>
            <span className="ChooseFileFieldUploadSection-ActionText">Drag and drop your image here or</span>
            <button type="button" className="ChooseFileFieldUploadSection-Button">Choose file</button>
        </div>
    </div>);
});