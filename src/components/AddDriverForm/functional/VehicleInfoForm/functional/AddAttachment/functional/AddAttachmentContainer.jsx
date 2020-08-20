import React from 'react';
import { AddAttachmentUI } from '../ui/AddAttachmentUI';
import { useState } from 'react';

export const AddAttachmentContainer = ({ setOpenAtt, setFileInfo, inpValue, setInpValue, fileInfo }) => {
    const [Addfile, setAddFile] = useState(null);
    const handleFileChange = (e) => {
        e.preventDefault();
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        const name = file.name;
        const size = Math.round(file.size / 1024);
        const fileData = {
            name,
            size,
            inpValue  
        }
        reader.onloadend = () => {
            setAddFile({ file, src: reader.result, hasError: false });
            setFileInfo(oldData=>([...oldData,fileData]))
            setOpenAtt(false);
            console.log(fileInfo);
        };
    }
    
    const handleChange = (e) => {
        setInpValue(e.target.value)
    }
    const handleCancel = () => {
        setOpenAtt(false);
    }
    return (
        <AddAttachmentUI
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            handleCancel={handleCancel}
            src={Addfile && Addfile.src}
        />
    )
}