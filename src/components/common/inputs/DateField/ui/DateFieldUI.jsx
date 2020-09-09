import React from 'react';
import styles from './DateField.module.scss';

export const DateFieldUI = ({input, meta, ...custom}) => {
    const errorMessage = meta.touched && meta.error;
    return (<div className={`${styles.DateFieldWrapper} ${custom['data-fullWidth'] ? styles['DateFieldWrapper_fullWidth'] : ''}`}>
        {errorMessage ? <span class="Input-ErrorMessage">{errorMessage}</span> : null}
        <input type="date" className={`${styles.DateField} InputBlock`} {...input}/>
        <input {...custom} value={input.value} readOnly
        className={`InputBlock ${custom['data-fullwidth'] ? 'InputBlock_fullWidth' : ''}
        ${custom.className ? custom.className : 'InputBlock_withoutMargin'} 
        ${errorMessage ? 'InputBlock_error' : ''}`}/>
    </div>)
}