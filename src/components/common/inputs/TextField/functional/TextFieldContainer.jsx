import React, { useEffect } from 'react';
import {TextFieldUI} from '../ui/TextFieldUI';

export const TextFieldContainer = (props) => {
    const {onChange} = props.input;
    useEffect(() => {
        if(props.defaultValue) {
            onChange(props.defaultValue);
        }
    }, [props.defaultValuem]);

    return <TextFieldUI {...props}/>;
} 