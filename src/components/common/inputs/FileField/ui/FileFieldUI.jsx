import React from 'react';
import './FileField.scss';
import {BigAvatarContainer} from '../../../icons/BigAvatar/functional/BigAvatarContainer';

export const FileFieldUI = ({input, ...custom}) => {
    return (<div className="FileUpload">
        <input type="file" {...input} {...custom} className="FileUpload-Input"/>
        <div className="Upload">
            <BigAvatarContainer className="Upload-SVG"/>
            <div className="UploadContent">
                <span className="UploadContent-Text">Drag and drop your image here or</span>
                <button className="UploadContent-Button" type="button">Browse</button>
            </div>
        </div>
    </div>);
}