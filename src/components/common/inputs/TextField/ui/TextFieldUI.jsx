import React from 'react';
import './TextField.scss';

export const TextFieldUI = ({input, ...custom}) => {
    return <input {...input} {...custom} className={`InputBlock ${custom.fullWidth ? 'InputBlock_fullWidth' : ''}`}/>;
}