import React from 'react';
import { EditUI } from '../ui/EditUI';

export const EditContainer = ({isEdit}) => {
    return <EditUI isEdit = {isEdit} />;
}