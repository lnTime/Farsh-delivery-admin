import React, {useState} from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { ChooseFileFieldUI } from '../ui/ChooseFileFieldUI';

export const ChooseFileFieldContainer = (props) => {
    const [preview, setPreview] = useState(null);
    const [hovered, setHovered] = useState(null);
    const { initialImageSrc } = props;
    const onChange = props?.input?.onChange;

    const handleFileChange = e => {
        e.preventDefault();
        // convert files to an array
        const file = e.target.files[0];
        if (props.input) {
            props.input.onChange(file)
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

    useEffect(() => {
        if(initialImageSrc) {
            onChange(initialImageSrc);
        }
    }, [initialImageSrc, onChange]);

    const handleHover = useCallback(() => {
        setHovered(true);
    }, []);

    const handleHoverClose = useCallback(() => {
        setHovered(false);
    }, []);

    
    if(!props.input) {
        return null;
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
        initialImageSrc={initialImageSrc}
        handleHover={handleHover}
        handleHoverClose={handleHoverClose}
        hovered={hovered}
        {...props}/>;
}