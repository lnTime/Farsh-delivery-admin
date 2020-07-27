import React from 'react';
import { Field } from 'redux-form';

export const TextFieldUI = (props) => {
    return (
        <>
            <div>
                <input className = 'input'
                    {...props}
                />
            </div>
        </>
    )
}