import React from 'react';
import './FileField.scss';
import {BigAvatarContainer} from '../../../icons/BigAvatar/functional/BigAvatarContainer';



export const FileFieldUIMini = React.memo(({input, ...custom}) => {
    return (<div className={`${custom['data-haserror'] ? 'FileUpload-Error' : ''}`}>
        <input type="file" {...input} {...custom} className="FileUpload-Input FileUpload-Input_mini"/>
            <div className="UploadContent UploadContent_flex">
                <span className="UploadContent-Text"></span>
                <button className="Buttons__Add" disabled={custom.disabled} type="button">Browse</button>
            </div>
    </div>);
});


export const FileFieldUI = React.memo(({input, ...custom}) => {
    return (<div className={`FileUpload ${custom['data-haserror'] ? 'FileUpload-Error' : ''}`}>
        <input type="file" {...input} {...custom} value={null} onChange={e => {
              e.preventDefault();
              const {files} = e.target;
              input.onChange(files[0])
        }} className="FileUpload-Input" accept="image/*"/>
        <div className="Upload">
            {custom.src ? <img src={custom.src} alt="Uploaded icon" className="Uploaded-Image" /> :
            <BigAvatarContainer className="Upload-SVG"/> }
            <div className="UploadContent">
                <span className="UploadContent-Text">Drag and drop your image here or</span>
                <button className="UploadContent-Button" type="button">Browse</button>
            </div>
        </div>
    </div>);
});