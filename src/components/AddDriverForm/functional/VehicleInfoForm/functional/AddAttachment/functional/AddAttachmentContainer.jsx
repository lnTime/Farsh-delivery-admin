import React from 'react';
import { AddAttachmentUI } from '../ui/AddAttachmentUI';
import { useState } from 'react';


export const AddAttachmentContainer = ({openAtt}) => {
    const [cancel,setCancel] = useState(false)
    const handleCancel = () => {
        setCancel(true)
    } 
    return (
        <>
       {cancel ? <AddAttachmentUI handleCancel = {handleCancel}/> : null}
       </>
    )
}