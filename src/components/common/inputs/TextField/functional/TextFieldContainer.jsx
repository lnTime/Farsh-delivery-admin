import React, { useEffect } from 'react';
import {TextFieldUI} from '../ui/TextFieldUI';

export const TextFieldContainer = (props) => {
    console.log(props);
    const {onChange} = props.input;
    const {touched, invalid, error} = props.meta;
    const hasError = touched && invalid;
    console.log('Props', props);
    useEffect(() => {
        if(props['data-defaultvalue']) {
            onChange(props['data-defaultvalue']);
        }
    }, [props['data-defaultvalue']]);

    return <div> 
            {hasError ? <span className="Input-ErrorMessage">{error}</span> : null}
            <TextFieldUI {...props} hasError={hasError}/>
        </div>;
} 