import React from 'react';
import './FileField.scss';
import {BigAvatarContainer} from '../../../icons/BigAvatar/functional/BigAvatarContainer';

export const FileFieldUI = React.memo(({input, ...custom}) => {
    return (<div className={`FileUpload ${custom['data-haserror'] ? 'FileUpload-Error' : ''}`}>
        <input type="file" {...input} {...custom} className="FileUpload-Input" accept="image/*"/>
        <div className="Upload">
            {custom.src ? <img src={custom.src} className="Uploaded-Image" /> :
            <BigAvatarContainer className="Upload-SVG"/> }
            <div className="UploadContent">
                <span className="UploadContent-Text">Drag and drop your image here or</span>
                <button className="UploadContent-Button" type="button">Browse</button>
            </div>
        </div>
    </div>);
});