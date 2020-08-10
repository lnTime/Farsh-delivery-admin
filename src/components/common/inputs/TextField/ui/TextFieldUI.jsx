import React from 'react';
import './TextField.scss';

export const TextFieldUI = React.memo(({input, hasError, ...custom}) => {
    return <input {...input} {...custom} 
    className={`InputBlock ${custom['data-fullwidth'] ? 'InputBlock_fullWidth' : ''}
    ${custom.className ? custom.className : 'InputBlock_withoutMargin'} 
    ${hasError ? 'InputBlock_error' : ''}`}/>;
});