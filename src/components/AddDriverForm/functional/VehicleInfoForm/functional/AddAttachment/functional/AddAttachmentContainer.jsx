import React from 'react';
import { AddAttachmentUI } from '../ui/AddAttachmentUI';

export const AddAttachmentContainer = ({setOpenAtt}) => {
    const handleCancel = () => {
        setOpenAtt(false);
    } 
    return (
        <AddAttachmentUI handleCancel = {handleCancel}/> 
    )
}