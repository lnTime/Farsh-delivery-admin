import React from 'react';
import { TypeIconUI } from '../ui/TypeIconUI';

export const TypeIconContainer = ({type = '', className=''}) => {
    return <TypeIconUI type={type} className={className}/>;
}