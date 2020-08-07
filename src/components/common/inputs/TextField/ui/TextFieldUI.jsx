import React from 'react';
import './TextField.scss';

export const TextFieldUI = ({input, hasError, ...custom}) => {

    return <input {...input} {...custom} 
    className={`InputBlock ${custom['data-fullwidth'] ? 'InputBlock_fullWidth' : ''} ${hasError ? 'InputBlock_error' : ''}`}/>;
}