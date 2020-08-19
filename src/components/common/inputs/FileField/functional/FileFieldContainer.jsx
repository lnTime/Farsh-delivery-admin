import React from 'react';
import { FileFieldUI, FileFieldUIMini } from '../ui/FileFieldUI';

export const FileFieldContainer = (props) => {
    return <FileFieldUI {...props} />;
}
export const FileFieldMiniContainer = (props) => {
    return <FileFieldUIMini {...props}/>
}