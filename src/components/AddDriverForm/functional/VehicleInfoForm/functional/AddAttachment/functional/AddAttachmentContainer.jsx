import React, { useEffect } from 'react';
import { AddAttachmentUI } from '../ui/AddAttachmentUI';
import { useState } from 'react';

export const AddAttachmentContainer = ({ setOpenAtt, setFileInfo, inpValue, setInpValue, setDocuments }) => {
    const [file, setFile] = useState(null);
    const [disabled, setDisabled] = useState(false)
    const handleFileChange = (e) => {
        e.preventDefault();
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        const name = file.name;
        const size = +(file.size / 1024).toString().slice(0, 5);
        const lastPart = file['type'].split('/')[1];
        const indexOfDot = lastPart.indexOf('.')
        const type = lastPart.slice(0, indexOfDot === -1 ? lastPart.length : indexOfDot);
        const fileData = {
            name,
            size,
            inpValue,
            type
        }
        reader.onloadend = () => {
            setFile({ file, src: reader.result, hasError: false });
            setFileInfo(oldData => {
                let id;
                if (!oldData.length) {
                    id = 1;
                } else {
                    id = oldData[oldData.length - 1].id + 1;
                }
                return ([...oldData, { ...fileData, id }])
            })
            setOpenAtt(false);
            setInpValue('');
            setDocuments(documents => [...documents, file]);
        };
    }
    const handleChange = (e) => {
        setInpValue(e.target.value)
    }
    const handleCancel = () => {
        setOpenAtt(false);
    }

    useEffect(() => {
        if (!(inpValue && disabled)) {
            setDisabled(true);
        } else {
            if (disabled === true) {
                setDisabled(false);
            }
        }
    }, [inpValue]);

    return (
        <AddAttachmentUI
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            handleCancel={handleCancel}
            src={file && file.src}
            inputValue={inpValue}
            disabled={disabled}
        />
    )
}
