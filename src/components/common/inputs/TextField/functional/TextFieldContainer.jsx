import React, { useEffect } from 'react';
import {TextFieldUI} from '../ui/TextFieldUI';

export const TextFieldContainer = (props) => {
    const {touched, invalid, error} = props.meta;
    const hasError = touched && invalid;
    useEffect(() => {
        if(props['data-defaultvalue']) {
            props.input.onChange(props['data-defaultvalue']);
        }
    }, [props]);

    return <div className={`InputWrapper ${props['data-halfwidth'] ? 'InputWrapper_halfWidth' : ''}`}> 
            {hasError ? <span className="Input-ErrorMessage">{error}</span> : null}
            <TextFieldUI  {...props} hasError={hasError} />
        </div>;
} 