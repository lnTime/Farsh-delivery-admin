import React, {useState} from 'react';
import { ChooseFileFieldUI } from '../ui/ChooseFileFieldUI';

export const ChooseFileFieldContainer = (props) => {
    const [preview, setPreview] = useState(null);

    const handleFileChange = e => {
        e.preventDefault();
        // convert files to an array
        const file = e.target.files[0];
        if (props.input) {
            props.input.onChange(file)
            props.setHasError(false);
        } else if (props.onChange) {
            props.onChange(e);
        }
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        }).then(base64 => setPreview(base64));        
    }

    if (preview) {
        return (
            <img src={preview} 
            style={{display: props.isNull ? 'none' : 'block'}}
            alt="Uploaded file" className={`Preview ${props.isNull ? 'Preview_none' : ''}`}/>
        )
    }

    return <ChooseFileFieldUI 
        handleFileChange={handleFileChange} 
        preview={preview} 
        setPreview={setPreview} 
        {...props}/>;
}