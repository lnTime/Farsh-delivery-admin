import React from 'react';
import { UploadUI } from '../ui/UploadUI';
 
export const UploadContainer = ({className = ''}) => {
    return (<div className={className}>
        <UploadUI />
    </div>);
}