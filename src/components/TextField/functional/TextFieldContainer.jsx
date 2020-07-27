import React from 'react';
import {TextFieldUI} from '../ui/TextFieldUI';

export const TextFieldContainer = (props) => {
    console.log('Props are: ', props);
    return(
            <TextFieldUI {...props}/>
    )
}