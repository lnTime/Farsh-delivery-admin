import React from 'react';
import { AddAttachmentUI } from '../ui/AddAttachmentUI';
import { useState } from 'react';


export const AddAttachmentContainer = ({setOpenAtt}) => {
    console.log('SetOpenAtt is: ', setOpenAtt);
    const handleCancel = () => {
        setOpenAtt(false);
    } 
    return (
        <AddAttachmentUI handleCancel = {handleCancel}/> 
    )
}